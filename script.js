// // Carga dinámica de header y footer para todas las páginas
// document.addEventListener("DOMContentLoaded", () => {
//     Promise.all([
//       fetch("header.html").then(res => res.text()),
//       fetch("footer.html").then(res => res.text())
//     ])
//     .then(([header, footer]) => {
//       document.getElementById("header").innerHTML = header;
//       document.getElementById("footer").innerHTML = footer;
//     })
//     .catch(err => console.error("Error al cargar componentes:", err));
  
//     // Mensaje accesible en el formulario
//     const form = document.getElementById("contact-form");
//     if (form) {
//       form.addEventListener("submit", e => {
//         e.preventDefault();
//         alert("Formulario enviado correctamente. Gracias por contactarnos.");
//       });
//     }
//   });
  // Carga dinámica de header y footer para todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("header.html").then(res => res.text()),
    fetch("footer.html").then(res => res.text())
  ])
  .then(([header, footer]) => {
    const headerEl = document.getElementById("header");
    const footerEl = document.getElementById("footer");

    if (headerEl) headerEl.innerHTML = header;
    if (footerEl) footerEl.innerHTML = footer;

    // Después de inyectar footer, inicializamos el banner de cookies
    initCookieBanner();
  })
  .catch(err => console.error("Error al cargar componentes:", err));

  // Mensaje accesible en el formulario
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Formulario enviado correctamente. Gracias por contactarnos.");
    });
  }
});

// Simulación de aviso de cookies (sin usar rastreadores ni cookies innecesarias)
function initCookieBanner() {
  const banner = document.querySelector(".cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept-btn");

  if (!banner || !acceptBtn) return;

  // Detectar si estamos en la página de inicio
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "/InclusivaCR/" || // por si es un subdirectorio
    window.location.pathname === "/index.html";

  if (!isHomePage) {
    // Ocultar el banner en todas las páginas que no sean la de inicio
    banner.style.display = "none";
    return;
  }

  // Si es la página de inicio, mostrarlo siempre
  banner.style.display = "flex";

  // Al aceptar, el banner se oculta solo durante la sesión actual
  acceptBtn.addEventListener("click", () => {
    banner.style.display = "none";
  });
}
