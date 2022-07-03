(() => {
  const refs = {
    openMenuBtn: document.querySelector(".modal-open-btn"),
    closeMenuBtn: document.querySelector(".modal-close-btn"),
    menu: document.querySelector(".mob-menu"),
  };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();