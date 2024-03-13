const displayHeader = document.getElementById("header");
const displayMain = document.getElementById("main");
const displayBoutonFooter = document.getElementById("btn-div-end");
const startBouton = document.getElementById("sButton");
const nextBouton = document.getElementById("nButton");
const questionId = document.getElementById("question");

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

console.log(Questions[0].question);
function createQuestion(question) {
  let questionDisplay = document.createElement("p");
  questionDisplay.innerText = question;
  questionId.appendChild(questionDisplay);
}

createQuestion(Questions[0].question);
