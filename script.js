const displayHeader = document.getElementById("header");
const displayMain = document.getElementById("main");
const displayBoutonFooter = document.getElementById("btn-div-end");
const startBouton = document.getElementById("sButton");
const nextBouton = document.getElementById("nButton");
const questionId = document.getElementById("question");
const answers0 = document.getElementById("b1")
const answers1 = document.getElementById("b2")
const answers2 = document.getElementById("b3")
const answers3 = document.getElementById("b4")

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
  questionId.innerText = "";
  questionDisplay.innerText = question;

  questionId.appendChild(questionDisplay);
}

createQuestion(Questions[0].question);

function createResponse(answers) {
  answers0.innerText = answers[0]
  answers1.innerText = answers[1]
  answers2.innerText = answers[2]
  answers3.innerText = answers[3]
}
createResponse(Questions[0].answers)

var goodAnswer = document.getElementById("b3");
goodAnswer.addEventListener("click", function () {
  goodAnswer.style.backgroundColor = "green";
});
var wrongAnswer = document.getElementById("b1");
wrongAnswer.addEventListener("click", function () {
  wrongAnswer.style.backgroundColor = "red";
});
