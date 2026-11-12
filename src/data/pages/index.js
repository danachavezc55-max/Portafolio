import { proyectos } from './proyectos.js';

const index = {
    pagina: "Inicio",
    resumen: "Estudiante de desarrollo web apasionada por crear sitios rápidos, accesibles y bien estructurados.",
    sobre_mi: [
        "Soy estudiante de la UNICAH y me enfoco en el desarrollo web moderno. Disfruto convertir diseños en interfaces limpias, usando herramientas como Vite, LESS y Handlebars.",
        "Me interesa el rendimiento: por eso mis proyectos se compilan, se minifican y se purgan para enviar solo el CSS que realmente se usa."
    ],
    habilidades: [
        { grupo: "Frontend", items: ["HTML5", "CSS3", "LESS", "JavaScript"] },
        { grupo: "Herramientas", items: ["Vite", "Handlebars", "Git", "GitHub Pages"] },
        { grupo: "Buenas prácticas", items: ["Responsive", "Accesibilidad", "CSS purgado", "Minificación"] }
    ],
    destacados: proyectos.slice(0, 3)
};

export default index;
