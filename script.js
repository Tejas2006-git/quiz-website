// ================= QUIZ DATA =================
let quizData = {

// ---------- HTML ----------
HTML: [
{question:"HTML stands for?",options:["Hyper Text Markup Language","High Text","Home Tool","None"],answer:0},
{question:"<p> tag is used for?",options:["Paragraph","Heading","Image","Link"],answer:0},
{question:"<a> tag is used for?",options:["Link","Image","Text","None"],answer:0},
{question:"HTML file extension?",options:[".html",".css",".js",".py"],answer:0},
{question:"<img> is used for?",options:["Image","Text","Link","None"],answer:0},
{question:"<h1> is?",options:["Heading","Paragraph","Link","None"],answer:0},
{question:"HTML is?",options:["Markup","Programming","OS","None"],answer:0},
{question:"<br> means?",options:["Break","Bold","Box","None"],answer:0},
{question:"<ul> is?",options:["List","Link","Image","None"],answer:0},
{question:"<title> is?",options:["Page title","Heading","Text","None"],answer:0}
],

// ---------- CSS ----------
CSS: [
{question:"CSS stands for?",options:["Cascading Style Sheets","Color Style","None","All"],answer:0},
{question:"CSS is used for?",options:["Styling","Logic","Data","None"],answer:0},
{question:"Color property?",options:["color","font","size","None"],answer:0},
{question:"Background?",options:["background","bg","color","None"],answer:0},
{question:"Font size?",options:["font-size","size","text","None"],answer:0},
{question:"Class selector?",options:[".","#","*","None"],answer:0},
{question:"ID selector?",options:["#",".","*","None"],answer:0},
{question:"Margin?",options:["Outer space","Inner","Text","None"],answer:0},
{question:"Padding?",options:["Inner space","Outer","Text","None"],answer:0},
{question:"CSS file?",options:[".css",".html",".js",".py"],answer:0}
],

// ---------- JavaScript ----------
JavaScript: [
{question:"JS is?",options:["Language","OS","DB","None"],answer:0},
{question:"JS file?",options:[".js",".html",".css",".py"],answer:0},
{question:"alert()?",options:["Popup","Style","None","All"],answer:0},
{question:"console.log()?",options:["Print","Input","Loop","None"],answer:0},
{question:"JS runs in?",options:["Browser","OS","DB","None"],answer:0},
{question:"Variable?",options:["var","int","string","None"],answer:0},
{question:"Function?",options:["function","def","fun","None"],answer:0},
{question:"== means?",options:["Compare","Assign","Add","None"],answer:0},
{question:"Event?",options:["click","run","stop","None"],answer:0},
{question:"JS is?",options:["Programming","Markup","Style","None"],answer:0}
],

// ---------- APTITUDE ----------
Aptitude: [
{question:"2+2?",options:["3","4","5","6"],answer:1},
{question:"5×3?",options:["10","15","20","25"],answer:1},
{question:"10/2?",options:["2","3","5","6"],answer:2},
{question:"Square of 4?",options:["8","12","16","20"],answer:2},
{question:"Cube of 2?",options:["4","6","8","10"],answer:2},
{question:"15+5?",options:["10","20","25","30"],answer:1},
{question:"20-8?",options:["10","12","14","16"],answer:1},
{question:"50% of 100?",options:["25","50","75","100"],answer:1},
{question:"Avg of 2,4,6?",options:["3","4","5","6"],answer:1},
{question:"Speed?",options:["Distance/Time","Time/Distance","Work","None"],answer:0}
],

// ---------- DBMS ----------
DBMS: [
{question:"DBMS stands for?",options:["Database Management System","Data Model","None","All"],answer:0},
{question:"Primary key?",options:["Unique","Duplicate","Null","None"],answer:0},
{question:"Foreign key?",options:["Link","Primary","None","All"],answer:0},
{question:"SQL?",options:["Query language","Program","OS","None"],answer:0},
{question:"Table?",options:["Rows & Columns","Data","File","None"],answer:0},
{question:"Row?",options:["Tuple","Column","Field","None"],answer:0},
{question:"Column?",options:["Attribute","Row","Table","None"],answer:0},
{question:"DBMS reduces?",options:["Redundancy","Speed","Error","None"],answer:0},
{question:"Key identifies?",options:["Record","Table","DB","None"],answer:0},
{question:"Database?",options:["Collection","Program","OS","None"],answer:0}
],

// ---------- PYTHON ----------
Python: [
{question:"Python?",options:["Language","Animal","OS","None"],answer:0},
{question:"File?",options:[".py",".js",".html",".css"],answer:0},
{question:"print()?",options:["Output","Input","Loop","None"],answer:0},
{question:"input()?",options:["Input","Output","Loop","None"],answer:0},
{question:"Python is?",options:["Interpreted","Compiled","None","All"],answer:0},
{question:"Loop?",options:["for","if","switch","None"],answer:0},
{question:"Condition?",options:["if","loop","def","None"],answer:0},
{question:"Function?",options:["def","fun","method","None"],answer:0},
{question:"List?",options:["Collection","Loop","Function","None"],answer:0},
{question:"Supports?",options:["OOP","POP","Both","None"],answer:2}
],

// ---------- JAVA ----------
Java: [
{question:"Java?",options:["Language","Coffee","OS","None"],answer:0},
{question:"File?",options:[".java",".js",".py",".html"],answer:0},
{question:"Java is?",options:["Compiled","Interpreted","Both","None"],answer:2},
{question:"Main?",options:["main()","start()","run()","None"],answer:0},
{question:"OOP?",options:["Object Programming","None","All","None"],answer:0},
{question:"Class?",options:["Blueprint","Object","None","All"],answer:0},
{question:"Object?",options:["Instance","Class","None","All"],answer:0},
{question:"Inheritance?",options:["extends","implements","None","All"],answer:0},
{question:"JVM?",options:["Machine","Memory","None","All"],answer:0},
{question:"Java supports?",options:["OOP","POP","Both","None"],answer:0}
],

// ---------- C ----------
C: [
{question:"C?",options:["Language","Compiler","OS","None"],answer:0},
{question:"File?",options:[".c",".cpp",".java",".py"],answer:0},
{question:"Main?",options:["main()","start()","run()","None"],answer:0},
{question:"printf()?",options:["Output","Input","Loop","None"],answer:0},
{question:"scanf()?",options:["Input","Output","Loop","None"],answer:0},
{question:"Developer?",options:["Dennis Ritchie","James","None","All"],answer:0},
{question:"Loop?",options:["for","if","switch","None"],answer:0},
{question:"Header?",options:["stdio.h","math.h","All","None"],answer:2},
{question:"Variable?",options:["Store value","Loop","Function","None"],answer:0},
{question:"C is?",options:["Procedural","OOP","Both","None"],answer:0}
],

// ---------- OS ----------
"Operating System": [
{question:"OS?",options:["System","Language","App","None"],answer:0},
{question:"Example?",options:["Windows","HTML","CSS","JS"],answer:0},
{question:"Manages?",options:["Hardware","Software","Both","None"],answer:2},
{question:"CPU scheduling?",options:["Process","Memory","File","None"],answer:0},
{question:"RAM?",options:["Memory","Storage","CPU","None"],answer:0},
{question:"Process?",options:["Running program","File","CPU","None"],answer:0},
{question:"Interface?",options:["OS","Hardware","Software","None"],answer:0},
{question:"Linux?",options:["OS","Language","App","None"],answer:0},
{question:"Multitasking?",options:["Many tasks","One","None","All"],answer:0},
{question:"Kernel?",options:["Core","App","File","None"],answer:0}
],

// ---------- CN ----------
"Computer Networks": [
{question:"Network?",options:["Connection","Data","OS","None"],answer:0},
{question:"Internet?",options:["Network","Program","OS","None"],answer:0},
{question:"IP?",options:["Protocol","Program","Input","None"],answer:0},
{question:"Router?",options:["Device","Software","Cable","None"],answer:0},
{question:"LAN?",options:["Local","Large","Long","None"],answer:0},
{question:"WAN?",options:["Wide","Web","Wire","None"],answer:0},
{question:"Protocol?",options:["Rules","Data","Device","None"],answer:0},
{question:"HTTP?",options:["Protocol","Language","OS","None"],answer:0},
{question:"IP address?",options:["Unique","File","Device","None"],answer:0},
{question:"Switch?",options:["Device","Program","Cable","None"],answer:0}
]

};

// ================= SHUFFLE FUNCTION =================
function shuffleOptions(q){
    let arr = q.options.map((opt, i)=>({
        text: opt,
        correct: i === q.answer
    }));

    arr.sort(()=>Math.random()-0.5);

    q.options = arr.map(a=>a.text);
    q.answer = arr.findIndex(a=>a.correct);
}

// ================= LOGIC =================
let currentSubject="", currentQuestion=0, score=0, timer, timeLeft=10;

function startQuiz(subject){
currentSubject=subject;
document.getElementById("subjectPage").style.display="none";
document.getElementById("quizPage").style.display="block";
document.getElementById("selectedSubject").innerText="Subject: "+subject;
document.getElementById("startBtn").style.display="block";
document.getElementById("homeBtn").style.display="none";
}

function beginQuiz(){
currentQuestion=0; score=0;
document.getElementById("startBtn").style.display="none";
document.getElementById("score").innerText="Score: 0";
showQuestion(); startTimer();
}

function showQuestion(){
let q = quizData[currentSubject][currentQuestion];

// 🔥 RANDOM EVERY TIME
shuffleOptions(q);

document.getElementById("question").innerText=q.question;

let html="";
q.options.forEach((opt,i)=>{
html+=`<button class="optionBtn" onclick="checkAnswer(${i})">${opt}</button>`;
});
document.getElementById("answers").innerHTML=html;
}

function checkAnswer(selected){
let correct=quizData[currentSubject][currentQuestion].answer;
let buttons=document.querySelectorAll(".optionBtn");

buttons.forEach((b,i)=>{
b.disabled=true;
b.style.backgroundColor=(i===correct)?"green":"red";
});

if(selected===correct){
score++;
document.getElementById("score").innerText="Score: "+score;
}

setTimeout(nextQuestion,1000);
}

function nextQuestion(){
currentQuestion++;
if(currentQuestion<quizData[currentSubject].length){
showQuestion(); resetTimer();
}else endQuiz();
}

function startTimer(){
clearInterval(timer);
timeLeft=10;
timer=setInterval(()=>{
timeLeft--;
document.getElementById("timer").innerText="Time Left: "+timeLeft;
if(timeLeft<=0) nextQuestion();
},1000);
}

function resetTimer(){ clearInterval(timer); startTimer(); }

function endQuiz(){
clearInterval(timer);
document.getElementById("question").innerText="Quiz Finished!";
document.getElementById("answers").innerHTML="";
document.getElementById("timer").innerText="";
document.getElementById("score").innerText="Final Score: "+score;

document.getElementById("startBtn").style.display="block";
document.getElementById("startBtn").innerText="Restart Quiz";
document.getElementById("homeBtn").style.display="block";
}

function goHome(){
document.getElementById("quizPage").style.display="none";
document.getElementById("subjectPage").style.display="block";
document.getElementById("startBtn").innerText="Start Quiz";
}