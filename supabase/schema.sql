-- Run this once in Supabase SQL Editor.
-- It creates persistent portfolio works plus storage rules for the Marijose admin email.

create extension if not exists pgcrypto;

create table if not exists public.works (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null,
  description text not null,
  category text not null check (category in ('moda', 'objeto', 'manual', 'subidas')),
  meta text not null default 'Obra subida',
  image_url text not null,
  storage_path text,
  alt text,
  palette jsonb not null default '[]'::jsonb,
  is_large boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.works enable row level security;

drop policy if exists "Public can read portfolio works" on public.works;
create policy "Public can read portfolio works"
on public.works
for select
using (true);

drop policy if exists "Users can create their own works" on public.works;
drop policy if exists "Maryjo can create works" on public.works;
create policy "Maryjo can create works"
on public.works
for insert
to authenticated
with check (
  auth.uid() = user_id
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
);

drop policy if exists "Users can update their own works" on public.works;
drop policy if exists "Maryjo can update works" on public.works;
create policy "Maryjo can update works"
on public.works
for update
to authenticated
using (
  auth.uid() = user_id
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
)
with check (
  auth.uid() = user_id
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
);

drop policy if exists "Users can delete their own works" on public.works;
drop policy if exists "Maryjo can delete works" on public.works;
create policy "Maryjo can delete works"
on public.works
for delete
to authenticated
using (
  auth.uid() = user_id
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists works_set_updated_at on public.works;
create trigger works_set_updated_at
before update on public.works
for each row
execute function public.set_updated_at();

insert into storage.buckets (id, name, public)
values ('portfolio-works', 'portfolio-works', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public can read portfolio images" on storage.objects;
create policy "Public can read portfolio images"
on storage.objects
for select
using (bucket_id = 'portfolio-works');

drop policy if exists "Users can upload portfolio images" on storage.objects;
drop policy if exists "Maryjo can upload portfolio images" on storage.objects;
create policy "Maryjo can upload portfolio images"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'portfolio-works'
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "Users can update their portfolio images" on storage.objects;
drop policy if exists "Maryjo can update portfolio images" on storage.objects;
create policy "Maryjo can update portfolio images"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'portfolio-works'
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'portfolio-works'
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "Users can delete their portfolio images" on storage.objects;
drop policy if exists "Maryjo can delete portfolio images" on storage.objects;
create policy "Maryjo can delete portfolio images"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'portfolio-works'
  and lower(auth.jwt() ->> 'email') = 'maryjo.f18@gmail.com'
  and (storage.foldername(name))[1] = auth.uid()::text
);
