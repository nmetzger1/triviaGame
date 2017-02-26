window.onload = function () {
    game.readyGame();
};

//Question / Answers / Images Objects
var currentQuestion = [];

var question1 = {
    question: "What year was Lego founded?",
    right: "1932",
    wrong1: "1954",
    wrong2: "1967",
    wrong3: "1945",
    image: "assets/images/ogLego.png",
    picked: false
}

var question2 = {
    question: "This Taj Mahal is the largest Lego set ever produced. <br>  How many bricks did it include?",
    right: "5,922",
    wrong1: "3,012",
    wrong2: "4,821",
    wrong3: "6,120",
    image: "assets/images/tajMahal.jpg",
    picked: false
}

//TimerId
var timerId;

var game = {

    //Game Variables
    wrongAnswers: 0,
    correctAnswers: 0,
    questionCounter: 1,
    timer: 100,

    readyGame: function()
    {
        //Start Music
        this.startMusic();
        //Show Welcome Image
        //Show Instructions
        //Wait for User Input to Start
        this.questionMaker(question2);
        this.startTimer();
    },

    startGame: function()
    {
        //Display First Question / Answers Image

        //Start Timer
        //If time runs out, Increment wrongAnswers
        //Determine if Game Over
        //If Yes, call endGame()
        //Else, Display next question
    },

    displayQuestion: function() {
        //Display Random Question
        //If question already displayed, pick another question
        //Display potential answers
        //Get User Input
        //Determine if Correct
        //If Yes, Increment correctAnswers
        //Display success gif for x seconds
        //Else, Increment wrongAnswers
        //Display fail gif for x seconds
        //Increment questionNumber;
    },

    endGame: function() {
        //Show Game Over Text
        //Show Scoreboard
        //Show Message Based on User Score(Good, OK, Bad)
        //Shore Restart Game Button
    },

    startMusic: function() {

    },

    stopMusic: function() {

    },

    countDown: function () {
        game.timer--;
        //Update Progress Bar
        $('#progress').width(game.timer + '%');

        if(game.timer <= 0){
            game.stopTimer();
        }
    },

    startTimer: function () {

        progressBar();

        timerId = setInterval(this.countDown,200);

    },

    stopTimer: function () {
        clearInterval(timerId);
    },

    questionMaker: function (question) {
        //display image
        $('.question-image').html('<img src="' + question.image + '" class="img img-rounded">');
        //display question
        $('.question-area').html('<h3>' + question.question + '</h3>');
        //show answers in random order
        var answerArray = [question.right, question.wrong1, question.wrong2, question.wrong3];
        answerArray = shuffleArray(answerArray);

        for(var i in answerArray){
            $(".answer-area").append('<button class="btn btn-primary btn-lg">' + answerArray[i] +'</button>');
        }
    }

};


function progressBar(){
    var mainDiv = $('<div class="progress">');
    var progressBar = $('<div class="progress-bar" id="progress">');

    $('.timer').html(mainDiv.html(progressBar));
}

//Found this online
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}