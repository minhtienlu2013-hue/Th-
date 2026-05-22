const questions = [
  {
    question: "SECTION I. LISTENING <br> Part 1. Listen to two friends, Phong and An, talking about animal waste. <br> 1. According to Phong, what are the three key aspects of animal waste disposal?",
    audio: "../Grade 9/1.mp3",
    answers: [
      { text: "A. Why, what, how", correct: false },
      { text: "B. When, where, how", correct: true },
      { text: "C. How, where, why", correct: false },
      { text: "D. What, when, why", correct: false }
    ]
  },
  {
    question: "2. According to Phong, when should animal waste be disposed of?",
    audio: "../Grade 9/1.mp3",
    answers: [
      { text: "A. Daily on small farms and weekly on large farms", correct: false },
      { text: "B. Weekly on small farms and daily on large farms", correct: true },
      { text: "C. Monthly on small farms and daily on large farms", correct: false },
      { text: "D. Daily on small farms and monthly on large farms", correct: false }
    ]
  },
  {
    question: "Part 2. Listen and choose the correct answer A,B,C or D. <br> 3. How deep is the deepest part of the cave?",
    audio: "../Grade 9/2.mp3",
    answers: [
      { text: "A. 150 m", correct: false },
      { text: "B. 200 m", correct: true },
      { text: "C. 9 km", correct: false },
      { text: "D. 38.5 m", correct: false }
    ]
  },
  {
    question: "4. When was the cave first discovered?",
    audio: "../Grade 9/2.mp3",
    answers: [
      { text: "A. over 200 years ago", correct: false },
      { text: "B. 1991", correct: true },
      { text: "C. 38.5 million years ago", correct: false },
      { text: "D. 2008", correct: false }
    ]
  },
  {
    question: "5. According to the speaker, when can you NOT visit Son Đoòng Cave?",
    audio: "../Grade 9/2.mp3",
    answers: [
      { text: "A. for five days of the year", correct: false },
      { text: "B. January to August", correct: false },
      { text: "C. September to December", correct: true },
      { text: "D all of rainy season", correct: false }
    ]
  },
  {
    question: "SECTION II. <br> 6. The woman ____________ you met at the party yesterday is my cousin.",
    answers: [
      { text: "A. who", correct: true },
      { text: "B. whose", correct: false },
      { text: "C. which", correct: false },
      { text: "D. what", correct: false }
    ]
  },
  {
    question: "7. Smart electronic devices are expected to play a crucial role in future careers, particularly in the field of _________.",
    answers: [
      { text: "A. traditional cooking", correct: false },
      { text: "B. data analysis", correct: true },
      { text: "C. antique collection", correct: false },
      { text: "D. urban gardening", correct: false }
    ]
  },
  {
    question: "8. ________ technology has advanced rapidly, people still prefer reading books in print.",
    answers: [
      { text: "A. Although", correct: true },
      { text: "B. In spite of", correct: false },
      { text: "C. However", correct: false },
      { text: "D. Despite", correct: false }
    ]
  },
  {
    question: "9. The view from the mountain top was ______ breathtaking ______ we couldn't stop taking photos.",
    answers: [
      { text: "A. too - that", correct: false },
      { text: "B. such - that", correct: false },
      { text: "C. as - as", correct: false },
      { text: "D. so - that", correct: true }
    ]
  },
  {
    question: "10. Whenever I visit a new place, I use _____ to get directions.",
    answers: [
      { text: "A. trip itinerary", correct: false },
      { text: "B. guided tour", correct: false },
      { text: "C. package holiday", correct: false },
      { text: "D. Google Maps", correct: true }
    ]
  },
  {
    question: "SECTION III. READING <br> Read the text and decide the statements are True or False. <br> Read the text and decide the statements are True or False. <br>San people, a famous tribe from Africa, live in the Kalahari Desert. They are also called the Bushmen of Kalahari or Basarwa. They have been living there for 30,000 years. That makes the San people one of the most ancient races! <br>About a thousand years ago, another African tribe moved south of Kalahari Desert area. They were surprised to find the San people already living there. The San people did not greet the newcomers with poisoned arrows. Instead, they welcomed them. They taught them how to be successful hunter-gatherers. Other tribes wandered into the area. They all lived together for a long time. <br>The San people live the same way today as they did thousands of years ago. They are still hunter-gatherers. They camp in one place, and then move on to find food. They know where and when wild plants are ready for harvest. Sometimes they make homes in caves. Sometimes they build huts made of branches and grass. But always, their homes are simple and part of the land. <br>One of the problems in Africa is droughts. The San try to find water in unusual places. They collect water in plants or in the stomachs of the animals they kill. They store the water they collect in eggshells, so they always have water to drink. <br>The San people are good storytellers. They tell stories about magical heroes and clever animals. The San people have their own language which includes clicking sounds. Even if you don’t understand the language, you can still enjoy the stories because the San are great with the mimics and jests of people and animals. <br>The San people make their own medicines. They mix berries to make poisons and remedies. They know how to protect themselves from snake bites. They even have a secret substance they put in their campfires to discourage dangerous animals from visiting their camps. Scientists are working with the San people to learn about all these before this knowledge is lost forever.<br> 11. Basarwa is the name of the place where the San people live.",
    answers: [
      { text: "A. True", correct: false },
      { text: "B. False", correct: true }
    ]
  },
  {
    question: "SECTION III. READING <br> Read the text and decide the statements are True or False. <br> Read the text and decide the statements are True or False. <br>San people, a famous tribe from Africa, live in the Kalahari Desert. They are also called the Bushmen of Kalahari or Basarwa. They have been living there for 30,000 years. That makes the San people one of the most ancient races! <br>About a thousand years ago, another African tribe moved south of Kalahari Desert area. They were surprised to find the San people already living there. The San people did not greet the newcomers with poisoned arrows. Instead, they welcomed them. They taught them how to be successful hunter-gatherers. Other tribes wandered into the area. They all lived together for a long time. <br>The San people live the same way today as they did thousands of years ago. They are still hunter-gatherers. They camp in one place, and then move on to find food. They know where and when wild plants are ready for harvest. Sometimes they make homes in caves. Sometimes they build huts made of branches and grass. But always, their homes are simple and part of the land. <br>One of the problems in Africa is droughts. The San try to find water in unusual places. They collect water in plants or in the stomachs of the animals they kill. They store the water they collect in eggshells, so they always have water to drink. <br>The San people are good storytellers. They tell stories about magical heroes and clever animals. The San people have their own language which includes clicking sounds. Even if you don’t understand the language, you can still enjoy the stories because the San are great with the mimics and jests of people and animals. <br>The San people make their own medicines. They mix berries to make poisons and remedies. They know how to protect themselves from snake bites. They even have a secret substance they put in their campfires to discourage dangerous animals from visiting their camps. Scientists are working with the San people to learn about all these before this knowledge is lost forever.<br> 12 The San people are one of the oldest tribes. .",
    answers: [
      { text: "A. True", correct: true },
      { text: "B. False", correct: false }
    ]
  },
  {
    question: "SECTION III. READING <br> Read the text and decide the statements are True or False. <br> Read the text and decide the statements are True or False. <br>San people, a famous tribe from Africa, live in the Kalahari Desert. They are also called the Bushmen of Kalahari or Basarwa. They have been living there for 30,000 years. That makes the San people one of the most ancient races! <br>About a thousand years ago, another African tribe moved south of Kalahari Desert area. They were surprised to find the San people already living there. The San people did not greet the newcomers with poisoned arrows. Instead, they welcomed them. They taught them how to be successful hunter-gatherers. Other tribes wandered into the area. They all lived together for a long time. <br>The San people live the same way today as they did thousands of years ago. They are still hunter-gatherers. They camp in one place, and then move on to find food. They know where and when wild plants are ready for harvest. Sometimes they make homes in caves. Sometimes they build huts made of branches and grass. But always, their homes are simple and part of the land. <br>One of the problems in Africa is droughts. The San try to find water in unusual places. They collect water in plants or in the stomachs of the animals they kill. They store the water they collect in eggshells, so they always have water to drink. <br>The San people are good storytellers. They tell stories about magical heroes and clever animals. The San people have their own language which includes clicking sounds. Even if you don’t understand the language, you can still enjoy the stories because the San are great with the mimics and jests of people and animals. <br>The San people make their own medicines. They mix berries to make poisons and remedies. They know how to protect themselves from snake bites. They even have a secret substance they put in their campfires to discourage dangerous animals from visiting their camps. Scientists are working with the San people to learn about all these before this knowledge is lost forever.<br> 13. The San people fought with the new tribes who arrived their area. .",
    answers: [
      { text: "A. True", correct: false },
      { text: "B. False", correct: true }
    ]
  },
  {
    question: "SECTION III. READING <br> Read the text and decide the statements are True or False. <br> Read the text and decide the statements are True or False. <br>San people, a famous tribe from Africa, live in the Kalahari Desert. They are also called the Bushmen of Kalahari or Basarwa. They have been living there for 30,000 years. That makes the San people one of the most ancient races! <br>About a thousand years ago, another African tribe moved south of Kalahari Desert area. They were surprised to find the San people already living there. The San people did not greet the newcomers with poisoned arrows. Instead, they welcomed them. They taught them how to be successful hunter-gatherers. Other tribes wandered into the area. They all lived together for a long time. <br>The San people live the same way today as they did thousands of years ago. They are still hunter-gatherers. They camp in one place, and then move on to find food. They know where and when wild plants are ready for harvest. Sometimes they make homes in caves. Sometimes they build huts made of branches and grass. But always, their homes are simple and part of the land. <br>One of the problems in Africa is droughts. The San try to find water in unusual places. They collect water in plants or in the stomachs of the animals they kill. They store the water they collect in eggshells, so they always have water to drink. <br>The San people are good storytellers. They tell stories about magical heroes and clever animals. The San people have their own language which includes clicking sounds. Even if you don’t understand the language, you can still enjoy the stories because the San are great with the mimics and jests of people and animals. <br>The San people make their own medicines. They mix berries to make poisons and remedies. They know how to protect themselves from snake bites. They even have a secret substance they put in their campfires to discourage dangerous animals from visiting their camps. Scientists are working with the San people to learn about all these before this knowledge is lost forever.<br> 14. You don’t need to speak the San people’s language to enjoy their stories. .",
    answers: [
      { text: "A. True", correct: true },
      { text: "B. False", correct: false }
    ]
  },
  {
    question: "SECTION III. READING <br> Read the text and decide the statements are True or False. <br> Read the text and decide the statements are True or False. <br>San people, a famous tribe from Africa, live in the Kalahari Desert. They are also called the Bushmen of Kalahari or Basarwa. They have been living there for 30,000 years. That makes the San people one of the most ancient races! <br>About a thousand years ago, another African tribe moved south of Kalahari Desert area. They were surprised to find the San people already living there. The San people did not greet the newcomers with poisoned arrows. Instead, they welcomed them. They taught them how to be successful hunter-gatherers. Other tribes wandered into the area. They all lived together for a long time. <br>The San people live the same way today as they did thousands of years ago. They are still hunter-gatherers. They camp in one place, and then move on to find food. They know where and when wild plants are ready for harvest. Sometimes they make homes in caves. Sometimes they build huts made of branches and grass. But always, their homes are simple and part of the land. <br>One of the problems in Africa is droughts. The San try to find water in unusual places. They collect water in plants or in the stomachs of the animals they kill. They store the water they collect in eggshells, so they always have water to drink. <br>The San people are good storytellers. They tell stories about magical heroes and clever animals. The San people have their own language which includes clicking sounds. Even if you don’t understand the language, you can still enjoy the stories because the San are great with the mimics and jests of people and animals. <br>The San people make their own medicines. They mix berries to make poisons and remedies. They know how to protect themselves from snake bites. They even have a secret substance they put in their campfires to discourage dangerous animals from visiting their camps. Scientists are working with the San people to learn about all these before this knowledge is lost forever.<br>  15. Dangerous animals stay away from the San people’s camp because of the poisonous food. .",
    answers: [
      { text: "A. True", correct: false },
      { text: "B. False", correct: true }
    ]
  },
  {
    question: "SECTION IV. WRITING. <br> For questions 16 – 18 choose the answer which is rewrite the following sentence in the same meaning way. <br> 16. It is raining heavily. <br> -> I wish ________________________________.",
    answers: [
      { text: "A. it is not raining heavily.", correct: false },
      { text: "B. it didn't rain heavily.", correct: false },
      { text: "C. it wouldn't rain heavily.", correct: false },
      { text: "D. it were not raining heavily.", correct: true }
    ]
  },
  {
    question: "17. “Would you like to have dinner with us tonight?” said Ms. Smith. <br> -> Ms. Smith invited me ________________________________.",
    answers: [
      { text: "A. to have dinner with them that night.", correct: true },
      { text: "B. having dinner with us that night.", correct: false },
      { text: "C. to have dinner with us tonight.", correct: false },
      { text: "D. if I would like to have dinner with her tonight.", correct: false }
    ]
  },
  {
    question: "18. My house is very large. It can hold 100 people. <br>",
    answers: [
      { text: "A. My house is so large that it can hold 100 people.", correct: true },
      { text: "B. My house is enough large to hold 100 people.", correct: false },
      { text: "C. My house is such large that it can hold 100 people.", correct: false },
      { text: "D. My house is too large to hold 100 people.", correct: false }
    ]
  },
  {
    question: "Section V. SPEAKING <br> 19. a. Phong: Can I give you a hand with that? <br> b. An: That’s really nice of you, thanks. <br> c. An: I’m looking for my class. It’s always crazy on the first day.",
    answers: [
      { text: "A. c – a – b", correct: true },
      { text: "B. c – b – a", correct: false },
      { text: "C. b – a – c", correct: false },
      { text: "D. b – c – a", correct: false }
    ]
  },
  {
    question: "20. a. Ivor: Don't worry. Wait. What did you say?! <br> b. Becky: You can't do that! It's dangerous. <br> c. Ivor: No, it isn't. It's completely safe. See? There are some people swimming over there. <br> d. Becky: Oh, OK then, but be careful. Watch out for crocodiles. <br> e. Ivor: I'm going for a swim in the lake.",
    answers: [
      { text: "A. c – d – a – b – e", correct: false },
      { text: "B. e – d – a – b – c", correct: false },
      { text: "C. c – b – e – a – d", correct: false },
      { text: "D. e – b – c – d – a", correct: true }
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

