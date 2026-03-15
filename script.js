function startQuiz(subject){

document.getElementById("subjectPage").style.display="none";
document.getElementById("quizPage").style.display="block";

document.getElementById("question").innerText =
"You selected " + subject + " subject";

}

function nextQuestion(){

alert("Next question will appear here");

}