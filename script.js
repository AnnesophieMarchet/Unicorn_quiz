const displayHeader = document.getElementById("header");
const displayMain = document.getElementById("main");
const displayBoutonFooter = document.getElementById("btn-div-end");
const startBouton = document.getElementById("sButton");
const nextBouton = document.getElementById("nButton");
const questionId = document.getElementById("question");
const footerDisplay = document.querySelector("footer");

function UnDisplayMainArea() {
  displayMain.style.display = "none";
}
function displayMainArea() {
  displayMain.style.display = "block";
}
function undisplayHeaderArea() {
  displayHeader.style.display = "none";
}
function displayHeaderArea() {
  displayHeader.style.display = "block";
}
function UndisplayNextButtonFooter() {
  nextBouton.style.display = "none";
}
function displayNextButtonFooter() {
  nextBouton.style.display = "block";
}
function disabledNextButtonFooter() {
  nextBouton.disabled = true;
}
function unDisabledNextButtonFooter() {
  nextBouton.disabled = false;
}
function unDisplayStartButtonHeader() {
  startBouton.style.display = "none";
}
function displayFooter() {
  footerDisplay.style.display = "block";
}
function unDisplayFooter() {
  footerDisplay.style.display = "none";
}

let count = 0;
let questionIndex = 0;

UnDisplayMainArea();
UndisplayNextButtonFooter();
unDisplayFooter();

startBouton.addEventListener("click", () => {
  undisplayHeaderArea();
  displayMainArea();
  displayNextButtonFooter();
  displayFooter();
  createQuestion(Questions[0].question);
  createResponse(Questions[0].answers);
  disabledNextButtonFooter();
});

nextBouton.addEventListener("click", () => {
  undisplayHeaderArea();
  displayMainArea();
  displayNextButtonFooter();
  unDisplayStartButtonHeader();
  questionIndex++;
  createQuestion(Questions[questionIndex].question);
  createResponse(Questions[questionIndex].answers);
  disabledNextButtonFooter();
});

let questionDisplay = document.createElement("p");
let divDisplayUnicorn = document.createElement("img");

function createQuestion(question) {
  questionId.innerText = "";
  questionDisplay.innerText = question;
  divDisplayUnicorn.src = "./assets/unicorn-picture.svg";
  divDisplayUnicorn.id = "pictureUnicornQuestion";
  questionId.appendChild(divDisplayUnicorn);
  questionId.appendChild(questionDisplay);
}
let divResponse = document.querySelector(".grid-container");

function createResponse(answers) {
  divResponse.innerHTML = "";
  for (let answer of answers) {
    let buttonResponse = document.createElement("button");
    buttonResponse.innerText = answer;
    divResponse.appendChild(buttonResponse);
    buttonResponse.addEventListener("click", () => {
      let isCorrect = answer === Questions[questionIndex].correct;
      if (isCorrect) {
        unDisabledNextButtonFooter();
        buttonResponse.style.backgroundColor = "#1ecdad";
        buttonResponse.style.border = "none";
        count++;
        console.log(count);
      } else {
        buttonResponse.style.backgroundColor = "#e96f66";
        buttonResponse.style.border = "none";
        unDisabledNextButtonFooter();
      }
      let responseButtons = document.querySelectorAll(".grid-container button");
      responseButtons.forEach((btn) => {
        btn.disabled = true;
      });
    });
  }

  let resultDisplay = document.createElement("p");
  resultDisplay.classList.add("resultStyle");
  nextBouton.addEventListener("click", endQuiz);

  const pathShape = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" });
  const textShape = confetti.shapeFromText({ text: "🦄", scalar: 4 });

  function endQuiz() {
    if (questionIndex >= Questions.length) {
      for (let index = 0; index <= Math.floor(Math.random() * 10); index++) {
        confetti({
          particleCount: 150,
          spread: 360,
          startVelocity: 30,
          origin: {
            x: Math.random() - 0.2,
            y: Math.random(),
          },
          colors: ["#1ecdad", "#e9afa3", "#1882d3", "#e96f66"],
          shapes: [pathShape, textShape],
          scalar: 2,
        });
      }

      nextBouton.innerText = "Try Again";
      let percentage = (count / Questions.length) * 100;
      resultDisplay.textContent = `Good Job : ${percentage}%`;
      divResponse.style.display = "none";
      questionId.innerText = "";
      questionId.appendChild(resultDisplay);
      resetQuiz();
      return;
    }
  }
}

function resetQuiz() {
  nextBouton.addEventListener("click", () => {
    nextBouton.textContent = "Next";
    divResponse.style.display = "grid";
  });
  count = 0;
  questionIndex = 0;
  resultDisplay.textContent = "";
}
