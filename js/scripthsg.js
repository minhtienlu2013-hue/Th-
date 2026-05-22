const questions = [
  {
    question: "SECTION I. LISTENING <br> Listen and choose the best answer to the question. <br> 1. What thing caused a mess in the dryer?",
    audio: "../hsg/1.mp3", 
    answers: [
      { text: "A. chewing gum", correct: true },
      { text: "B. a pen", correct: false },
      { text: "C. colored paper", correct: false }
    ]
  },
  {
    question: "2. What clothing did the woman have in the dryer?",
        audio: "../hsg/1.mp3", 

    answers: [
      { text: "A. shorts", correct: false },
      { text: "B. jeans", correct: true },
      { text: "C. sweaters", correct: false }
    ]
  },
  {
    question: "3. Who does the man need to call?",
        audio: "../hsg/1.mp3", 

    answers: [
      { text: "A. his friends", correct: false },
      { text: "B. a repair company", correct: false },
      { text: "C. his office", correct: true }
    ]
  },
  {
    question: "4. Where is the man going to get new clothes for his wife?",
        audio: "../hsg/1.mp3", 

    answers: [
      { text: "A. He's going to take her to a local store.", correct: true },
      { text: "B. They're going to order some clothing online.", correct: false },
      { text: "C. His wife is going to borrow clothes from her sister.", correct: false }
    ]
  },
  {
    question: "5. What happens at the end of the conversation?",
        audio: "../hsg/1.mp3", 

    answers: [
      { text: "A. The couple argue about the situation.", correct: false },
      { text: "B. The woman is angry and leaves the house.", correct: false },
      { text: "C. The man apologizes for his mistake.", correct: true }
    ]
  },

  {
    question: "SECTION II.  LEXICO – GRAMMAR <br> Choose the best answer to each question. <br> 6.  I could not turn in my paper on time because my word processor _______.",
    answers: [
      { text: "A. fell down", correct: false },
      { text: "B. turned down", correct: false },
      { text: "C. tore down", correct: false },
      { text: "D. broke down", correct: true }
    ]
  },
  {
    question: "7. Her father is a _______ drinker. He is always drinking.",
    answers: [
      { text: "A. strong", correct: false },
      { text: "B. heavy", correct: true },
      { text: "C. addictive", correct: false },
      { text: "D. capable", false: true }
    ]
  },
  {
    question: "8. John: “I didn’t pass my driving test.”   -Anna: “_______!”",
    answers: [
      { text: "A. Better luck next time", correct: true },
      { text: "B. So poor", correct: false },
      { text: "C. Congratulations", correct: false },
      { text: "D. That was nice of them", correct: false }
    ]
  },
  {
    question: "9. My mum asked me to give her an ______ for my poor behaviour.",
    answers: [
      { text: "A. explanation", correct: true },
      { text: "B. explain", correct: false },
      { text: "C. explanatory", correct: false },
      { text: "D. unexplained", correct: false }
    ]
  },
  {
    question: "10. She was conscious __ the fact that everone was staring at her.",
    answers: [
      { text: "A. in", correct: false },
      { text: "B. of", correct: true },
      { text: "C. from", correct: false },
      { text: "D. against", correct: false }
    ]
  },
  {
    question: "11. What chemical is this ? It is ________a horrible smell.",
    answers: [
      { text: "A. giving down", correct: false },
      { text: "B. giving off", correct: true },
      { text: "C. giving up", correct: false },
      { text: "D. giving out", correct: false }
    ]
  },
  {
    question: "12. In recent years, more and more people _______ for things with credit cards.",
    answers: [
      { text: "A. pay", correct: false },
      { text: "B. are paid", correct: false },
      { text: "C. are paying", correct: false },
      { text: "D. have been paying", correct: true }
    ]
  },

  {
    question: "SECTION III. READING <br> Read the passage below and choose the best answer to each question <br In the world today, particular in the two most industrialized areas, North America and Europe, recycling is the big news. People are talking about it, practicing it, and discovering new ways to be <u> sensitive </u> to the environment. Recycling means finding ways to use products a second time. The <u> motto </u>  of the recycling movement is “Reduce, Reuse, Recycle”. <br>The first step is to reduce garbage. In stores, a shopper has to buy products in blister packs, boxes and expensive plastic wrappings. A hamburger from a fast food restaurant comes in lots of packaging: usually paper, a box and a bag. All that packaging is wasted resources. People should try to buy things that are wrapped simply, and to reuse cups and utensils. Another way to reduce waste is to buy high-quality products. When low-quality appliances break, many customers throw them away and buy new ones - a loss of more resources and more energy. For example, if a customer buys a high-quality appliance that can be easily repaired, the manufacturer receives an important message. In the same way, if a customer chooses a product with less packaging, that customer sends an important message to the manufacturers. To reduce garbage, the throw-away must stop. <br>The second step is to reuse. It is better to buy juices and soft drinks in returnable bottles. After customers empty the bottles, they return them to the stores. The manufacturers of the drinks collect bottles, wash them, and then fill them again. The energy that is necessary to make new bottles is saved. In some parts of the world, returning bottles for money is a common <u> practice </u> . In those places, the garbage dumps have relatively little glass and plastic from throw-away bottles. <br>The third step being environmentally sensitive is to recycle. Spent motor oil can be cleaned and used again. Aluminum cans are expensive to make. It takes the same amount of energy to make one aluminum can as it does to run a color TV set for three hours. When people collect and recycle aluminum (for new cans), they help save one of the world’s precious resources. <br>13. The word “motto” is closest in meaning to _______.",
    answers: [
      { text: "A. meaning", correct: false },
      { text: "B. belief", correct: true },
      { text: "C. value", correct: false },
      { text: "D. reference", correct: false }
    ]
  },
  {
    question: "SECTION III. READING <br> Read the passage below and choose the best answer to each question <br In the world today, particular in the two most industrialized areas, North America and Europe, recycling is the big news. People are talking about it, practicing it, and discovering new ways to be <u> sensitive </u> to the environment. Recycling means finding ways to use products a second time. The <u> motto </u>  of the recycling movement is “Reduce, Reuse, Recycle”. <br>The first step is to reduce garbage. In stores, a shopper has to buy products in blister packs, boxes and expensive plastic wrappings. A hamburger from a fast food restaurant comes in lots of packaging: usually paper, a box and a bag. All that packaging is wasted resources. People should try to buy things that are wrapped simply, and to reuse cups and utensils. Another way to reduce waste is to buy high-quality products. When low-quality appliances break, many customers throw them away and buy new ones - a loss of more resources and more energy. For example, if a customer buys a high-quality appliance that can be easily repaired, the manufacturer receives an important message. In the same way, if a customer chooses a product with less packaging, that customer sends an important message to the manufacturers. To reduce garbage, the throw-away must stop. <br>The second step is to reuse. It is better to buy juices and soft drinks in returnable bottles. After customers empty the bottles, they return them to the stores. The manufacturers of the drinks collect bottles, wash them, and then fill them again. The energy that is necessary to make new bottles is saved. In some parts of the world, returning bottles for money is a common <u> practice </u> . In those places, the garbage dumps have relatively little glass and plastic from throw-away bottles. <br>The third step being environmentally sensitive is to recycle. Spent motor oil can be cleaned and used again. Aluminum cans are expensive to make. It takes the same amount of energy to make one aluminum can as it does to run a color TV set for three hours. When people collect and recycle aluminum (for new cans), they help save one of the world’s precious resources. <br>14. What is the topic of the passage?",
    answers: [
      { text: "A. How to reduce garbage disposal.", correct: false },
      { text: "B. How to live sensitively to the environment.", correct: true },
      { text: "C. What is involved in the recycling movement.", correct: false },
      { text: "D. What people understand the term “recycle”.", correct: false }
    ]
  },
  {
  question: "SECTION III. READING <br> Read the passage below and choose the best answer to each question <br In the world today, particular in the two most industrialized areas, North America and Europe, recycling is the big news. People are talking about it, practicing it, and discovering new ways to be <u> sensitive </u> to the environment. Recycling means finding ways to use products a second time. The <u> motto </u>  of the recycling movement is “Reduce, Reuse, Recycle”. <br>The first step is to reduce garbage. In stores, a shopper has to buy products in blister packs, boxes and expensive plastic wrappings. A hamburger from a fast food restaurant comes in lots of packaging: usually paper, a box and a bag. All that packaging is wasted resources. People should try to buy things that are wrapped simply, and to reuse cups and utensils. Another way to reduce waste is to buy high-quality products. When low-quality appliances break, many customers throw them away and buy new ones - a loss of more resources and more energy. For example, if a customer buys a high-quality appliance that can be easily repaired, the manufacturer receives an important message. In the same way, if a customer chooses a product with less packaging, that customer sends an important message to the manufacturers. To reduce garbage, the throw-away must stop. <br>The second step is to reuse. It is better to buy juices and soft drinks in returnable bottles. After customers empty the bottles, they return them to the stores. The manufacturers of the drinks collect bottles, wash them, and then fill them again. The energy that is necessary to make new bottles is saved. In some parts of the world, returning bottles for money is a common <u> practice </u> . In those places, the garbage dumps have relatively little glass and plastic from throw-away bottles. <br>The third step being environmentally sensitive is to recycle. Spent motor oil can be cleaned and used again. Aluminum cans are expensive to make. It takes the same amount of energy to make one aluminum can as it does to run a color TV set for three hours. When people collect and recycle aluminum (for new cans), they help save one of the world’s precious resources. <br>15. Which area is considered one of the most industrialized?",
    answers: [
      { text: "A. South America", correct: false },
      { text: "B. Europe", correct: true },
      { text: "C. Middle East", correct: false },
      { text: "D. Asia", correct: false }
    ]
  },
  {  question: "SECTION III. READING <br> Read the passage below and choose the best answer to each question <br In the world today, particular in the two most industrialized areas, North America and Europe, recycling is the big news. People are talking about it, practicing it, and discovering new ways to be <u> sensitive </u> to the environment. Recycling means finding ways to use products a second time. The <u> motto </u>  of the recycling movement is “Reduce, Reuse, Recycle”. <br>The first step is to reduce garbage. In stores, a shopper has to buy products in blister packs, boxes and expensive plastic wrappings. A hamburger from a fast food restaurant comes in lots of packaging: usually paper, a box and a bag. All that packaging is wasted resources. People should try to buy things that are wrapped simply, and to reuse cups and utensils. Another way to reduce waste is to buy high-quality products. When low-quality appliances break, many customers throw them away and buy new ones - a loss of more resources and more energy. For example, if a customer buys a high-quality appliance that can be easily repaired, the manufacturer receives an important message. In the same way, if a customer chooses a product with less packaging, that customer sends an important message to the manufacturers. To reduce garbage, the throw-away must stop. <br>The second step is to reuse. It is better to buy juices and soft drinks in returnable bottles. After customers empty the bottles, they return them to the stores. The manufacturers of the drinks collect bottles, wash them, and then fill them again. The energy that is necessary to make new bottles is saved. In some parts of the world, returning bottles for money is a common <u> practice </u> . In those places, the garbage dumps have relatively little glass and plastic from throw-away bottles. <br>The third step being environmentally sensitive is to recycle. Spent motor oil can be cleaned and used again. Aluminum cans are expensive to make. It takes the same amount of energy to make one aluminum can as it does to run a color TV set for three hours. When people collect and recycle aluminum (for new cans), they help save one of the world’s precious resources. <br>16. What best describe the process of reuse?",
    answers: [
      { text: "A. The bottles are collected, washed, returned and filled again.", correct: false },
      { text: "B. The bottles are washed, returned filled again and collected.", correct: false },
      { text: "C. The bottles are collected, returned, filled again and washed.", correct: false },
      { text: "D. The bottles are filled again after being returned, collected and washed.", correct: true }
    ]
  },
  {
      question: "SECTION III. READING <br> Read the passage below and choose the best answer to each question <br In the world today, particular in the two most industrialized areas, North America and Europe, recycling is the big news. People are talking about it, practicing it, and discovering new ways to be <u> sensitive </u> to the environment. Recycling means finding ways to use products a second time. The <u> motto </u>  of the recycling movement is “Reduce, Reuse, Recycle”. <br>The first step is to reduce garbage. In stores, a shopper has to buy products in blister packs, boxes and expensive plastic wrappings. A hamburger from a fast food restaurant comes in lots of packaging: usually paper, a box and a bag. All that packaging is wasted resources. People should try to buy things that are wrapped simply, and to reuse cups and utensils. Another way to reduce waste is to buy high-quality products. When low-quality appliances break, many customers throw them away and buy new ones - a loss of more resources and more energy. For example, if a customer buys a high-quality appliance that can be easily repaired, the manufacturer receives an important message. In the same way, if a customer chooses a product with less packaging, that customer sends an important message to the manufacturers. To reduce garbage, the throw-away must stop. <br>The second step is to reuse. It is better to buy juices and soft drinks in returnable bottles. After customers empty the bottles, they return them to the stores. The manufacturers of the drinks collect bottles, wash them, and then fill them again. The energy that is necessary to make new bottles is saved. In some parts of the world, returning bottles for money is a common <u> practice </u> . In those places, the garbage dumps have relatively little glass and plastic from throw-away bottles. <br>The third step being environmentally sensitive is to recycle. Spent motor oil can be cleaned and used again. Aluminum cans are expensive to make. It takes the same amount of energy to make one aluminum can as it does to run a color TV set for three hours. When people collect and recycle aluminum (for new cans), they help save one of the world’s precious resources. <br>17. Garbage dumps in some areas have relatively little glass and plastic because _______.",
    answers: [
      { text: "A. people are ordered to return bottles", correct: false },
      { text: "B. returned bottles are few", correct: false },
      { text: "C. few bottles are made of glass or plastic", correct: false },
      { text: "D. each returned bottle is paid", correct: true }
    ]
  },
  {
      question: "SECTION III. READING <br> Read the passage below and choose the best answer to each question <br In the world today, particular in the two most industrialized areas, North America and Europe, recycling is the big news. People are talking about it, practicing it, and discovering new ways to be <u> sensitive </u> to the environment. Recycling means finding ways to use products a second time. The <u> motto </u>  of the recycling movement is “Reduce, Reuse, Recycle”. <br>The first step is to reduce garbage. In stores, a shopper has to buy products in blister packs, boxes and expensive plastic wrappings. A hamburger from a fast food restaurant comes in lots of packaging: usually paper, a box and a bag. All that packaging is wasted resources. People should try to buy things that are wrapped simply, and to reuse cups and utensils. Another way to reduce waste is to buy high-quality products. When low-quality appliances break, many customers throw them away and buy new ones - a loss of more resources and more energy. For example, if a customer buys a high-quality appliance that can be easily repaired, the manufacturer receives an important message. In the same way, if a customer chooses a product with less packaging, that customer sends an important message to the manufacturers. To reduce garbage, the throw-away must stop. <br>The second step is to reuse. It is better to buy juices and soft drinks in returnable bottles. After customers empty the bottles, they return them to the stores. The manufacturers of the drinks collect bottles, wash them, and then fill them again. The energy that is necessary to make new bottles is saved. In some parts of the world, returning bottles for money is a common <u> practice </u> . In those places, the garbage dumps have relatively little glass and plastic from throw-away bottles. <br>The third step being environmentally sensitive is to recycle. Spent motor oil can be cleaned and used again. Aluminum cans are expensive to make. It takes the same amount of energy to make one aluminum can as it does to run a color TV set for three hours. When people collect and recycle aluminum (for new cans), they help save one of the world’s precious resources. <br>18. What are the two things mentioned as examples of recycling?",
    answers: [
      { text: "A. Aluminum cans and spent motor oil.", correct: true },
      { text: "B. Hamburger wrappings and spent motor oil.", correct: false },
      { text: "C. Aluminum cans and plastic wrappings.", correct: false },
      { text: "D. TV sets and aluminum cans.", correct: false }
    ]
  },
  {
    question: "SECTION IV: WRITING <br> 19. <i> The man continued to feel unsafe until they crossed the border.</i>",
    answers: [
      { text: "A. Not until they crossed the border the man felt safe.", correct: false },
      { text: "B. Not until did they cross the border the man felt safe.", correct: false },
      { text: "C. Not until they crossed the border did the man feel safe.", correct: true },
      { text: "D. Only when they crossed the border the man continued to feel unsafe.", correct: false }
    ]
  },
  {
    question: "20. <i> Whose idea was it to organise a party for her?</i>",
    answers: [
      { text: "A. Who came up against the idea of organising a party for her?", correct: false },
      { text: "B. Who came across the idea to organise a party for her?", correct: false },
      { text: "C. Who came up with the idea of organising a party for her?", correct: true },
      { text: "D. Who came round to the idea to organise a party for her?", correct: false }
    ]
  },
  {
    question: "21. <i>It is said that they built the Great Pyramid of Giza over a 20-year period. <br> The Great Pyramid of Giza ____________________________________</i>",
    answers: [
      { text: "A. is said to build over a 20-year period.", correct: false },
      { text: "B. is said to have been built over a 20-year period.", correct: true },
      { text: "C. was said to be built over a 20-year period.", correct: false },
      { text: "D. is said to have built over a 20-year period.", correct: false }
    ]
  },
  {
    question: "SECTION V. SPEAKING <br> Minh: \"I’m really worried about the upcoming provincial English contest. There's so much to memorize!\" <br> Lan: \"________________________\"",
    answers: [
      { text: "A. Don't mention it.", correct: false },
      { text: "B. Keep your chin up! You’ve prepared well.", correct: true },
      { text: "C. You're telling me!", correct: false },
      { text: "D. That’s a steal.", correct: false }
    ]
  }
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

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    homeButton.style.display = "none";
    backgroundMusic.play(); 
    backgroundMusic.loop = true;
    showQuestion();
}
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
      const audioElement = document.getElementById("question-audio");
    if(currentQuestion.audio) {
        if (audioElement.getAttribute('src') !== currentQuestion.audio) {
            audioElement.src = currentQuestion.audio;
            audioElement.play(); 
        }
        audioElement.style.display = "block"; 
    } else {
       
        audioElement.pause();
        audioElement.src = ""; 
        audioElement.style.display = "none"; 
    }
       currentQuestion.answers.forEach(answer => {
    });
    const imgElement = document.getElementById("question-image"); 
    if(currentQuestion.image){
        imgElement.src = currentQuestion.image;
        imgElement.style.display = "block"; 
    } else {
        imgElement.style.display = "none"; 
    }
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    clearInterval(timer);
    timeLine.style.width = "100%"; 
    startTimer(180); 
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
      nextButton.style.display = "block";
        clearInterval(timer); 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

function startTimer(time) {
    timer = setInterval(timerFunction, 1000);
    function timerFunction() {
        time--; 
        let widthValue = (time / 180) * 100; 
        timeLine.style.width = widthValue + "%";

        if (time <= 0) { 
            clearInterval(timer); 
            handleNextButton(); 
        }
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    homeButton.innerHTML = "Homepage";
    homeButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
homeButton.addEventListener("click", () => {
    location.reload(); 
});

homeButton.addEventListener("click", ()=>{
    window.location.href = "../index.html";
})

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

