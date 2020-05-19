const hamburger = document.querySelector(".hamburger-parent");
const hamburerLines = document.querySelectorAll(".hamburger-child");
const cross = document.querySelector(".sidebar-cross");
const sidebar = document.querySelector(".sidebar");
const dimmer = document.querySelector("#dimmer");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("out");
  //   dimmer.classList.toggle("dimmed");
  //   switchX();
  hamburger.classList.toggle("out");

  //   setTimeout(function () {
  //     hamburger.classList.toggle("X");
  //   }, 240);
});

cross.addEventListener("click", () => {
  sidebar.classList.toggle("out");
  hamburger.classList.toggle("out");
});
