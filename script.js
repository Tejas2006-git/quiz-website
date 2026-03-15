let questions = [
{
question: "What does DBMS stand for?",
options: ["Data Base Management System","Data Bank Management System","Database Method System","None"],
answer: 0
},

{
question: "HTML stands for?",
options: ["Hyper Trainer Marking Language","Hyper Text Markup Language","Hyper Text Marketing Language","None"],
answer: 1
},

{
question: "Which language is used for styling web pages?",
options: ["HTML","JQuery","CSS","XML"],
answer: 2
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("question").innerText = q.question;

let options = document.getElementsByClassName("option");

for(let i=0;i<options.length;i++){
options[i].innerText = q.options[i];
}

}

function checkAnswer(option){

if(option === questions[currentQuestion].answer){
score++;
}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}
else{
document.getElementById("question").innerText = "Quiz Finished!";
document.getElementById("answers").style.display="none";
document.getElementById("nextBtn").style.display="none";
document.getElementById("score").innerText="Your Score: "+score;
}

}

loadQuestion();