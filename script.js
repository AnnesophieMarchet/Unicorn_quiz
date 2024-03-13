const questions = [
    {
        question: "Sous quel nom était connu la licorne à son origine dans l'antiquité grecque?",
        answers: [
            { text: "Marcel", correct: false},
            { text: "Gislaine", correct: false},
            { text: "Uni", correct: false},
            { text: "Unicornis", correct: true},
        ]
    },
    {
        question: "jouait-elle au basket?",
        answers: [
            { text: "Marcel", correct: false},
            { text: "Gislaine", correct: false},
            { text: "Uni", correct: false},
            { text: "Unicornis", correct: true},
        ]   
    },
    {
        question: "buvait-elle?",
        answers: [
            { text: "Marcel", correct: true},
            { text: "Gislaine", correct: false},
            { text: "Uni", correct: false},
            { text: "Unicornis", correct: false},
        ]
    },
    {
        question: "dormait-elle",
        answers: [
            { text: "Marcel", correct: false},
            { text: "Gislaine", correct: true},
            { text: "Uni", correct: false},
            { text: "Unicornis", correct: fasle},
        ]
    }
    {
        question: "ronflait-elle",
        answers: [
            { text: "Marcel", correct: false},
            { text: "Gislaine", correct: false},
            { text: "Uni", correct: false},
            { text: "Unicornis", correct: true},
        ]
    }
];

const questionElement = document.getByElementId("question");
const answerButtons = document.getByElementId("answer-buttons");
const valButton = document.getByElementId("val-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="validate"
    showQestion();
}

function showQestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questiionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.créateElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    
        
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answersButton.firstChild);

    }
}

function selectAnswer() {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}
function showScore(){
    resetState();
    questionElement.innerText = `You scored ${score} out of ${question.lenght}!` ;
    nextButton.innerText =  "Play Again";
    nextButton.style.display = "block" ;
}
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})


