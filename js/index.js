const acc = document.querySelectorAll(".questions__item-description");

acc.forEach((elem, index) => {
  acc[index].addEventListener("click", () => {
    elem.classList.toggle("active");
    const panel = elem.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
