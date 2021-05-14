//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var kyaScore = 0;
var bigredScore = 0;
var tateScore = 0;
var bigredScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//#variables for answer choice buttons for question 2.
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//#variables for answer choice buttons for question 3.
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#variables for answer choice buttons for question 4.
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");



//#TODO: Add Event Listeners to your answer choice variables.

var q1a1 = document.getElementById('q1a1');
if(q1a1){
  q1a1.addEventListener('click', kya);
}
q1a2.addEventListener("click", tate);
q1a3.addEventListener("click", bigred);
q1a4.addEventListener("click", bigred);

q2a1.addEventListener("click", kya);
q2a2.addEventListener("click", bigred);
q2a3.addEventListener("click", bigred);
q2a4.addEventListener("click", tate);

q3a1.addEventListener("click", bigred);
q3a2.addEventListener("click", kya);
q3a3.addEventListener("click", tate);
q3a4.addEventListener("click", bigred);

q4a1.addEventListener("click", bigred);
q4a2.addEventListener("click", bigred);
q4a3.addEventListener("click", kya);
q4a4.addEventListener("click", tate);


q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);



//Quiz Functions

// Extension 5 - Disable Buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}




function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
 q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
}

function kya() {
  kyaScore += 1;
  questionCount += 1;
  // alert("kya");
  if (questionCount >= 4) {
    updateResult();
  }
}

function bigred() {
  bigredScore += 1;
  questionCount += 1;
  // alert("bigred");
  if (questionCount >= 4) {
    updateResult();
  }
}

function tate() {
  tateScore += 1;
  questionCount += 1;
  // alert("tate");
  if (questionCount >= 4) {
    updateResult();
  }
}

function bigred() {
  bigredScore += 1;
  questionCount += 1;
  // alert("bigred");
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult() {
  if (kyaScore >= 4) {
    result.innerHTML = "Your Most Like Kya!";
  } else if (tateScore >= 4) {
    result.innerHTML = "Your Most Like Tate!";
  } else if (bigredScore >= 4) {
    result.innerHTML = "Your Most Like Big Red!";
  } else if (bigredScore >= 4) {
    result.innerHTML = "Your Most Like Big Red!";
  } else {
    result.innerHTML =
      "Your Most Like Big Red";
  }

}
  //Restart Quiz
  var restart = document.getElementById("restart");
  restart.addEventListener("click", restartQuiz);

  function restartQuiz() {
    result.innerHTML = "Your result is...";
    questionCount = 0;
    kyaScore = 0;
    tateScore = 0;
    bigredScore = 0;
    bigredScore = 0;
  }