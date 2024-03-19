const displayHeader = document.getElementById("header");
const displayMain = document.getElementById("main");
const displayBoutonFooter = document.getElementById("btn-div-end");
const startBouton = document.getElementById("sButton");
const nextBouton = document.getElementById("nButton");
const questionId = document.getElementById("question");
//const answers0 = document.getElementById("b1");
//const answers1 = document.getElementById("b2");
//const answers2 = document.getElementById("b3");
//const answers3 = document.getElementById("b4");
//const titre1 = document.getElementById("titre");
//const poney = document.getElementById("logo");

// function displayStartButton() {
//   startBouton.style.display = "none";
// }
// displayStartButton();
// startBouton.style.display = "none";
let count = 0;
let questionIndex = 0;
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
  displayHeader.style.display = "none";
  displayMain.style.display = "block";
  nextBouton.style.display = "block";
  startBouton.style.display = "none";
  titre1.style.display = "none";
  poney.style.display = "none";
  questionIndex++;
  createQuestion(Questions[questionIndex].question);
  createResponse(Questions[questionIndex].answers);
});

function createQuestion(question) {
  let questionDisplay = document.createElement("p");
  questionId.innerText = "";
  questionDisplay.innerText = question;

  questionId.appendChild(questionDisplay);
}

function createResponse(answers) {
  let divResponse = document.querySelector(".grid-container");
  divResponse.innerHTML = "";
  for (let answer of answers) {
    let buttonResponse = document.createElement("button");
    // buttonResponse.classList.add("button-class");
    buttonResponse.innerText = answer;
    divResponse.appendChild(buttonResponse);

    buttonResponse.addEventListener("click", () => {
      // buttonResponse.innerText = answer;
      // divResponse.innerText = "";

      count++;
      let isCorrect = answer === Questions[questionIndex].correct;

      if (isCorrect) {
        buttonResponse.style.backgroundColor = "#1ecdad";
      } else {
        buttonResponse.style.backgroundColor = "#e96f66";
      }
      let responseButtons = document.querySelectorAll(".grid-container button");
      responseButtons.forEach((btn) => {
        btn.disabled = true;
      });
    });
  }

  console.log(count++);
  // questionIndex++;

  // answers0.innerText = answers[0];
  // answers1.innerText = answers[1];
  // answers2.innerText = answers[2];
  // answers3.innerText = answers[3];
}

// let goodAnswer = document.getElementById("b3");
// goodAnswer.addEventListener("click", function () {
//   goodAnswer.style.backgroundColor = "#1ecdad";
// });
// let wrongAnswer = document.getElementById("b1");
// wrongAnswer.addEventListener("click", function () {
// goodAnswer.style.backgroundColor = "#1ecdad";
// });

// let wrongAnswer2 = document.getElementById("b2");
// wrongAnswer2.addEventListener("click", function () {
//   wrongAnswer2.style.backgroundColor = "#e96f66";
// });
// let wrongAnswer3 = document.getElementById("b4");
// wrongAnswer3.addEventListener("click", function () {
//   wrongAnswer3.style.backgroundColor = "#e96f66";
// });
