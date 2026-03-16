let questions = [
{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language",
"Home Tool Markup Language"
],
answer: 0
},
{
question: "Which language is used for styling web pages?",
options: [
"HTML",
"CSS",
"Python",
"Java"
],
answer: 1
},
{
question: "Which language is used for web scripting?",
options: [
"Java",
"JavaScript",
"C++",
"Python"
],
answer: 1
}
];

let currentQuestion = 0;
let score = 0;
let selectedSubject = "";

function startQuiz(subject){

selectedSubject = subject;

document.getElementById("subjectPage").style.display = "none";
document.getElementById("quizPage").style.display = "block";

document.getElementById("selectedSubject").innerText = "Subject: " + subject;

showQuestion();

}

function showQuestion(){

let q = questions[currentQuestion];

document.getElementById("question").innerText = q.question;

let answersHTML = "";

q.options.forEach((option,index)=>{

answersHTML += `<button onclick="checkAnswer(${index})">${option}</button><br><br>`;

});

document.getElementById("answers").innerHTML = answersHTML;

}

function checkAnswer(selected){

let correct = questions[currentQuestion].answer;

if(selected == correct){

score++;
alert("Correct Answer!");

}else{

alert("Wrong Answer!");

}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){

showQuestion();

}else{

document.getElementById("quizPage").style.display="none";
document.getElementById("resultPage").style.display="block";

document.getElementById("finalScore").innerText =
"Your Score: " + score + " / " + questions.length;

}

}

function restartQuiz(){

currentQuestion = 0;
score = 0;

document.getElementById("resultPage").style.display="none";
document.getElementById("subjectPage").style.display="block";

}