const questions = [
  {
    question: "<b>SECTION I: LISTENING</b><br>Part 1: Listen to an interview between a reporter and Dr. Smith. Choose the correct answer. <br> <i>1. What does Dr. Smith say is the primary cause of tension for teens today?</i>",
    audio: "../Grade 8/Audio/GRADE 8 PART 1.mp3",
    answers: [
      { text: "A. Preparing for midterm exams and schoolwork.", correct: false },
      { text: "B. The need to satisfy their peers and online followers.", correct: true },
      { text: "C. Spending too much time in physical playgrounds.", correct: false }
    ]
  },
  {
    question: "2. How has the nature of 'bullying' changed according to the expert?",
     audio: "../Grade 8/Audio/GRADE 8 PART 1.mp3",
    answers: [
      { text: "A. It no longer happens in schools or playgrounds.", correct: false },
      { text: "B. It has become an enjoyable activity for most mature students.", correct: false },
      { text: "C. It now frequently occurs when students are using the internet.", correct: true }
    ]
  },
  {
    question: "3. What is Dr. Smith's advice for helping teenagers?",
audio: "../Grade 8/Audio/GRADE 8 PART 1.mp3",
    answers: [
      { text: "A. They should try to meet every expectation people have of them.", correct: false },
      { text: "B. They should develop emotional growth to focus on important goals.", correct: true },
      { text: "C. They should stop using their accounts and notifications entirely.", correct: false }
    ]
  },
  {
    question: "Part 2: Listen to an interview about a natural disaster and decide if the statements are R (right) or W (wrong). <br> <i>4. Cassie's family were driving when the disaster started.</i>",
 audio: "../Grade 8/Audio/GRADE 8 PART 2.mp3",
    answers: [
      { text: "A. R", correct: false },
      { text: "B. W", correct: true }
    ]
  },
  {
    question: "5. Cassie felt terrified when the disaster started.",
 audio: "../Grade 8/Audio/GRADE 8 PART 2.mp3",
     answers: [
      { text: "A. R", correct: true },
      { text: "B. W", correct: false }
    ]
  },
  {
    question: "<b>SECTION II: VOCABULARY AND GRAMMAR</b><br>6. Choose the word which has a different stress pattern from that of the others.",
    answers: [
      { text: "A. guarantee", correct: false },
      { text: "B. awardee", correct: false },
      { text: "C. committee", correct: true },
      { text: "D. absentee", correct: false }
    ]
  },
  {
    question: "7. She enjoys _______ documentaries that explore big ideas and concepts.",
    answers: [
      { text: "A. watches", correct: false },
      { text: "B. watched", correct: false },
      { text: "C. watching", correct: true },
      { text: "D. watch", correct: false }
    ]
  },
  {
    question: "8. If we _______ to France, we will visit the Louvre Museum.",
    answers: [
      { text: "A. travel", correct: true },
      { text: "B. are travelling", correct: false },
      { text: "C. travelled", correct: false },
      { text: "D. have travelled", correct: false }
    ]
  },
  {
    question: "9. At this time next year, I _______ my graduation with my friends.",
    answers: [
      { text: "A. will be celebrating", correct: true },
      { text: "B. will celebrate", correct: false },
      { text: "C. am going to celebrate", correct: false },
      { text: "D. am celebrating", correct: false }
    ]
  },
  {
    question: "10. Scientists are interested in the ________ of life on Mars.",
    answers: [
      { text: "A. possible", correct: false },
      { text: "B. possibilities", correct: true },
      { text: "C. impossible", correct: false },
      { text: "D. possibly", correct: false }
    ]
  },
  {
    question: "11. Find the mistake: <u>Mary’s</u> husband <u>told</u> <u>she</u> to cook <u>a meal</u> for him.",
    answers: [
      { text: "A. Mary’s", correct: false },
      { text: "B. told", correct: false },
      { text: "C. she", correct: true },
      { text: "D. a meal", correct: false }
    ]
  },
  {
    question: "12. Rice, coffee, fruits and vegetables are Viet Nam’s agricultural ………….",
    answers: [
      { text: "A. produce", correct: false },
      { text: "B. production", correct: false },
      { text: "C. products", correct: true },
      { text: "D. productive", correct: false }
    ]
  },
  {
    question: "<b>SECTION III: READING</b><br>Part 1. Read the passage and choose the correct answer. <br> <i> Every year, the average temperature of the Earth's surface gets a little bit warmer. This gradual trend is called global warming. Warmer weather may sound nice, but global warming is something to be very concerned about. Scientists are worried that continued warmer temperatures could damage the environment in many devastating ways. Rising temperatures might cause plants and animals to become extinct. They could melt enough polar ice to cause the levels of the sea to rise. Weather patterns could also change. There might be more droughts or serious storms with flooding. In some areas, human diseases could spread. What is causing global warming? Humans are mostly to blame. Pollution from factories and cars add toxic gases to the air. These gases rise to the Earth's atmosphere. As the sun’s rays warm the Earth, the gases work much like the glass in a greenhouse. They help trap the heat in the atmosphere and make the Earth grow warmer. That is why they are nicknamed “greenhouse gases.” It is our responsibility to take care of our planet. Global warming is a serious problem with serious consequences. If we want future generations to enjoy their time on Earth, we must act now! </i> <br> 13. The statement that 'humans are mostly to blame' in paragraph 3 suggests that ___________.",
    answers: [
      { text: "A. humans have been blamed for global warming", correct: false },
      { text: "B. humans have not been blamed for global warming", correct: false },
      { text: "C. humans are mostly responsible for global warming", correct: true },
      { text: "D. there are many factors that cause global warming", correct: false }
    ]
  },
  {
    question:"<b>SECTION III: READING</b><br>Part 1. Read the passage and choose the correct answer. <br> <i> Every year, the average temperature of the Earth's surface gets a little bit warmer. This gradual trend is called global warming. Warmer weather may sound nice, but global warming is something to be very concerned about. Scientists are worried that continued warmer temperatures could damage the environment in many devastating ways. Rising temperatures might cause plants and animals to become extinct. They could melt enough polar ice to cause the levels of the sea to rise. Weather patterns could also change. There might be more droughts or serious storms with flooding. In some areas, human diseases could spread. What is causing global warming? Humans are mostly to blame. Pollution from factories and cars add toxic gases to the air. These gases rise to the Earth's atmosphere. As the sun’s rays warm the Earth, the gases work much like the glass in a greenhouse. They help trap the heat in the atmosphere and make the Earth grow warmer. That is why they are nicknamed “greenhouse gases.” It is our responsibility to take care of our planet. Global warming is a serious problem with serious consequences. If we want future generations to enjoy their time on Earth, we must act now! </i> <br> 14. From the description of greenhouse gases, it can be concluded that a greenhouse is __________.",
    answers: [
      { text: "A. a glass structure", correct: true },
      { text: "B. the Earth", correct: false },
      { text: "C. a colored home", correct: false },
      { text: "D. a type of gas", correct: false }
    ]
  },
  {
    question:"<b>SECTION III: READING</b><br>Part 1. Read the passage and choose the correct answer. <br> <i> Every year, the average temperature of the Earth's surface gets a little bit warmer. This gradual trend is called global warming. Warmer weather may sound nice, but global warming is something to be very concerned about. Scientists are worried that continued warmer temperatures could damage the environment in many devastating ways. Rising temperatures might cause plants and animals to become extinct. They could melt enough polar ice to cause the levels of the sea to rise. Weather patterns could also change. There might be more droughts or serious storms with flooding. In some areas, human diseases could spread. What is causing global warming? Humans are mostly to blame. Pollution from factories and cars add toxic gases to the air. These gases rise to the Earth's atmosphere. As the sun’s rays warm the Earth, the gases work much like the glass in a greenhouse. They help trap the heat in the atmosphere and make the Earth grow warmer. That is why they are nicknamed “greenhouse gases.” It is our responsibility to take care of our planet. Global warming is a serious problem with serious consequences. If we want future generations to enjoy their time on Earth, we must act now! </i> <br>15. This passage is mostly about ___________.",
    answers: [
      { text: "A. the solutions to global warming", correct: false },
      { text: "B. the different types of global warming", correct: false },
      { text: "C. the reasons why global warming is not a serious problem", correct: false },
      { text: "D. the causes and effects of global warming", correct: true }
    ]
  },
  {
    question: "Part 2. Read the passage and choose the correct answer. <br> <i> No more teachers? No more books? For today's kids, the Internet has all the answers. <br> Gadgets come and go and most of them don't have a very long life. The Internet, (16) ______, seems to be here to stay. The World Wide Web is now the largest information (17) ______ in the world and teenagers can find more or less anything they want there. They can download music and films, watch TV, listen to the radio, send e-mails and even shop online. <br>In the United States for example, more than 78% of kids go online, according to a recent study. A lot of them are just surfing the Web and instant messaging their friends. But 94% of those online said they also used it for schoolwork. This technology has allowed them to access a vast store of knowledge which was inaccessible before. With online tutoring and virtual schools, technology allows students to get specific help. It is also (18) _______ to be a part of a study group or discuss school projects with international e-mail pals. Perhaps more than anything, the Internet search engine Google has changed homework habits across the globe. But the problem is that it is so easy to “copy and paste” that teachers need to change homework assignments or projects every year. </i>",
    answers: [
      { text: "A. moreover", correct: false },
      { text: "B. because", correct: false },
      { text: "C. however", correct: true },
      { text: "D. although", correct: false }
    ]
  },
  {
    question: "Part 2. Read the passage and choose the correct answer. <br> <i> No more teachers? No more books? For today's kids, the Internet has all the answers. <br> Gadgets come and go and most of them don't have a very long life. The Internet, (16) ______, seems to be here to stay. The World Wide Web is now the largest information (17) ______ in the world and teenagers can find more or less anything they want there. They can download music and films, watch TV, listen to the radio, send e-mails and even shop online. <br>In the United States for example, more than 78% of kids go online, according to a recent study. A lot of them are just surfing the Web and instant messaging their friends. But 94% of those online said they also used it for schoolwork. This technology has allowed them to access a vast store of knowledge which was inaccessible before. With online tutoring and virtual schools, technology allows students to get specific help. It is also (18) _______ to be a part of a study group or discuss school projects with international e-mail pals. Perhaps more than anything, the Internet search engine Google has changed homework habits across the globe. But the problem is that it is so easy to “copy and paste” that teachers need to change homework assignments or projects every year. </i>",
    answers: [
      { text: "A. resource", correct: true },
      { text: "B. technology", correct: false },
      { text: "C. informatics", correct: false },
      { text: "D. generation", correct: false }
    ]
  },
  {
    question: "Part 2. Read the passage and choose the correct answer. <br> <i> No more teachers? No more books? For today's kids, the Internet has all the answers. <br> Gadgets come and go and most of them don't have a very long life. The Internet, (16) ______, seems to be here to stay. The World Wide Web is now the largest information (17) ______ in the world and teenagers can find more or less anything they want there. They can download music and films, watch TV, listen to the radio, send e-mails and even shop online. <br>In the United States for example, more than 78% of kids go online, according to a recent study. A lot of them are just surfing the Web and instant messaging their friends. But 94% of those online said they also used it for schoolwork. This technology has allowed them to access a vast store of knowledge which was inaccessible before. With online tutoring and virtual schools, technology allows students to get specific help. It is also (18) _______ to be a part of a study group or discuss school projects with international e-mail pals. Perhaps more than anything, the Internet search engine Google has changed homework habits across the globe. But the problem is that it is so easy to “copy and paste” that teachers need to change homework assignments or projects every year. </i>",
    answers: [
      { text: "A. possible", correct: true },
      { text: "B. possibility", correct: false },
      { text: "C. possibly", correct: false },
      { text: "D. posset", correct: false }
    ]
  },
  {
    question: "<b>SECTION IV: WRITING</b><br>19. The professor said, 'You must submit your research proposal by the end of the week.'",
    answers: [
      { text: "A. The professor demanded me to submit my research proposal by the end of the week.", correct: false },
      { text: "B. The professor instructed me to submit my research proposal by the end of the week.", correct: true },
      { text: "C. The professor requested me to submit my research proposal by the end of the week.", correct: false },
      { text: "D. The professor reminded me to submit my research proposal by the end of the week.", correct: false }
    ]
  },
  {
    question: "20. Could you tell me how to get to the station?",
    answers: [
      { text: "A. Would you mind telling me how to get to the station?", correct: true },
      { text: "B. Would you mind tell me how to get to the station?", correct: false },
      { text: "C. Would you mind to tell me how to get to the station?", correct: false },
      { text: "D. Would you do mind tell me how to getting to the station?", correct: false }
    ]
  },
  {
    question: "21. Stop swimming in that lake, or you will have skin rashes.",
    answers: [
      { text: "A. If you stop swimming in that lake, you will have skin rashes.", correct: false },
      { text: "B. If you didn’t stop swimming in that lake, you will have skin rashes.", correct: false },
      { text: "C. If you had not stopped swimming in that lake, you will have skin rashes.", correct: false },
      { text: "D. Unless you stop swimming in that lake, you will have skin rashes.", correct: true }
    ]
  },
  {
    question: "<b>SECTION V: SPEAKING</b><br>22. Liam: 'You won’t believe what I saw.' – Ava: '_______.'",
    answers: [
      { text: "A. Yes, it was.", correct: false },
      { text: "B. It was good.", correct: false },
      { text: "C. What happened?", correct: true },
      { text: "D. It was a good idea!", correct: false }
    ]
  },
  {
    question: "23. Do they have traditional arts and crafts?",
    answers: [
      { text: "A. Yes, they did.", correct: false },
      { text: "B. Yes, they do.", correct: true },
      { text: "C. No, they are not.", correct: false },
      { text: "D. Yes, they are expensive.", correct: false }
    ]
  },
  {
    question: "24. Reorder the sentences to make a complete paragraph (a, b, c, d): <br> a. Then, destinations include the Grand Canyon, the Great Barrier Reef, Mount Everest, and Victoria Falls. Also, these locations are famous for their breathtaking beauty. <br>b. Finally, to join the trip, please register by June 15th. Therefore, make sure to sign up on time. <br> c. First, an upcoming trip will take you to see some of the world’s most incredible natural wonders. Additionally, this adventure will provide a unique experience. <br> d. Next, the trip starts on July 1st and lasts for two weeks. Moreover, you will enjoy both guided tours and free time to explore. <br>",
    answers: [
      { text: "A. c-d-a-b", correct: true },
      { text: "B. c-a-d-b", correct: false },
      { text: "C. a-c-d-b", correct: false },
      { text: "D. c-d-b-a", correct: false }
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

