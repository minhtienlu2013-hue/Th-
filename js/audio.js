const listeningData = [
    { id: 19, title: "Question 19", src: "../audio/19.mp3" },
    { id: 20, title: "Question 20", src: "../audio/20-21.mp3" },
    { id: 21, title: "Question 21", src: "../audio/20-21.mp3" },
    { id: 22, title: "Question 22", src: "../audio/22-26.mp3" },
    { id: 23, title: "Question 23", src: "../audio/22-26.mp3" },
    { id: 24, title: "Question 24", src: "../audio/22-26.mp3" },
    { id: 25, title: "Question 25", src: "../audio/22-26.mp3" },
    { id: 26, title: "Question 26", src: "../audio/22-26.mp3" },
    { id: 27, title: "Question 27", src: "../audio/27-28.mp3" },
    { id: 28, title: "Question 28", src: "../audio/27-28.mp3" },
    { id: 29, title: "Question 29", src: "../audio/29-30.mp3" },
    { id: 30, title: "Question 30", src: "../audio/29-30.mp3" },
    { id: 31, title: "Question 31", src: "../audio/31-32.wav" },
    { id: 32, title: "Question 32", src: "../audio/31-32.wav" },
    { id: 33, title: "Question 33", src: "../audio/33-34.mp3" },
    { id: 34, title: "Question 34", src: "../audio/33-34.mp3" },
    { id: 35, title: "Question 35", src: "../audio/35.mp3" },
    { id: 36, title: "Question 36", src: "../audio/36-37.mp3" },
    { id: 37, title: "Question 37", src: "../audio/36-37.mp3" },
    { id: 38, title: "Question 38", src: "../audio/38.mp3" },

];
const keysContainer = document.getElementById('quick-keys-list');
const detailsContainer = document.getElementById('answer-details');
listeningData.forEach((item) => {
    const keyBtn = document.createElement('div');
    keyBtn.className = 'key-item';
    keyBtn.innerText = item.id;
    keyBtn.onclick = () => loadAudio(item);
    keysContainer.appendChild(keyBtn);
});

function loadAudio(item) {
    detailsContainer.innerHTML = `
        <div class="audio-card">
            <h2>Listening Task ${item.id}</h2>
            <p><strong>Topic:</strong> ${item.title}</p>
            
            <div class="player-wrapper">
                <audio controls id="main-player">
                    <source src="${item.src}" type="audio/mpeg">
                    Trình duyệt của bạn không hỗ trợ file nghe.
                </audio>
            </div>

            <div class="listening-tips">
                <br>
                <strong>Tip for you:</strong><br>
                - Listen to the main ideas first.<br>
                - Pay attention to keywords.<br>
                - Take notes while listening.
            </div>
        </div>
    `;
    
    const player = document.getElementById('main-player');
    player.play();
}
