https://www.youtube.com/watch?v=f4fB9Xg2JEY

var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var score = document.querySelector("#score");

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = []

var questions = [
    {
        question: "What is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "5",
        choice4: "12",
        answer: 2,
    },
    {
        question: "What is 2 + 3?"
        choice1: "2",
        choice2: "7",
        choice3: "5",
        choice4: "12",
        answer: 3,
    },
    {
        question: "What is 7 + 2?"
        choice1: "2",
        choice2: "7",
        choice3: "5",
        choice4: "9",
        answer: 4,
    },
    {
        question: "What is 2 - 2?"
        choice1: "0",
        choice2: "2",
        choice3: "5",
        choice4: "12",
        answer: 1,
    }

]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0 
    score = 0
    availableQustions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign(/end.html)
    }
    questionCounter++
    progressText.innerText = `Question${questionCounter} of ${MAX_QUESTIONS}`

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        var number =choice.dataset["number"];
        choice,innerText = currentQuestoin ["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true;

}

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"]; 

        var classToApply = selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
}) 

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame()




// // AS A coding boot camp student
// // I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// // SO THAT I can gauge my progress compared to my peers
// var questions = [{
//     text: "It it yes?",
//     correctAnswer: "True",
//     options: ["True", "False"],
// }
// var question = {
//     text: "It it yes?",
//     correctAnswer: "True",
//     options: ["True", "False"],
// }
// var question = {
//     text: "It it yes?",
//     correctAnswer: "True",
//     options: ["True", "False"],
// }
// var question = {
//     text: "It it yes?",
//     correctAnswer: "True",
//     options: ["True", "False"],
// }
// ];

// themeSwitcher.addEventListener("click", function() {
//     // If mode is dark, apply light background
//     if (mode === "dark") {
//       mode = "light";
//       container.setAttribute("class", "light");
//     }
//     // If mode is light, apply dark background 
//     else {
//       mode = "dark";
//       container.setAttribute("class", "dark");
//     }
//   });

// GIVEN I am taking a code quiz
// WHEN I click the start button

// THEN a timer starts and I am presented with a question
    // Need a timer to start on start-click and 1st Q

// WHEN I answer a question
    // 
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score