const displayHeader = document.getElementById("header");
const displayMain = document.getElementById("main");
const displayBoutonFooter = document.getElementById("btn-div-end");
const startBouton = document.getElementById("sButton");
const nextBouton = document.getElementById("nButton");

// function displayStartButton() {
//   startBouton.style.display = "none";
// }
// displayStartButton();
// startBouton.style.display = "none";
displayMain.style.display = "none";
nextBouton.style.display = "none";

startBouton.addEventListener("click", () => {
  displayHeader.style.display = "none";
  displayMain.style.display = "block";
  nextBouton.style.display = "block";
});
