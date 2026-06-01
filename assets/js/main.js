// Cervecería El Ángel — JS mínimo
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
