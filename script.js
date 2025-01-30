const scoreDisplay = document.getElementById('Score');
const answerBox = document.getElementById('answer');
const startbtn = document.getElementById('start-btn');
const submitbtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const home = document.getElementById('home');
const next = document.getElementById('next-btn');
const audiog = document.getElementById('audiog');

const music = [
    {song: 'sounds/sound1.mp3', answer: "Blinding Lights"},
    {song: 'sounds/sound2.mp3', answer: "Shape of You"},
    {song: 'sounds/sound3.mp3', answer: "Someone You Loved"},
    {song: 'sounds/sound4.mp3', answer: "As It Was"},
    {song: 'sounds/sound5.mp3', answer: "Starboy"},
    {song: 'sounds/sound6.mp3', answer: "Sunflower"},
    {song: 'sounds/sound7.mp3', answer: "Sweater Weather"},
    {song: 'sounds/sound8.mp3', answer: "One Dance"},
    {song: 'sounds/sound9.mp3', answer: "STAY"},
    {song: 'sounds/sound10.mp3', answer: "Believer"},
    {song: 'sounds/sound11.mp3', answer: "Heat Waves"},
    {song: 'sounds/sound12.mp3', answer: "Perfect"},
    {song: 'sounds/sound13.mp3', answer: "Dance Monkey"},
    {song: 'sounds/sound14.mp3', answer: "lovely"},
    {song: 'sounds/sound15.mp3', answer: "Say You Won't Let Go"}
];


let score = 0;
let songindex = 0;
let currentSong;
let currentAns;
let lengthSong = 0;
let playing = false;
let audio1;


startbtn.addEventListener('click', ()=> {
    console.log('start button pressed');
    scoreDisplay.classList.remove('hidden');
    answerBox.classList.remove('hidden');
    startbtn.classList.add('hidden');
    submitbtn.classList.remove('hidden');
    playSong();
});

function playSong() {
    if (songindex < music.length) {
        currentSong = music[songindex].song;
        audiog.src = currentSong;
        currentAns = music[songindex].answer;
        audiog.play();
        console.log('song playing');
    } else {
        endGame();
    }
}


submitbtn.addEventListener('click', () => {
    checkAnswer();
    console.log('submit button pressed');
});

function checkAnswer() {
    if (answerBox.value.toLowerCase().trim() === currentAns.toLowerCase().trim()) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        feedback.textContent = `Correct!`
    } else {
        feedback.textContent = `The song was: ${currentAns}`
    }
    currentSong = music[songindex].song;
    let audio1 = new Audio(currentSong);
    audiog.pause();
    songindex++;
    lengthSong = 0;
    answerBox.value = '';
    submitbtn.classList.add('hidden');
    next.classList.remove('hidden');
}

next.addEventListener('click', () => {
    playSong();
    next.classList.add('hidden');
    submitbtn.classList.remove('hidden');
    feedback.textContent = '';
});

function endGame() {
    scoreDisplay.classList.add('hidden');
    answerBox.classList.add('hidden');
    submitbtn.classList.add('hidden');
    home.classList.remove('hidden');
    feedback.textContent = `your final score is ${score}`;
}

home.addEventListener('click', () => {
    feedback.textContent = '';
    scoreDisplay.classList.add('hidden');
    answerBox.classList.add('hidden');
    startbtn.classList.remove('hidden');
    submitbtn.classList.add('hidden');
    home.classList.add('hidden');
})

answerBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        submitbtn.click(); 
    }
});