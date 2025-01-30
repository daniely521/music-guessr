const scoreDisplay = document.getElementById('score');
const answerBox = document.getElementById('answer');
const startbtn = document.getElementById('start-btn');
const replaybtn = document.getElementById('replay-btn');
const submitbtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const home = document.getElementById('home');

const music = [
    {song: "audio1", answer: "Blinding Lights"},
    {song: "audio1", answer: "Blinding Lights"}
];

var audio1 = new Audio('sounds/sound1.mp3');

let score = 0;
let songindex = 0;
let currentSong;
let currentAns;
let lengthSong = 0;
let playing = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

startbtn.addEventListener('click', ()=> {
    console.log('start button pressed');
    scoreDisplay.classList.remove('hidden');
    answerBox.classList.remove('hidden');
    startbtn.classList.add('hidden');
    replaybtn.classList.remove('hidden');
    submitbtn.classList.remove('hidden');
    playSong();
});

function playSong() {
    if (songindex < music.length) {
        currentSong = music[songindex].song;
        currentAns = music[songindex].answer;
        currentSong.play();
        sleep(1000);
        currentSong.pause();
        lengthSong+=1;
    } else {
        endGame();
    }
}

replaybtn.addEventListener('click', () => {
    playSong();
});

submitbtn.addEventListener('click', () => {
    checkAnswer();
});

function checkAnswer() {
    if (answerBox.value.toLowerCase().trim() === currentAns.toLowerCase().trim()) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        feedback.textContent = `Correct!`
    } else {
        feedback.textContent = `The song was: ${currentSong}`
    }
    songindex++;
    lengthSong = 0;
    sleep(1000);
    playSong();
}

function endGame() {
    scoreDisplay.classList.add('hidden');
    answerBox.classList.add('hidden');
    replaybtn.classList.add('hidden');
    submitbtn.classList.add('hidden');
    home.classList.remove('hidden');
}

home.addEventListener('click', () => {
    scoreDisplay.classList.add('hidden');
    answerBox.classList.add('hidden');
    startbtn.classList.remove('hidden');
    replaybtn.classList.add('hidden');
    submitbtn.classList.add('hidden');
    home.classList.add('hidden');
})