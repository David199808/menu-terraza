/*
  Lógica del menú: dibuja las secciones a partir de MENU (menu-data.js),
  arma la barra de categorías, el buscador y resalta la categoría visible.
  Normalmente NO hace falta tocar este archivo para cambiar el menú.
*/

(function () {
  const menuEl = document.getElementById("menu");
  const catsEl = document.getElementById("cats");
  const searchEl = document.getElementById("search");
  const emptyEl = document.getElementById("empty");

  const GRUPOS = { comida: "Comida", bebidas: "Bebidas" };

  // $30.000 (formato colombiano, sin decimales)
  const formatoPrecio = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  });
  const precio = (n) => formatoPrecio.format(n).replace(/\s/g, "");

  // Evita que un texto del menú se interprete como HTML
  const esc = (txt = "") =>
    String(txt).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Quita tildes y mayúsculas para que la búsqueda sea flexible
  const normalizar = (txt = "") =>
    txt.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  /* ---------- Plantillas ---------- */

  function tarjeta(item) {
    const clases = ["card", item.foto ? "card--foto" : "card--sinfoto", item.agotado ? "is-agotado" : ""].join(" ");
    return `
      <article class="${clases}" data-buscar="${esc(normalizar(item.nombre + " " + (item.descripcion || "") + " " + (item.opcion || "")))}">
        ${item.foto ? `<div class="card__img"><img src="${esc(item.foto)}" alt="${esc(item.nombre)}" loading="lazy" width="800" height="800"></div>` : ""}
        <div class="card__body">
          ${item.destacado ? `<span class="badge">${esc(item.destacado)}</span>` : ""}
          <div class="card__top">
            <h3 class="card__name">${esc(item.nombre)}</h3>
            <span class="price">${item.agotado ? "Agotado" : precio(item.precio)}</span>
          </div>
          ${item.descripcion ? `<p class="card__desc">${esc(item.descripcion)}</p>` : ""}
          ${item.opcion ? `<p class="card__opt">${esc(item.opcion)}</p>` : ""}
        </div>
      </article>`;
  }

  function fila(item) {
    return `
      <li class="row ${item.agotado ? "is-agotado" : ""}" data-buscar="${esc(normalizar(item.nombre + " " + (item.descripcion || "")))}">
        <div class="row__line">
          <span class="row__name">${esc(item.nombre)}</span>
          <span class="row__dots" aria-hidden="true"></span>
          <span class="price">${item.agotado ? "Agotado" : precio(item.precio)}</span>
        </div>
        ${item.descripcion ? `<p class="row__desc">${esc(item.descripcion)}</p>` : ""}
        ${item.destacado ? `<span class="badge">${esc(item.destacado)}</span>` : ""}
      </li>`;
  }

  function seccion(sec) {
    const items =
      sec.estilo === "lista"
        ? `<ul class="list">${sec.items.map(fila).join("")}</ul>`
        : `<div class="grid">${sec.items.map(tarjeta).join("")}</div>`;
    return `
      <section class="section" id="${esc(sec.id)}" aria-labelledby="t-${esc(sec.id)}">
        <h2 class="section__title" id="t-${esc(sec.id)}">${esc(sec.titulo)}</h2>
        ${sec.nota ? `<p class="section__note">${esc(sec.nota)}</p>` : ""}
        ${items}
      </section>`;
  }

  /* ---------- Dibujar ---------- */

  let html = "";
  let grupoActual = null;
  MENU.forEach((sec) => {
    if (sec.grupo !== grupoActual) {
      grupoActual = sec.grupo;
      html += `<h2 class="group" id="grupo-${esc(sec.grupo)}">${esc(GRUPOS[sec.grupo] || sec.grupo)}</h2>`;
    }
    html += seccion(sec);
  });
  menuEl.innerHTML = html;

  catsEl.innerHTML = MENU.map(
    (sec) => `<a class="chip" href="#${esc(sec.id)}" data-id="${esc(sec.id)}">${esc(sec.titulo)}</a>`
  ).join("");

  /* ---------- Resaltar la categoría visible ---------- */

  const chips = [...catsEl.querySelectorAll(".chip")];
  let activa = null;
  const activar = (id) => {
    if (id === activa) return; // nada cambió: no hacer nada
    activa = id;
    chips.forEach((c) => {
      const on = c.dataset.id === id;
      c.classList.toggle("is-active", on);
      if (on) {
        c.setAttribute("aria-current", "true");
        // Centra el botón moviendo SOLO la barra de categorías (horizontal).
        // No usar scrollIntoView: también mueve la página y frena el scroll.
        const posBoton = c.getBoundingClientRect().left - catsEl.getBoundingClientRect().left + catsEl.scrollLeft;
        const izquierda = posBoton - (catsEl.clientWidth - c.offsetWidth) / 2;
        catsEl.scrollTo({ left: Math.max(0, izquierda), behavior: "smooth" });
      } else {
        c.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activar(e.target.id);
      });
    },
    { rootMargin: "-35% 0px -60% 0px" }
  );
  document.querySelectorAll(".section").forEach((s) => observer.observe(s));

  /* ---------- Buscador ---------- */

  searchEl.addEventListener("input", () => {
    const q = normalizar(searchEl.value.trim());
    let total = 0;

    document.querySelectorAll(".section").forEach((sec) => {
      let visibles = 0;
      sec.querySelectorAll("[data-buscar]").forEach((el) => {
        const ok = !q || el.dataset.buscar.includes(q);
        el.hidden = !ok;
        if (ok) visibles++;
      });
      sec.hidden = visibles === 0;
      total += visibles;
    });

    document.querySelectorAll(".group").forEach((g) => {
      // Oculta "Comida" o "Bebidas" si no queda ninguna sección visible debajo
      let el = g.nextElementSibling;
      let alguna = false;
      while (el && !el.classList.contains("group")) {
        if (!el.hidden) alguna = true;
        el = el.nextElementSibling;
      }
      g.hidden = !alguna;
    });

    emptyEl.hidden = total > 0;
  });
})();
