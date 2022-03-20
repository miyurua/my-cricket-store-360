var pos = 0; //position in array
var correct = 0;
var questions = [ //Listing out questions and answers in arrays.
    ["1)  Who won the first World Cup, 1975?", "Australia", "West-Indies", "India", "South-Africa"],
    ["2)  How many times did Chennai Super Kings win IPL?", "1", "2", "3", "4"],
    ["3)  England – Who was their top Test run scorer?", "Ben Stokes", "Joe Root", "Eoin Morgan", "Alastair Cook"],
    ["4)  Which Country has Lost most ODI matches?", "Afghanistan", "Sri Lanka", "India", "Bangladesh"],
    ["5)  Who won the first ashes?", "Australia", "New-Zealand", "England", "Ireland"],
    ["6)  Who was India’s Captain when they first won over Australia?", "Lala Amarnath", "Hemu Adhikari", "Ghulam Ahmed", "Gulabrai Ramchand"],
    ["7)  Who won the first IPL?", "Mumbai Indians", "Chennai Super Kings", "Rajasthan Royals", "Kolkata Knight Riders"],
    ["8)  Who won the first ICC World Test Championship?", "New-Zealand", "West Indies", "India", "England"],
    ["9)  Who was the first Sri Lankan ODI cricket captain?", "Arjuna Ranathunga", "Bandula Warnapura", "Anura Tennekoon", "Somachandra De Silva"],
    ["10) Which 2 teams played the silly semi finals?", "Australia and India", "India and South-Africa", "Australia and England", "England and South-Africa"]
];
"<link rel='stylesheet' href='../CSS%20Files/Questions.css'>"

var answers = ["B", "C", "D", "B", "A", "D", "C", "A", "C", "D"]; // Answers
var score = 0;
var time = 60;  // assigning the time to 60 seconds
// Abstracting getElementById

function _(x) {
    return document.getElementById(x);
}
var val = ['A', 'B', 'C', 'D'];
function getChoice(choi, val){
    return "<div class='container'><input type='radio' class='choiceType' name='choices' value='" + val + "'>" + choi + "<br></div>";
}
function checkAnswer() {

    var choice = -1;
    var choices = document.getElementsByName("choices");
    var selectedAnswer = document.querySelector('input[type=radio]:checked');

    if (!selectedAnswer) { //Error Handling
        alert("Please Select an Answer!") // Alerting if you've missed to choose an answer
    } else {
        for (var i = 0; i < choices.length; ++i) {
            if (choices[i].checked) {           // looping through the answered array
                choice = choices[i].value;
            }
        }
        if (choice == answers[pos]) { // comparing userinput with answers
            correct++;
            score += 2;
        }else {
            score -= 1;
        }

        pos++;  // array position incremented
        renderQuestion();
    }
}

function populateChoices(id){
    var e = _(id);
    var quizQuestion = questions[pos][0];
    e.innerHTML = "<h3>" + quizQuestion + "</h3>";
    for (var i = 1; i < questions[pos].length; ++i){            // Going through the questions array(iterating)
        e.innerHTML += getChoice(questions[pos][i], val[i-1]);
    }
    e.innerHTML += "<br><div class='buttonContainer'><button onclick='checkAnswer()' class='btn'> Next Question </button></div>"
}

function renderQuestion() {
    var test = _("test");
    var test_status = _("test_status");
    if (pos >= questions.length){

        if (score < 0){
            score = 0; // setting up the minimum score
        }

        window.clearInterval(update); // End of timer
        time = "-"; // Stop the timer once the user has answered all the questions
        test.innerHTML = "<h2> You got " + correct + " out of " + questions.length + " correct and Your Score is " + score + "</h2>"; // Question Counter
        test_status.innerHTML = "Quiz Completed.";
        return false;


    }

    test_status.innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    populateChoices("test");
}

function quizTimer(){
    time = time - 1; // Countdown start
    if(time < 60){
        quizTime.innerHTML = time;
    }
    if (time < 1){
        window.clearInterval(update);   // Time's up; auto submission

        alert("Time is Up")
        test.innerHTML = "<h2> You got " + correct + " out of " + questions.length + " correct and Your Score is " + score + "</h2>"; // Question Counter
        test_status.innerHTML = "Quiz Completed.";
        return false;
    }
}

update = setInterval("quizTimer()", 1000);
