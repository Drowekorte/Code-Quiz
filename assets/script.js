

var questions = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choiceText"));
var score = document.querySelector("#score");
var startBtn = document.querySelector("#start-btn");
var highScoreBtn = document.querySelector("#highscore-btn");
var highScoreBox = document.querySelector(".high-score-box");
var count = 0;

    var questions = [
    {
        question: "What is 2 + 2?",
        answers: {
        choices: "2",
        choices: "4",
        choices: "5",
        choices: "12",
        },
        correctAnswer: 2,
    },
    {
        question: "What is 2 + 2?",
        answers: {
        choices: "2",
        choices: "4",
        choices: "5",
        choices: "12",
        },
        correctAnswer: 2,
    },

];

highScoreBtn.addEventListener("click", highScoreDisplay);

function highScoreDisplay () {
    console.log("High Score");

    //    Nothing happening here????!!! WHY????
    // Show high score through local storage
}
startBtn.addEventListener("click", myGame);

function myGame(){
    var output = [questions];
    questions.forEach(
        (currentQuestion) => {
            var answers = [];

            for(letter in currentQuestion.answers)
        }
    )
    
    

    console.log("Click");

} 
        

