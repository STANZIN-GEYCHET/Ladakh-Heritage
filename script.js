function searchContent() {

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.querySelectorAll(
".card, .history-card, .culture-card, .festival-card, .food-card, .attraction-card, .gallery-item, .about-card"
);

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(input)){
    card.style.display="block";
}
else{
    card.style.display="none";
}

});

}

const quiz = [

{
question:"What is Ladakh popularly known as?",
answers:[
"Land of Rivers",
"Land of High Passes",
"Land of Forests",
"Land of Lakes"
],
correct:1
},

{
question:"Which lake is famous for changing colours?",
answers:[
"Dal Lake",
"Pangong Lake",
"Wular Lake",
"Loktak Lake"
],
correct:1
},

{
question:"Which is the capital city of Ladakh?",
answers:[
"Leh",
"Kargil",
"Srinagar",
"Manali"
],
correct:0
},

{
question:"Which monastery is one of the most famous in Ladakh?",
answers:[
"Hemis Monastery",
"Golden Temple",
"Mahabodhi Temple",
"Kedarnath"
],
correct:0
},

{
question:"Which traditional soup is popular in Ladakh?",
answers:[
"Biryani",
"Pizza",
"Thukpa",
"Pasta"
],
correct:2
},

{
question:"Which pass is famous in Ladakh?",
answers:[
"Rohtang Pass",
"Khardung La",
"Nathu La",
"Jalori Pass"
],
correct:1
},

{
question:"Which river flows through Ladakh?",
answers:[
"Yamuna",
"Godavari",
"Indus",
"Narmada"
],
correct:2
},

{
question:"Which festival is the biggest in Ladakh?",
answers:[
"Diwali",
"Hemis Festival",
"Holi",
"Pongal"
],
correct:1
},

{
question:"Which animal is famous in Nubra Valley?",
answers:[
"Elephant",
"Double-Humped Camel",
"Tiger",
"Lion"
],
correct:1
},

{
question:"Which dance is performed during monastery festivals?",
answers:[
"Bharatanatyam",
"Kathak",
"Cham Dance",
"Garba"
],
correct:2
}

];

let currentQuestion=0;
let userAnswers=new Array(quiz.length).fill(null);

function loadQuestion(){

document.getElementById("question").innerHTML=(currentQuestion+1)+". "+quiz[currentQuestion].question;

const answers=document.getElementById("answers");

answers.innerHTML="";

quiz[currentQuestion].answers.forEach((answer,index)=>{

answers.innerHTML+=`

<label class="option">

<input type="radio"

name="answer"

value="${index}"

${userAnswers[currentQuestion]===index?"checked":""}

>

${answer}

</label>

`;

});

updateProgress();

}

function nextQuestion(){

const selected=document.querySelector('input[name="answer"]:checked');

if(selected){

userAnswers[currentQuestion]=Number(selected.value);

}

if(currentQuestion<quiz.length-1){

currentQuestion++;

loadQuestion();

}else{

showScore();

}

}

function previousQuestion(){

const selected=document.querySelector('input[name="answer"]:checked');

if(selected){

userAnswers[currentQuestion]=Number(selected.value);

}

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

}

function updateProgress(){

let percent=((currentQuestion+1)/quiz.length)*100;

document.getElementById("progressBar").style.width=percent+"%";

}

function showScore(){

let score=0;

for(let i=0;i<quiz.length;i++){

if(userAnswers[i]===quiz[i].correct){

score++;

}

}

let username=document.getElementById("username").value;

if(username==""){

username="Visitor";

}

let title="Ladakh Learner";

if(score>=8){

title="🏆 Ladakh Explorer";

}

document.querySelector(".quiz-box").innerHTML=`

<div class="certificate">

<h1>🏆 CERTIFICATE OF ACHIEVEMENT</h1>

<h2>This certificate is proudly presented to</h2>

<h1>${username}</h1>

<p>

for successfully completing the

<b>Ladakh Heritage Quiz</b>

</p>

<h2>Score : ${score}/10</h2>

<h2>${title}</h2>

<button onclick="window.print()">

🖨 Download / Print Certificate

</button>

<br><br>

<button onclick="location.reload()">

🔄 Try Again

</button>

</div>

`;

}
//remove it if id doenot work

// Initialize the first question when the DOM is ready
document.addEventListener('DOMContentLoaded', loadQuestion);