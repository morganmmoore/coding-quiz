var startButton = document.querySelector('.start-button');
var scoreButton = document.querySelector('.scoreButton');
var high_scores = document.querySelector('ol.high-scores');
var incorrectAnswer = document.querySelector('.incorrectAnswer');
var timerElement = document.querySelector('.timer-count');
var alternatives0 = document.querySelector('#alternatives0');
var alternatives1 = document.querySelector('#alternatives1');
var alternatives2 = document.querySelector('#alternatives2');
var alternatives3 = document.querySelector('#alternatives3');
var questionText = document.querySelector('#questionText');
var scoreDiv = document.querySelector('#scoreDiv');
var score = document.querySelector('#score');



var chosenAnswer = '';
var correctCounter = 0;
var incorrectCounter = 0;
var isCorrect = false;
var timer;
var timerCount;
var questionIndex = 0;
var correctAnswer;
var playerScore = 0;

var questions = [ 
    new question ('Which of the following is a Boolean:', ['false', '"Hello"', '1', '24.22'], 'answer1'
    ),
    new question ('Which of the following is not a way to declare a variable:', ['var', 'for', 'const', 'let'], 'answer1'
    ),
    new question ('Which positioning goes with the normal flow?', ['absolute', 'relative', 'static', 'fixed'], 'answer1'
    ),
    new question ('What is a function?', ['a set of statements that performs a task or calculates a value.', 'It states that if this condition is true, do this, else do something else (or nothing).', 'a template to create many objects with similar qualities.', 'displays a dialog with an optional message prompting the user to input some text.'], 'answer1'
    ),
    new question ('How is a string denoted?', ['by surrounding text with quotation marks', 'by inserting a semicolon after the text', 'by inserting parentheses after the text', 'by surrounding text with either single or double quotes.'], 'answer1'
    ),
    new question ('What does CSS stand for?', ['Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Coding Style Sheets'], 'answer1'
    ),
    new question ('The act of finding and removing errors is called ____.', ['validating', 'formatting', 'debugging', 'demoting'], 'answer1'
    ),
    new question ('Which of the following is a string:', ['false', '24.22', '1', '"Hello"'], 'answer1'
    ),
    new question ('Commonly used data types do not include:', ['strings', 'booleans', 'alerts', 'numbers'], 'answer1'
    ),
    new question ('Arrays in JavaScript can be used to store:', ['other arrays', 'numbers and strings', 'booleans', 'all of the above'], 'answer1'
    ),
    new question ('The condition of an if/else statement is close within:', ['quotes', 'square brackets', 'parentheses', 'curly brackets'], 'answer1'
    )
    
];

 //function init() {
//     getScores();
//}

 function startQuiz(question) {
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
    timerCount = 60;
    startTimer();
    setQuizProg(questionIndex);
    document.getElementById('showBtns').style.visibility='visible';
 }

 function setQuizProg(prog) {
     switch (prog) {
        case 0:
            questionText.innerHTML = questions[0].title;
            alternatives0.innerHTML = questions[0].alternatives[0];
            alternatives1.innerHTML = questions[0].alternatives[1];
            alternatives2.innerHTML = questions[0].alternatives[2];
            alternatives3.innerHTML = questions[0].alternatives[3];
            correctAnswer = 1;
            break;
        case 1:
            questionText.innerHTML = questions[1].title;
            alternatives0.innerHTML = questions[1].alternatives[0];
            alternatives1.innerHTML = questions[1].alternatives[1];
            alternatives2.innerHTML = questions[1].alternatives[2];
            alternatives3.innerHTML = questions[1].alternatives[3];
            correctAnswer = 2;
            break;
        case 2:
            questionText.innerHTML = questions[2].title;
            alternatives0.innerHTML = questions[2].alternatives[0];
            alternatives1.innerHTML = questions[2].alternatives[1];
            alternatives2.innerHTML = questions[2].alternatives[2];
            alternatives3.innerHTML = questions[2].alternatives[3];
            correctAnswer = 3;
            break;
        case 3:
            questionText.innerHTML = questions[3].title;
            alternatives0.innerHTML = questions[3].alternatives[0];
            alternatives1.innerHTML = questions[3].alternatives[1];
            alternatives2.innerHTML = questions[3].alternatives[2];
            alternatives3.innerHTML = questions[3].alternatives[3];
            correctAnswer = 1;
            break;
        case 4:
            questionText.innerHTML = questions[4].title;
            alternatives0.innerHTML = questions[4].alternatives[0];
            alternatives1.innerHTML = questions[4].alternatives[1];
            alternatives2.innerHTML = questions[4].alternatives[2];
            alternatives3.innerHTML = questions[4].alternatives[3];
            correctAnswer = 4;
            break;
        case 5:
            questionText.innerHTML = questions[5].title;
            alternatives0.innerHTML = questions[5].alternatives[0];
            alternatives1.innerHTML = questions[5].alternatives[1];
            alternatives2.innerHTML = questions[5].alternatives[2];
            alternatives3.innerHTML = questions[5].alternatives[3];
            correctAnswer = 2;
            break;
        case 6:
            questionText.innerHTML = questions[6].title;
            alternatives0.innerHTML = questions[6].alternatives[0];
            alternatives1.innerHTML = questions[6].alternatives[1];
            alternatives2.innerHTML = questions[6].alternatives[2];
            alternatives3.innerHTML = questions[6].alternatives[3];
            correctAnswer = 3;
            break;
        case 7:
            questionText.innerHTML = questions[7].title;
            alternatives0.innerHTML = questions[7].alternatives[0];
            alternatives1.innerHTML = questions[7].alternatives[1];
            alternatives2.innerHTML = questions[7].alternatives[2];
            alternatives3.innerHTML = questions[7].alternatives[3];
            correctAnswer = 4;
            break;
        case 8:
            questionText.innerHTML = questions[8].title;
            alternatives0.innerHTML = questions[8].alternatives[0];
            alternatives1.innerHTML = questions[8].alternatives[1];
            alternatives2.innerHTML = questions[8].alternatives[2];
            alternatives3.innerHTML = questions[8].alternatives[3];
            correctAnswer = 2;
            break;
        case 9:
            questionText.innerHTML = questions[9].title;
            alternatives0.innerHTML = questions[9].alternatives[0];
            alternatives1.innerHTML = questions[9].alternatives[1];
            alternatives2.innerHTML = questions[9].alternatives[2];
            alternatives3.innerHTML = questions[9].alternatives[3];
            correctAnswer = 4;
            break;
        case 10:
            questionText.innerHTML = questions[10].title;
            alternatives0.innerHTML = questions[10].alternatives[0];
            alternatives1.innerHTML = questions[10].alternatives[1];
            alternatives2.innerHTML = questions[10].alternatives[2];
            alternatives3.innerHTML = questions[10].alternatives[3];
            correctAnswer = 3;
            break;
         case 11:
            score.innerHTML = 'Your score is: ' + playerScore;
            clearInterval(timer);
            questionText.style.display = 'none';
            alternatives0.style.display = 'none';
            alternatives1.style.display = 'none';
            alternatives2.style.display = 'none';
            alternatives3.style.display = 'none';
            scoreDiv.style.display = 'block';
             break;
     }
 }

startQuiz.prototype.getQuestionIndex = function() {
    return questions[questionIndex];
}
 
startQuiz.prototype.guess = function(correctAnswer) {
    if(getQuestionIndex().isCorrectAnswer(correctAnswer)) {
        score++;
    }
    questionIndex++;
}
 
startQuiz.prototype.isEnded = function() {
    return questionIndex === questions.length;
}

 function question(title, alternatives, correctAnswer) {
    this.title = title;
    this.alternatives = alternatives;
    this.correctAnswer = correctAnswer;
}
 
function checkAnswer(choice) {
    if (correctAnswer == choice) {
        playerScore = playerScore + 1;
        questionIndex = questionIndex + 1;
        if (questionIndex == 11) {
            playerScore = playerScore + timerCount;
        }
        setQuizProg(questionIndex);
    } else {
        timerCount = timerCount - 10;
    }
}

function guesses(id, guesses) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function startTimer() {
    timer = setInterval(function() {
        if (timerCount > 0) {
      timerCount--;
      timerElement.textContent = timerCount;
        } else {
            questionIndex = 11;
            setQuizProg(questionIndex);
        }
    }, 1000);
  }



function highScores() {
    if(typeof(Storage)!=="undefined"){
        var scores = false;
        if(localStorage["high-scores"]) {
           if (high_scores.style.display == "block") {
            high_scores.style.display = "none"  
           } else {
            high_scores.style.display = "block"
           }
            high_scores.innerHTML = '';
            scores = JSON.parse(localStorage["high-scores"]);
            scores = scores.filter(function(s) {return s}).sort(function(a,b){return parseInt(b.score)-parseInt(a.score)});

            for(var i = 0; i < 10; i++){
                var s = scores[i];                        
                var fragment = document.createElement('li');
                fragment.innerHTML = (s ? s.initials + " " + s.score : "" );
                high_scores.appendChild(fragment);
        }
    }
} else {
    high_scores.style.display = "none";
}}

function updateScore() {
    if (typeof(Storage)!=='undefined') {
        var current = parseInt(score.innerHTML);
        var scores = false;
        if(localStorage['high-scores']) {
            scores = JSON.parse(localStorage['high-scores']);
            scores = scores.sort(function(a,b){return parseInt(b)-parseInt(a)});

            for (var i=0; i<10; i++) {
                var s = parseInt(scores[i]);
                var val = (!isNaN(s) ? s : 0);
                if (current > val)
                {
                val = current;
                scores.splice(i, 0, parseint(current));
                break;

            }
        }
        scores.length = 10;
        localStorage['high-scores'] = JSON.stringify(scores);
    } else {
        var scores = new Array();
        scores[0] = current;
        localStorage['high-scores'] = JSON.stringify(scores);
    }
    highScores();
}}

function updateLocalStorage(event) {
    event.preventDefault();
    var score = document.querySelector('#score').textContent;
    score = score.substring(score.lastIndexOf(' '));
    var initials = document.querySelector('#initials').value;
    var obj = {score, initials}
    var highScores = JSON.parse(localStorage.getItem('high-scores')) || [];
    highScores.push(obj);
    var scores = highScores.filter(function(s) {return s}).sort(function(a,b){
        return parseInt(b.score)-parseInt(a.score)
    });
    scores = scores.splice(0,10);
    localStorage.setItem('high-scores', JSON.stringify(scores));
}


alternatives0.addEventListener('click', function(){
    checkAnswer(1);
});
alternatives1.addEventListener('click', function(){
    checkAnswer(2);
});
alternatives2.addEventListener('click', function(){
    checkAnswer(3);
});
alternatives3.addEventListener('click', function(){
    checkAnswer(4);
});



startButton.addEventListener('click', startQuiz);
scoreButton.addEventListener('click', updateScore);
var scoreForm = document.querySelector('#scoreForm');
scoreForm.addEventListener('submit', updateLocalStorage);
//var resetButton = document.querySelector('.reset-button');

function resetQuiz() {
    correctCounter = 0;
    incorrectCounter = 0;
    setCorrect();
    setIncorrect();
}


//resetButton.addEventListener('click', resetQuiz);