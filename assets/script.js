
var choices = document.querySelector(".choiceText");
var score = document.querySelector("#score");
var startBtn = document.querySelector("#start-btn");
var highScoreBtn = document.querySelector("#highscore-btn");
var highScoreBox = document.querySelector(".high-score-box");
var gameStart = document.querySelector("#gameStart");
var questionsContainer = document.querySelector(".questionsContainer");
var questionText = document.querySelector(".questionText");
var choiceText = document.querySelector("#choiceText");
var choiceContainer = document.querySelector("#choiceContainer")
var questionIndex = 0

// Array of questions 
var questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            "2",
            "4",
            "5",
            "12",
        ],
        correctAnswer: 1,
    },
    {
        question: "Is this working?",
        answers: [
            "Yes",
            "No",
            "Yep",
            "YES!",
        ],
        correctAnswer: 1,
    },];
    
// When high score button is clicked hide questions
highScoreBtn.addEventListener("click", function (e) {
    questionsContainer.classList.add("hide");
    highScoreBox.classList.remove("hide");
    highScoreDisplay();
});

function highScoreDisplay() {

    // Show high score through local storage
}
// When startBtn clicked game starts 
startBtn.addEventListener("click", function (e) {
    questionsContainer.classList.remove("hide");
    startTimer();
    renderQuestion();
});

// After startBtn event 1st question renders 
function renderQuestion() {
    questionText.textContent = questions[questionIndex].question;

    questions[questionIndex].answers.forEach(function (item) {
        var option = document.createElement("div");
        option.textContent = item;
        option.setAttribute("class", "choiceContainer", "choiceContainer:hover");
        choiceContainer.appendChild(option);
    });
};

// Question Loop here

choiceContainer.addEventListener("click", function (e) {
    if (!e.target.matches("choiceContainer")) return;
    //  If the choiceContainer isnt clicked nothing happens

    var val = e.target.textContent;
    if (val === questions[questionIndex].answers[questions[questionIndex].correctAnswer]) {
        //  User selected correct answer "Correct"

    } else {
        // User selected wrong answer  "Wrong"
    }
    if (questionIndex === questions.length) {
        //  Game Over
        console.log("PLEASE WORK")
    } else {
        renderQuestion();
    }
    // Adds to the questions index
    questionIndex++;
});

// Timer function

function startTimer() {
    var timeLeft = 100;

    timerInterval = setInterval(function () {
        timer.textContent = timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            // when timer is done GAME OVER
            gameOver();
        }

    }, 1000);

    return timeLeft;
};
function gameOver() {
    // User sees GAME OVER
    // User sees score 
    // User input initials 
    // User clicks saveBtn results pull from local storage 
};




