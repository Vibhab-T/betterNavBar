let menu = document.querySelector(".menuOpen");
let close = document.querySelector(".menuClose");
let sub = document.querySelector(".sub");
let sub2 = document.querySelector("#sub");
let card = document.querySelector(".pricing-bg");

menu.addEventListener("click", () => {
  let sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
});

close.addEventListener("click", () => {
  let sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
});

sub.addEventListener("click", () => {
  let sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
  console.log("helo");
  card.classList.toggle("active");
});

sub2.addEventListener("click", () => {
  console.log("helo");
  card.classList.toggle("active");
});
