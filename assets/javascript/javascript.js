window.onload = function () {
    game.readyGame();
};

var currentQuestion = [];

//Question Objects
var questionsObject = {


    q1: {
        question: "In what year was Lego founded?",
        right: "1932",
        wrong1: "1954",
        wrong2: "1967",
        wrong3: "1945",
        image: "assets/images/originallego.png",
        picked: false
    },

    q2: {
        question: "This Taj Mahal is the largest Lego set ever produced. <br>  How many bricks did it include?",
        right: "5,922",
        wrong1: "3,012",
        wrong2: "4,821",
        wrong3: "6,120",
        image: "assets/images/tajMahal.png",
        picked: false
    },

    q3: {
        question: "Where are the Lego Headquarters located?",
        right: "Billund, Denmark",
        wrong1: "Copenhagen, Denmark",
        wrong2: "Oslo, Norway",
        wrong3: "Bergen, Norway",
        image: "assets/images/legohq.png",
        picked: false
    },

    q4: {
        question: "Lego is a derived from the phrase 'leg godt' which means what in English?",
        right: "Play Well",
        wrong1: "Plastic Brick",
        wrong2: "Foot Pain",
        wrong3: "Many Colors",
        image: "assets/images/logo.png",
        picked: false
    },

    q5: {
        question: "The first Lego Star Wars sets were released in which year?",
        right: "1999",
        wrong1: "1977",
        wrong2: "1984",
        wrong3: "2003",
        image: "assets/images/starwars.png",
        picked: false
    },

    q6: {
        question: "The world record for the tallest lego structure ever built topped out at how many feet?",
        right: "116",
        wrong1: "95",
        wrong2: "160",
        wrong3: "134",
        image: "assets/images/bricks.png",
        picked: false
    },

    q7: {
        question: "What is the name of the main protagonist in The Lego Movie?",
        right: "Emmet",
        wrong1: "Bob",
        wrong2: "Benny",
        wrong3: "Luke",
        image: "assets/images/emmet.png",
        picked: false
    },

    q8: {
        question: "Approximately how many Lego bricks are produced each year?",
        right: "19 Billion",
        wrong1: "50 Billion",
        wrong2: "7 Billion",
        wrong3: "100 Billion",
        image: "assets/images/bricks.png",
        picked: false
    },

    q9: {
        question: "What has NEVER been a theme for Lego sets?",
        right: "Army",
        wrong1: "Wild West",
        wrong2: "Pirates",
        wrong3: "Space",
        image: "assets/images/castle.png",
        picked: false
    },

    q10: {
        question: "Of the following, which was NOT an actual Lego Mindstorms fan creation?",
        right: "VCR",
        wrong1: "Pancake Printer",
        wrong2: "Rubik's Cube Solver",
        wrong3: "Automatic Toilet Flusher",
        image: "assets/images/mindstorms.png",
        picked: false
    },

    q11: {
        question: "The first LegoLand amusement park opened in which year?",
        right: "1968",
        wrong1: "1996",
        wrong2: "1985",
        wrong3: "2001",
        image: "assets/images/legoland.png",
        picked: false
    },

    q12: {
        question: "What is the proper term for a Lego figurine?",
        right: "Minifigure",
        wrong1: "Action Figure",
        wrong2: "Brick Person",
        wrong3: "Lego Figurine",
        image: "assets/images/minifigs.png",
        picked: false
    },

    q13: {
        question: "Lego bricks were originally made out of what material?",
        right: "Wood",
        wrong1: "Plastic",
        wrong2: "Plaster",
        wrong3: "Asbestos",
        image: "assets/images/bindingbricks.png",
        picked: false
    },

    q14: {
        question: "The most expensive retail set was the Ultimate Collector's Series version of the Millennium Falcon <br> How much did it sell for?",
        right: "$499",
        wrong1: "$399",
        wrong2: "$449",
        wrong3: "$349",
        image: "assets/images/falcon.png",
        picked: false
    },

    q15: {
        question: "Which of the following licensed themes has Lego never sold?",
        right: "Nintendo",
        wrong1: "Disney Princesses",
        wrong2: "Harry Potter",
        wrong3: "Indiana Jones",
        image: "assets/images/licensed.png",
        picked: false
    },

    q16: {
        question: "Lego started selling their famous building bricks in what year?",
        right: "1949",
        wrong1: "1932",
        wrong2: "1960",
        wrong3: "1955",
        image: "assets/images/bricks.png",
        picked: false
    },

    q17: {
        question: "Out of every one million bricks produced, approximately how many fail quality standards?",
        right: "18",
        wrong1: "0",
        wrong2: "110",
        wrong3: "64",
        image: "assets/images/bricks.png",
        picked: false
    },

    q18: {
        question: "What is the brand name of Lego products aimed at children 5 and under",
        right: "Duplo",
        wrong1: "Lego Jr.",
        wrong2: "Lil Lego",
        wrong3: "Fabuland",
        image: "assets/images/duplo.png",
        picked: false
    },

    q19: {
        question: "What year was the Lego Movie released?",
        right: "2014",
        wrong1: "2015",
        wrong2: "2013",
        wrong3: "2012",
        image: "assets/images/legomovie.png",
        picked: false
    },

    q20: {
        question: "Who voices Lego Batman in the Lego series of films?",
        right: "Will Arnett",
        wrong1: "Christian Bale",
        wrong2: "Chris Pratt",
        wrong3: "Adam West",
        image: "assets/images/batman.png",
        picked: false
    }
};

//Creates an array of all questions
var questionArray = Object.values(questionsObject);

var audio = new Audio("assets/awesome.mp3");

//TimerId
var timerId;

//Game object
var game = {

    //Game Variables
    wrongAnswers: 0,
    correctAnswers: 0,
    questionCounter: 0,
    timer: 135,
    timerMax: 135,
    currentQuestion: {},

    readyGame: function()
    {
        //Start Music
        this.stopMusic();
        //this.startMusic();
        //Show Welcome Image
        insertImage("assets/images/bricks.png");
        //Show Instructions
        //$('.answer-area').html('<btn class="btn btn-primary btn-lg" id="gameStart">Press To Play</btn>');
        $('.answer-area').html('<input type="submit" class="brick-button" id="gameStart" value="Press To Play">');
        //clear Question / Timer
        $('.question-area').empty();
        $('.timer').empty();
        //Wait for User Input to Start
        $("#gameStart").on("click", function () {
            game.newQuestion();
        })
    },

    newQuestion: function()
    {
        var questionFound = false;
        var userAnswer;

        //Increment questionNumber;
        game.questionCounter++;
        //Display Random Question
        while (questionFound == false) {
            var tempQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];

            //If question already displayed, pick another question
            if (tempQuestion.picked == false) {
                game.currentQuestion = tempQuestion;
                questionFound = true;
            }
        }

        //Display Question
        game.questionMaker(game.currentQuestion);
        game.currentQuestion.picked = true; //ensures same question isn't picked again

        //Start Timer
        game.startTimer();

        //Get User Input
        $('.brick-button').on("click", function (btn) {
            userAnswer = btn.target.value;

            //Determine if Correct
            if (userAnswer === game.currentQuestion.right) {
                //If Yes, Increment correctAnswers
                game.correctAnswers++;
                //Display success gif for x seconds
                insertImage("assets/images/highfive.gif");
            }
            else {
                //Else, Increment wrongAnswers
                game.wrongAnswers++;
                //Display no gif
                insertImage("assets/images/no.gif");
            }

            game.showAnswer();
            game.stopTimer();
        });

    },

    endGame: function() {
        //Show Game Over Text
        $('.question-area').html('<img src="assets/images/gameover.png" class="big-image">');
        //Show Scoreboard
        $('.answer-area').empty().append('<h2>Correct: ' + game.correctAnswers + '</h2><h2>Wrong: ' +  game.wrongAnswers + '</h2>');
        //Shore Restart Game Button
        //$('.answer-area').append('<btn class="btn btn-lg btn-primary" id="restart">Restart Game</btn>');
        $('.answer-area').append('<input type="submit" class="brick-button" id="restart" value="Restart Game">');

        if(game.correctAnswers < 4){
            insertImage("assets/images/fail.gif");
        }
        else if(game.correctAnswers < 7){
            insertImage("assets/images/darn.gif");
        }
        else {
            insertImage("assets/images/awesome.gif");
        }

        //Wait for User Restart
        $('#restart').click(function () {

            //reset question objects
            for(var i in questionArray)
            {
                questionArray[1].picked = false;
            }

            //reset game variables
            game.correctAnswers = 0;
            game.wrongAnswers = 0;
            game.questionCounter = 0;

            //restart game
            game.newQuestion();
        });

    },

    startMusic: function() {
        audio.play();
        audio.loop = true;
        audio.volume = .25;

        $('#pause').html('<span class="glyphicon glyphicon-volume-up"></span>');

        $('.glyphicon-volume-up').click(function () {
            game.stopMusic();
        })
    },

    stopMusic: function() {
        audio.pause();
        $('#pause').html('<span class="glyphicon glyphicon-volume-off"></span>');

        $('.glyphicon-volume-off').click(function () {
            game.startMusic();
        })
    },

    showAnswer: function () {
        var buttonId;

        //Gets rid of the timer
        $('.timer').empty();

        //set button style based on right answer
        for(i = 0; i < 4; i++){

            buttonId = $("#answer" + i);

            //find button with correct answer and adds ID
            if(buttonId.val() === game.currentQuestion.right){
                buttonId.addClass("active");
                buttonId.attr("id", "correct-answer");
            }
            else {
                buttonId.attr("id", "wrong-answer");
            }

            //disables clicking button while waiting for new question
            buttonId.attr("disabled", "disabled");
        }

        //Goes to next question or end game after 8 seconds
        setTimeout(function () {
            if(game.questionCounter == 10){
                game.endGame();
            }else {
                game.newQuestion();
            }

        }, 8000)
    },

    countDown: function () {
        game.timer--;

        var timerPercent = (game.timer/game.timerMax) * 100;

        //Update Progress Bar
        $('#progress').width(timerPercent + '%');

        if(game.timer <= 0){
            game.stopTimer();
            insertImage("assets/images/timeout.gif");
            game.showAnswer();
            game.wrongAnswers++;
        }
    },

    startTimer: function () {

        game.timer = 150;

        progressBar();

        timerId = setInterval(this.countDown,100);
    },

    stopTimer: function () {

        clearInterval(timerId);
    },

    questionMaker: function (question) {
        //display image
        insertImage(question.image);
        //display question
        $('.question-area').html('<h3>' + question.question + '</h3>');
        //show answers in random order
        $('.answer-area').empty(); //Removes any previous info before appending
        var answerArray = [question.right, question.wrong1, question.wrong2, question.wrong3];
        answerArray = shuffleArray(answerArray);

        for(var i in answerArray){
            //$(".answer-area").append('<button class="btn btn-primary btn-lg" id="answer' + i + '">' + answerArray[i] +'</button>');
            $(".answer-area").append('<input type="submit" class="brick-button" id="answer' + i + '" value="' + answerArray[i] + '">');
        }
    }

};

//inserts image into question area
function insertImage(path){
    $('.question-image').html('<img src="' + path + '" class="img big-image">');
}

//creates countdown bar
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