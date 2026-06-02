// Restaurante Angelín — JS
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("menu-principal");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  const anyo = document.getElementById("anyo");
  if (anyo) anyo.textContent = new Date().getFullYear();
})();

/* ---------- Lightbox para galería ---------- */
(function () {
  const figures = Array.from(document.querySelectorAll(".gallery figure"));
  const items = figures
    .map((f) => {
      const img = f.querySelector("img");
      const cap = f.querySelector("figcaption");
      return img && img.src
        ? { src: img.src, alt: img.alt || "", caption: cap ? cap.textContent.trim() : "" }
        : null;
    })
    .filter(Boolean);
  if (!items.length) return;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("aria-hidden", "true");
  lb.innerHTML =
    '<button class="lightbox-close" aria-label="Cerrar">&times;</button>' +
    '<button class="lightbox-nav lightbox-prev" aria-label="Anterior">&#x2039;</button>' +
    '<button class="lightbox-nav lightbox-next" aria-label="Siguiente">&#x203A;</button>' +
    '<figure class="lightbox-stage"><img alt=""><figcaption class="lightbox-caption"></figcaption></figure>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector(".lightbox-caption");
  let idx = 0;

  function show(i) {
    idx = (i + items.length) % items.length;
    lbImg.src = items[idx].src;
    lbImg.alt = items[idx].alt;
    lbCap.textContent = items[idx].caption + "  ·  " + (idx + 1) + " / " + items.length;
  }
  function open(i) {
    show(i);
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  figures.forEach((f, i) => {
    if (!f.querySelector("img")) return;
    f.style.cursor = "zoom-in";
    f.setAttribute("tabindex", "0");
    f.setAttribute("role", "button");
    f.addEventListener("click", (e) => {
      e.preventDefault();
      open(i);
    });
    f.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(i);
      }
    });
  });

  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target === lbImg || e.target.classList.contains("lightbox-stage")) close();
  });
  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.querySelector(".lightbox-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    show(idx - 1);
  });
  lb.querySelector(".lightbox-next").addEventListener("click", (e) => {
    e.stopPropagation();
    show(idx + 1);
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(idx - 1);
    else if (e.key === "ArrowRight") show(idx + 1);
  });
})();
