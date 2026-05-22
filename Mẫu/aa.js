const questions = [
    { question: "…",
    audio: "../Grade a/Audio/tên file nghe.mp3",
    answers: [
        {text:"A. … .", correct: false },
      { text: "B. … .", correct: false },
      { text: "C. … .", correct: true },
        { text: "D. … .", correct: false },
    ],
    },
    ];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const homeButton = document.getElementById("home-btn");
const backgroundMusic = new Audio('duong-dan-file-nghe.mp3');
let currentQuestionIndex = 0;
let score = 0;
let timer; 
let timeValue = 180;
const timeLine = document.getElementById("time-line");
function startQuiz(){ currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    homeButton.style.display = "none";
    backgroundMusic.play(); 
    backgroundMusic.loop = true;
    showQuestion();}
function nextQuestion() {currentQuestionIndex++;
    showQuestion();}
function showQuestion(){ resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
      const audioElement = document.getElementById("question-audio");
    if(currentQuestion.audio) {
        if (audioElement.getAttribute('src') !== currentQuestion.audio) {
            audioElement.src = currentQuestion.audio;
            audioElement.play(); }
        audioElement.style.display = "block"; 
    } else {audioElement.pause();
        audioElement.src = ""; 
        audioElement.style.display = "none"; }
       currentQuestion.answers.forEach(answer => {
    });
    const imgElement = document.getElementById("question-image"); 
    if(currentQuestion.image){imgElement.src = currentQuestion.image;
        imgElement.style.display = "block"; 
    } else { imgElement.style.display = "none"; }
    currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){button.dataset.correct = answer.correct; }
        button.addEventListener("click", selectAnswer);
    });
    clearInterval(timer);
    timeLine.style.width = "100%"; 
    startTimer(180); }
function resetState(){nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);}}
function selectAnswer(e){nextButton.style.display = "block";
        clearInterval(timer); 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){ selectedBtn.classList.add("correct");
        score++; 
    }else{ selectedBtn.classList.add("incorrect")}
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");}
        button.disabled = true;});
}
function startTimer(time) { timer = setInterval(timerFunction, 1000);
    function timerFunction() { time--; 
        let widthValue = (time / 180) * 100; 
        timeLine.style.width = widthValue + "%";
        if (time <= 0) {clearInterval(timer); 
            handleNextButton(); }
    }
}
function showScore(){resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    homeButton.innerHTML = "Homepage";
    homeButton.style.display = "block";}
function handleNextButton(){currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();}
}
homeButton.addEventListener("click", () => {
    location.reload(); });
homeButton.addEventListener("click", ()=>{
    window.location.href = "../index.html";})
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{ startQuiz();}
});
startQuiz();
