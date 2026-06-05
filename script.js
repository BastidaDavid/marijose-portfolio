const works = [
  {
    title: "Denim Plume",
    description: "Pantalon denim amplio con aplicacion de plumas azules. Lamina con vista frontal y posterior.",
    image: "./assets/pdf-pages/page-1.png",
    alt: "Boceto de pantalon denim con plumas",
    palette: [
      { name: "Denim hielo", hex: "#B9DCE8", rgb: "185, 220, 232" },
      { name: "Azul pluma", hex: "#47758F", rgb: "71, 117, 143" },
      { name: "Algodon", hex: "#F7F7F3", rgb: "247, 247, 243" },
      { name: "Linea carbon", hex: "#161312", rgb: "22, 19, 18" }
    ]
  },
  {
    title: "Objeto petalo",
    description: "Exploracion de objeto con piezas organicas, patrones pictoricos y base de madera.",
    image: "./assets/pdf-pages/page-2.png",
    alt: "Objeto con petalos organicos de colores",
    palette: [
      { name: "Rojo petalo", hex: "#BC251D", rgb: "188, 37, 29" },
      { name: "Ambar calido", hex: "#F2A13A", rgb: "242, 161, 58" },
      { name: "Azul gris", hex: "#8DA9A8", rgb: "141, 169, 168" },
      { name: "Madera", hex: "#9A6D3C", rgb: "154, 109, 60" },
      { name: "Negro tinta", hex: "#100907", rgb: "16, 9, 7" }
    ]
  },
  {
    title: "Silueta editorial",
    description: "Estudio de prenda desde una presentacion limpia de figurines y proporcion.",
    image: "./assets/pdf-pages/page-3.png",
    alt: "Boceto de moda pagina 3",
    palette: [
      { name: "Azul marino", hex: "#1C3A5E", rgb: "28, 58, 94" },
      { name: "Negro suave", hex: "#24201F", rgb: "36, 32, 31" },
      { name: "Piel luz", hex: "#E7B79C", rgb: "231, 183, 156" },
      { name: "Rojo detalle", hex: "#B92D2A", rgb: "185, 45, 42" }
    ]
  },
  {
    title: "Look estructurado",
    description: "Boceto de moda con enfasis en linea, caida y lectura de prenda completa.",
    image: "./assets/pdf-pages/page-4.png",
    alt: "Boceto de moda pagina 4",
    palette: [
      { name: "Verde hoja", hex: "#8DA56E", rgb: "141, 165, 110" },
      { name: "Verde sombra", hex: "#536B48", rgb: "83, 107, 72" },
      { name: "Piel tenue", hex: "#E2B59C", rgb: "226, 181, 156" },
      { name: "Grafito", hex: "#3C3631", rgb: "60, 54, 49" }
    ]
  },
  {
    title: "Rosa translucido",
    description: "Prenda rosa con transparencia y cinturon central, mostrada en frente y espalda.",
    image: "./assets/pdf-pages/page-5.png",
    alt: "Vestido rosa translucido con cinturon",
    palette: [
      { name: "Rosa velo", hex: "#E6A8C1", rgb: "230, 168, 193" },
      { name: "Rosa sombra", hex: "#C8759E", rgb: "200, 117, 158" },
      { name: "Cinturon plata", hex: "#CFC8C3", rgb: "207, 200, 195" },
      { name: "Flor vino", hex: "#7A394F", rgb: "122, 57, 79" }
    ]
  },
  {
    title: "Estudio de volumen",
    description: "Exploracion de volumen y detalle pensada para lectura editorial de portfolio.",
    image: "./assets/pdf-pages/page-6.png",
    alt: "Boceto de moda pagina 6",
    palette: [
      { name: "Rosa papel", hex: "#EAB2B7", rgb: "234, 178, 183" },
      { name: "Azul acento", hex: "#6A9DB7", rgb: "106, 157, 183" },
      { name: "Beige luz", hex: "#D9B884", rgb: "217, 184, 132" },
      { name: "Fondo carbon", hex: "#2F2D2B", rgb: "47, 45, 43" }
    ]
  },
  {
    title: "Sketchbook I",
    description: "Pieza de proceso con trazo manual y composicion de color.",
    image: "./assets/pdf-pages/page-7.png",
    alt: "Boceto manual pagina 7",
    palette: [
      { name: "Azul bolso", hex: "#3C78A8", rgb: "60, 120, 168" },
      { name: "Verde bolso", hex: "#55764F", rgb: "85, 118, 79" },
      { name: "Violeta", hex: "#7B4C90", rgb: "123, 76, 144" },
      { name: "Rojo sombrero", hex: "#9E3D35", rgb: "158, 61, 53" },
      { name: "Piel lapiz", hex: "#D7AA7B", rgb: "215, 170, 123" }
    ]
  },
  {
    title: "Sketchbook II",
    description: "Boceto manual como material de proceso para mostrar busqueda visual.",
    image: "./assets/pdf-pages/page-8.png",
    alt: "Boceto manual pagina 8",
    palette: [
      { name: "Azul cielo", hex: "#7AB2D0", rgb: "122, 178, 208" },
      { name: "Naranja", hex: "#D47B34", rgb: "212, 123, 52" },
      { name: "Lavanda", hex: "#A88AC0", rgb: "168, 138, 192" },
      { name: "Rojo cereza", hex: "#B94A3B", rgb: "185, 74, 59" }
    ]
  },
  {
    title: "Cositas",
    description: "Vestido amarillo con patron ilustrado, paleta lateral y pequenos motivos graficos.",
    image: "./assets/pdf-pages/page-9.png",
    alt: "Vestido amarillo con patrones dibujados",
    palette: [
      { name: "Amarillo vestido", hex: "#E8CF55", rgb: "232, 207, 85" },
      { name: "Azul flor", hex: "#3B84B8", rgb: "59, 132, 184" },
      { name: "Verde hoja", hex: "#3F8A51", rgb: "63, 138, 81" },
      { name: "Rojo fruta", hex: "#B9423B", rgb: "185, 66, 59" },
      { name: "Rosa flor", hex: "#D5749D", rgb: "213, 116, 157" }
    ]
  }
];

const filterButtons = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxDescription = document.querySelector("#lightboxDescription");
const lightboxCount = document.querySelector("#lightboxCount");
const lightboxPalette = document.querySelector("#lightboxPalette");
const closeButton = document.querySelector(".close-button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    workCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

workCards.forEach((card) => {
  const trigger = card.querySelector("button");

  trigger.addEventListener("click", () => {
    const work = works[Number(trigger.dataset.index)];

    lightboxImage.src = work.image;
    lightboxImage.alt = work.alt;
    lightboxTitle.textContent = work.title;
    lightboxDescription.textContent = work.description;
    lightboxCount.textContent = `Lamina ${Number(trigger.dataset.index) + 1} de ${works.length}`;
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
    lightbox.showModal();
  });
});

closeButton.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
