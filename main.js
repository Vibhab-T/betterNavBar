let menu = document.querySelector(".menuOpen");
let close = document.querySelector(".menuClose");

menu.addEventListener("click", () => {
  let sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
});

close.addEventListener("click", () => {
  let sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
});
