function changeHighHeader() {
  const header = document.querySelector(".header");

  let schero = document.querySelector(".schero");
  window.addEventListener("scroll", function () {
    let scrolly = window.scrollY;
    if (scrolly > header.offsetHeight)
      return header.classList.add("--scrollheader");
    if (scrolly < header.offsetHeight + header.offsetTop)
      return header.classList.remove("--scrollheader");
  });
}
changeHighHeader();
