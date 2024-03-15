const displayHeader = document.getElementById("header");
const displayMain = document.getElementById("main");
const displayBoutonFooter = document.getElementById("btn-div-end");
const startBouton = document.getElementById("sButton");
const nextBouton = document.getElementById("nButton");
const questionId = document.getElementById("question");
const answers0 = document.getElementById("b1");
const answers1 = document.getElementById("b2");
const answers2 = document.getElementById("b3");
const answers3 = document.getElementById("b4");
const titre1 = document.getElementById("titre");
const poney = document.getElementById("logo");

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
  createQuestion(Questions[0].question);
  createResponse(Questions[0].answers);
});

nextBouton.addEventListener("click", () => {
  displayHeader.style.display = "block";
  displayMain.style.display = "block";
  nextBouton.style.display = "block";
  startBouton.style.display = "none";
  titre1.style.display = "none";
  poney.style.display = "none";
  createQuestion(Questions[1].question);
  createResponse(Questions[1].answers);
});

function createQuestion(question) {
  let questionDisplay = document.createElement("p");
  questionId.innerText = "";
  questionDisplay.innerText = question;

  questionId.appendChild(questionDisplay);
}

function createResponse(answers) {
  answers0.innerText = answers[0];
  answers1.innerText = answers[1];
  answers2.innerText = answers[2];
  answers3.innerText = answers[3];
}

let goodAnswer = document.getElementById("b3");
goodAnswer.addEventListener("click", function () {
  goodAnswer.style.backgroundColor = "#1ecdad";
});
let wrongAnswer = document.getElementById("b1");
wrongAnswer.addEventListener("click", function () {
  wrongAnswer.style.backgroundColor = "#e96f66";
});

let wrongAnswer2 = document.getElementById("b2");
wrongAnswer2.addEventListener("click", function () {
  wrongAnswer2.style.backgroundColor = "#e96f66";
});
let wrongAnswer3 = document.getElementById("b4");
wrongAnswer3.addEventListener("click", function () {
  wrongAnswer3.style.backgroundColor = "#e96f66";
});

let nextQuest 

