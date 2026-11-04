const works = [
  {
    title: "Denim Plume",
    description: "Pantalon denim amplio con aplicacion de plumas azules. Lamina con vista frontal y posterior.",
    image: "./assets/pdf-pages/page-1.png",
    alt: "Sketch de pantalon denim con plumas",
    palette: [
      { name: "Ice Denim", hex: "#B9DCE8", rgb: "185, 220, 232" },
      { name: "Feather Blue", hex: "#47758F", rgb: "71, 117, 143" },
      { name: "Cotton", hex: "#F7F7F3", rgb: "247, 247, 243" },
      { name: "Charcoal Line", hex: "#161312", rgb: "22, 19, 18" }
    ]
  },
  {
    title: "Petal Object",
    description: "Exploracion de objeto con piezas organicas, patrones pictoricos y base de madera.",
    image: "./assets/pdf-pages/page-2.png",
    alt: "Object with organic colored petals",
    palette: [
      { name: "Petal Red", hex: "#BC251D", rgb: "188, 37, 29" },
      { name: "Warm Amber", hex: "#F2A13A", rgb: "242, 161, 58" },
      { name: "Gray Blue", hex: "#8DA9A8", rgb: "141, 169, 168" },
      { name: "Wood", hex: "#9A6D3C", rgb: "154, 109, 60" },
      { name: "Ink Black", hex: "#100907", rgb: "16, 9, 7" }
    ]
  },
  {
    title: "Editorial Silhouette",
    description: "Garment study desde una presentacion limpia de figurines y proporcion.",
    image: "./assets/pdf-pages/page-3.png",
    alt: "Fashion sketch page 3",
    palette: [
      { name: "Navy Blue", hex: "#1C3A5E", rgb: "28, 58, 94" },
      { name: "Soft Black", hex: "#24201F", rgb: "36, 32, 31" },
      { name: "Light Skin", hex: "#E7B79C", rgb: "231, 183, 156" },
      { name: "Detail Red", hex: "#B92D2A", rgb: "185, 45, 42" }
    ]
  },
  {
    title: "Structured Look",
    description: "Fashion sketch emphasizing line, drape and the reading of the full garment.",
    image: "./assets/pdf-pages/page-4.png",
    alt: "Fashion sketch page 4",
    palette: [
      { name: "Leaf Green", hex: "#8DA56E", rgb: "141, 165, 110" },
      { name: "Shadow Green", hex: "#536B48", rgb: "83, 107, 72" },
      { name: "Pale Skin", hex: "#E2B59C", rgb: "226, 181, 156" },
      { name: "Graphite", hex: "#3C3631", rgb: "60, 54, 49" }
    ]
  },
  {
    title: "Translucent Rose",
    description: "Prenda rosa con transparencia y cinturon central, mostrada en frente y espalda.",
    image: "./assets/pdf-pages/page-5.png",
    alt: "Vestido rosa translucido con cinturon",
    palette: [
      { name: "Veil Pink", hex: "#E6A8C1", rgb: "230, 168, 193" },
      { name: "Shadow Pink", hex: "#C8759E", rgb: "200, 117, 158" },
      { name: "Silver Belt", hex: "#CFC8C3", rgb: "207, 200, 195" },
      { name: "Wine Flower", hex: "#7A394F", rgb: "122, 57, 79" }
    ]
  },
  {
    title: "Volume Study",
    description: "Exploracion de volumen y detalle pensada para lectura editorial de portfolio.",
    image: "./assets/pdf-pages/page-6.png",
    alt: "Fashion sketch page 6",
    palette: [
      { name: "Paper Pink", hex: "#EAB2B7", rgb: "234, 178, 183" },
      { name: "Accent Blue", hex: "#6A9DB7", rgb: "106, 157, 183" },
      { name: "Light Beige", hex: "#D9B884", rgb: "217, 184, 132" },
      { name: "Charcoal Background", hex: "#2F2D2B", rgb: "47, 45, 43" }
    ]
  },
  {
    title: "Sketchbook I",
    description: "Process piece with hand-drawn strokes and color composition.",
    image: "./assets/pdf-pages/page-7.png",
    alt: "Hand sketch page 7",
    palette: [
      { name: "Bag Blue", hex: "#3C78A8", rgb: "60, 120, 168" },
      { name: "Bag Green", hex: "#55764F", rgb: "85, 118, 79" },
      { name: "Violet", hex: "#7B4C90", rgb: "123, 76, 144" },
      { name: "Hat Red", hex: "#9E3D35", rgb: "158, 61, 53" },
      { name: "Pencil Skin", hex: "#D7AA7B", rgb: "215, 170, 123" }
    ]
  },
  {
    title: "Sketchbook II",
    description: "Hand sketch as process material showing visual exploration.",
    image: "./assets/pdf-pages/page-8.png",
    alt: "Hand sketch page 8",
    palette: [
      { name: "Sky Blue", hex: "#7AB2D0", rgb: "122, 178, 208" },
      { name: "Orange", hex: "#D47B34", rgb: "212, 123, 52" },
      { name: "Lavender", hex: "#A88AC0", rgb: "168, 138, 192" },
      { name: "Cherry Red", hex: "#B94A3B", rgb: "185, 74, 59" }
    ]
  },
  {
    title: "Little Things",
    description: "Vestido amarillo con patron ilustrado, paleta lateral y pequenos motivos graficos.",
    image: "./assets/pdf-pages/page-9.png",
    alt: "Vestido amarillo con patrones dibujados",
    palette: [
      { name: "Dress Yellow", hex: "#E8CF55", rgb: "232, 207, 85" },
      { name: "Flower Blue", hex: "#3B84B8", rgb: "59, 132, 184" },
      { name: "Leaf Green", hex: "#3F8A51", rgb: "63, 138, 81" },
      { name: "Fruit Red", hex: "#B9423B", rgb: "185, 66, 59" },
      { name: "Flower Pink", hex: "#D5749D", rgb: "213, 116, 157" }
    ]
  }
];

const filterButtons = document.querySelectorAll(".filter");
const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxDescription = document.querySelector("#lightboxDescription");
const lightboxCount = document.querySelector("#lightboxCount");
const lightboxPalette = document.querySelector("#lightboxPalette");
const closeButton = document.querySelector(".close-button");
const uploadInput = document.querySelector("#workUpload");
const workCount = document.querySelector("#workCount");
const editDialog = document.querySelector("#editDialog");
const editForm = document.querySelector("#editForm");
const editTitle = document.querySelector("#editTitle");
const editDescription = document.querySelector("#editDescription");
const editCategory = document.querySelector("#editCategory");
const editMeta = document.querySelector("#editMeta");
const cancelEdit = document.querySelector("#cancelEdit");
const deleteFromEditor = document.querySelector("#deleteFromEditor");
const editCurrentWork = document.querySelector("#editCurrentWork");
const deleteCurrentWork = document.querySelector("#deleteCurrentWork");
const accountTrigger = document.querySelector("#accountTrigger");
const authDialog = document.querySelector("#authDialog");
const authForm = document.querySelector("#authForm");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const togglePassword = document.querySelector("#togglePassword");
const authMessage = document.querySelector("#authMessage");
const authStatus = document.querySelector("#authStatus");
const cancelAuth = document.querySelector("#cancelAuth");
const signUpButton = document.querySelector("#signUpButton");
const signOutButton = document.querySelector("#signOutButton");
const supabaseUrl = "https://nnsznkxevilixxykoipa.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uc3pua3hldmlsaXh4eWtvaXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NjA1MTUsImV4cCI6MjA5NjAzNjUxNX0.6-_h0xoKQBNordz6WwPZWy14KON3SKISVkx-TI67tyw";
const supabaseClient = window.supabase?.createClient(supabaseUrl, supabaseAnonKey);
const adminEmail = "maryjo.f18@gmail.com";
let activeFilter = "all";
let editingIndex = null;
let activeWorkIndex = null;
let currentUser = null;
let remoteReady = Boolean(supabaseClient);

hydrateInitialCards();
initializeSupabase();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyFilter();
  });
});

gallery.addEventListener("click", (event) => {
  const trigger = event.target.closest(".work-card button");

  if (!trigger) {
    return;
  }

  openWork(Number(trigger.dataset.index));
});

uploadInput.addEventListener("change", async (event) => {
  const files = Array.from(event.target.files).filter((file) => file.type.startsWith("image/"));

  for (const file of files) {
    await addUploadedWork(file);
  }

  event.target.value = "";
});

closeButton.addEventListener("click", () => {
  lightbox.close();
});

cancelEdit.addEventListener("click", () => {
  editDialog.close();
});

accountTrigger.addEventListener("click", () => {
  if (!authEmail.value) {
    authEmail.value = adminEmail;
  }
  authDialog.showFashionl();
});

cancelAuth.addEventListener("click", () => {
  authDialog.close();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await signIn();
});

signUpButton.addEventListener("click", async () => {
  await signUp();
});

signOutButton.addEventListener("click", async () => {
  await signOut();
});

togglePassword.addEventListener("click", () => {
  const isVisible = authPassword.type === "text";
  authPassword.type = isVisible ? "password" : "text";
  togglePassword.textContent = isVisible ? "Show" : "Hide";
  togglePassword.setAttribute("aria-label", isVisible ? "Mostrar password" : "Hide password");
  togglePassword.setAttribute("aria-pressed", String(!isVisible));
});

deleteFromEditor.addEventListener("click", () => {
  if (editingIndex !== null) {
    const deleted = deleteWork(editingIndex);

    if (deleted) {
      editDialog.close();
    }
  }
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (editingIndex === null) {
    return;
  }

  const work = works[editingIndex];
  work.title = editTitle.value.trim() || "New work";
  work.description = editDescription.value.trim() || "Work selected for the portfolio.";
  work.category = editCategory.value;
  work.meta = editMeta.value.trim() || "Work updated";
  work.alt = `Portfolio work: ${work.title}`;

  updateCard(editingIndex);
  if (canManageRemote()) {
    saveRemoteWork(work);
  }
  editDialog.close();
  applyFilter();
});

editCurrentWork.addEventListener("click", () => {
  if (activeWorkIndex !== null) {
    lightbox.close();
    openEditor(activeWorkIndex);
  }
});

deleteCurrentWork.addEventListener("click", () => {
  if (activeWorkIndex !== null) {
    const deleted = deleteWork(activeWorkIndex);

    if (deleted) {
      lightbox.close();
    }
  }
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

function hydrateInitialCards() {
  document.querySelectorAll(".work-card").forEach((card, index) => {
    const trigger = card.querySelector("button");
    const meta = card.querySelector(".work-meta > span");

    works[index].category = card.dataset.category;
    works[index].meta = meta?.textContent.trim() || "Selected work";
    works[index].large = card.classList.contains("large");
    trigger.dataset.index = index;
  });
}

function applyFilter() {
  document.querySelectorAll(".work-card").forEach((card) => {
    const shouldShow = activeFilter === "all" || card.dataset.category === activeFilter;
    card.classList.toggle("is-hidden", !shouldShow);
  });
}

function openWork(index) {
  const work = works[index];

  activeWorkIndex = index;
  lightboxImage.src = work.image;
  lightboxImage.alt = work.alt;
  lightboxTitle.textContent = work.title;
  lightboxDescription.textContent = work.description;
  lightboxCount.textContent = `Plate ${index + 1} of ${works.length}`;
  lightboxPalette.replaceChildren(...work.palette.map((color) => {
    const item = document.createElement("div");
    item.className = "palette-swatch";
    item.innerHTML = `
      <span class="swatch-color" style="--swatch: ${color.hex}"></span>
      <span class="swatch-copy">
        <strong>${color.name}</strong>
        <small>${color.hex} / RGB ${color.rgb}</small>
      </span>
    `;
    return item;
  }));
  lightbox.showFashionl();
}

async function addUploadedWork(file) {
  const image = await readFileAsDataUrl(file);
  const title = formatFileName(file.name);
  const palette = await extractPalette(image);
  const work = {
    title,
    description: "New work uploaded to the gallery to review alongside the rest of the portfolio.",
    image,
    alt: `Work uploaded: ${title}`,
    palette,
    category: "subidas",
    meta: "Work uploaded",
    large: false
  };

  if (canManageRemote()) {
    const remoteWork = await createRemoteWork(file, work);

    if (remoteWork) {
      Object.assign(work, remoteWork);
    }
  }

  works.push(work);
  renderUploadedCard(work, works.length - 1);
  updateWorkCount();
  activeFilter = "all";
  filterButtons.forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
  applyFilter();
}

function renderUploadedCard(work, index) {
  const card = document.createElement("article");
  card.className = "work-card";
  card.dataset.category = work.category;
  if (work.source === "remote") {
    card.dataset.source = "remote";
  }
  card.innerHTML = `
    <button type="button" data-index="${index}">
      <img src="${work.image}" alt="${work.alt}">
      <span class="work-meta"><strong>${work.title}</strong><span>${work.meta}</span></span>
    </button>
  `;
  gallery.append(card);
}

function renderRemoteWork(work) {
  works.push(work);
  renderUploadedCard(work, works.length - 1);
  updateWorkCount();
  applyFilter();
}

function openEditor(index) {
  const work = works[index];

  editingIndex = index;
  editTitle.value = work.title;
  editDescription.value = work.description;
  editCategory.value = work.category || "subidas";
  editMeta.value = work.meta || "Selected work";
  editDialog.showFashionl();
}

function updateCard(index) {
  const card = document.querySelector(`.work-card button[data-index="${index}"]`)?.closest(".work-card");
  const work = works[index];

  if (!card) {
    return;
  }

  card.dataset.category = work.category;
  card.classList.toggle("large", Boolean(work.large));
  card.querySelector("img").alt = work.alt;
  card.querySelector(".work-meta strong").textContent = work.title;
  card.querySelector(".work-meta > span").textContent = work.meta;
}

function deleteWork(index) {
  const work = works[index];
  const confirmed = window.confirm(`Delete "${work.title}" from this gallery?`);

  if (!confirmed) {
    return false;
  }

  document.querySelector(`.work-card button[data-index="${index}"]`)?.closest(".work-card")?.remove();
  works.splice(index, 1);
  deleteRemoteWork(work);
  activeWorkIndex = null;
  editingIndex = null;
  reindexCards();
  updateWorkCount();
  applyFilter();
  return true;
}

function reindexCards() {
  document.querySelectorAll(".work-card button[data-index]").forEach((button, index) => {
    button.dataset.index = index;
  });
}

function updateWorkCount() {
  workCount.textContent = works.length;
}

async function initializeSupabase() {
  if (!supabaseClient) {
    authStatus.textContent = "Supabase no cargo. La galeria esta en modo demo.";
    return;
  }

  const { data } = await supabaseClient.auth.getSession();
  currentUser = data.session?.user || null;
  updateAuthUI();
  await loadRemoteWorks();

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    currentUser = session?.user || null;
    updateAuthUI();
    await loadRemoteWorks();
  });
}

function updateAuthUI() {
  if (currentUser) {
    accountTrigger.textContent = "Account";
    signOutButton.disabled = false;

    if (isAdminUser()) {
      authStatus.textContent = `Guardando como ${currentUser.email}`;
      uploadInput.disabled = false;
    } else {
      authStatus.textContent = `Session active, but only ${adminEmail} can save changes.`;
      uploadInput.disabled = true;
    }
    return;
  }

  accountTrigger.textContent = "Log in";
  authStatus.textContent = "Log in to save changes.";
  signOutButton.disabled = true;
  uploadInput.disabled = false;
}

function isAdminUser() {
  return currentUser?.email?.toLowerCase() === adminEmail;
}

function canManageRemote() {
  return Boolean(currentUser && remoteReady && isAdminUser());
}

async function signIn() {
  if (!supabaseClient) {
    setAuthMessage("Supabase no cargo. Intenta recargar la pagina.");
    return;
  }

  setAuthMessage("Entrando...");
  const { error } = await supabaseClient.auth.signInWithPassword({
    email: authEmail.value.trim().toLowerCase(),
    password: authPassword.value
  });

  if (error) {
    setAuthMessage(error.message);
    return;
  }

  setAuthMessage("Logged in.");
  authDialog.close();
}

async function signUp() {
  if (!supabaseClient) {
    setAuthMessage("Supabase no cargo. Intenta recargar la pagina.");
    return;
  }

  setAuthMessage("Creating account...");
  const { error } = await supabaseClient.auth.signUp({
    email: authEmail.value.trim().toLowerCase(),
    password: authPassword.value
  });

  if (error) {
    setAuthMessage(error.message);
    return;
  }

  setAuthMessage("Account created. Check your email if Supabase asks for confirmation.");
}

async function signOut() {
  await supabaseClient.auth.signOut();
  setAuthMessage("Logged out.");
  authDialog.close();
}

function setAuthMessage(message) {
  authMessage.textContent = message;
}

async function loadRemoteWorks() {
  if (!supabaseClient || !remoteReady) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("works")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    remoteReady = false;
    authStatus.textContent = "Falta crear tabla/bucket en Supabase. Revisa supabase/schema.sql.";
    return;
  }

  document.querySelectorAll('.work-card[data-source="remote"]').forEach((card) => card.remove());
  for (let index = works.length - 1; index >= 0; index -= 1) {
    if (works[index].source === "remote") {
      works.splice(index, 1);
    }
  }
  reindexCards();

  data.map(fromRemoteRow).forEach(renderRemoteWork);
}

async function createRemoteWork(file, work) {
  const safeName = file.name.replace(/[^a-z0-9._-]/gi, "-").toLowerCase();
  const path = `${currentUser.id}/${crypto.randomUUID()}-${safeName}`;
  const { error: uploadError } = await supabaseClient.storage
    .from("portfolio-works")
    .upload(path, file, { cacheControl: "3600", upsert: false });

  if (uploadError) {
    authStatus.textContent = uploadError.message;
    return null;
  }

  const { data: publicImage } = supabaseClient.storage
    .from("portfolio-works")
    .getPublicUrl(path);

  const row = {
    title: work.title,
    description: work.description,
    category: work.category,
    meta: work.meta,
    image_url: publicImage.publicUrl,
    storage_path: path,
    alt: work.alt,
    palette: work.palette,
    is_large: false
  };
  const { data, error } = await supabaseClient
    .from("works")
    .insert(row)
    .select()
    .single();

  if (error) {
    authStatus.textContent = error.message;
    return null;
  }

  return fromRemoteRow(data);
}

async function saveRemoteWork(work) {
  if (!work.remoteId || !canManageRemote()) {
    return;
  }

  const { error } = await supabaseClient
    .from("works")
    .update({
      title: work.title,
      description: work.description,
      category: work.category,
      meta: work.meta,
      alt: work.alt,
      palette: work.palette,
      is_large: work.large
    })
    .eq("id", work.remoteId);

  if (error) {
    authStatus.textContent = error.message;
  }
}

async function deleteRemoteWork(work) {
  if (!work.remoteId || !canManageRemote()) {
    return;
  }

  const { error } = await supabaseClient
    .from("works")
    .delete()
    .eq("id", work.remoteId);

  if (error) {
    authStatus.textContent = error.message;
    return;
  }

  if (work.storagePath) {
    await supabaseClient.storage.from("portfolio-works").remove([work.storagePath]);
  }
}

function fromRemoteRow(row) {
  return {
    title: row.title,
    description: row.description,
    image: row.image_url,
    alt: row.alt || `Portfolio work: ${row.title}`,
    palette: row.palette || [],
    category: row.category,
    meta: row.meta || "Work uploaded",
    large: Boolean(row.is_large),
    remoteId: row.id,
    storagePath: row.storage_path,
    source: "remote"
  };
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function formatFileName(name) {
  return name
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase()) || "New work";
}

function extractPalette(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const size = 80;
      const scale = Math.min(size / img.naturalWidth, size / img.naturalHeight);
      canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));

      const context = canvas.getContext("2d", { willReadFrequently: true });
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      const buckets = new Map();

      for (let index = 0; index < pixels.length; index += 4) {
        const alpha = pixels[index + 3];
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const brightness = (red + green + blue) / 3;

        if (alpha < 220 || brightness > 244 || brightness < 18) {
          continue;
        }

        const key = [red, green, blue].map((value) => Math.round(value / 32) * 32).join(",");
        const current = buckets.get(key) || { count: 0, red: 0, green: 0, blue: 0 };
        current.count += 1;
        current.red += red;
        current.green += green;
        current.blue += blue;
        buckets.set(key, current);
      }

      const palette = Array.from(buckets.values())
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
        .map((bucket, index) => {
          const red = Math.round(bucket.red / bucket.count);
          const green = Math.round(bucket.green / bucket.count);
          const blue = Math.round(bucket.blue / bucket.count);

          return {
            name: `Color ${index + 1}`,
            hex: rgbToHex(red, green, blue),
            rgb: `${red}, ${green}, ${blue}`
          };
        });

      resolve(palette.length ? palette : [{ name: "Paper", hex: "#F7F7F3", rgb: "247, 247, 243" }]);
    });
    img.src = src;
  });
}

function rgbToHex(red, green, blue) {
  return `#${[red, green, blue].map((value) => value.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}
