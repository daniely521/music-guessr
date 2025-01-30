const scoreDisplay = document.getElementById('score');
const answerBox = document.getElementById('answer');
const startbtn = document.getElementById('start-btn');
const replaybtn = document.getElementById('replay-btn');
const submitbtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');

const music = [
    {song: "~/music-guessr/sounds/sound1.mp3", answer: "blinding lights"},
    {song: "~/music-guessr/sounds/sound2.mp3", answer: "a"},
];

let score = 0;
let songindex = 0;
let currentSong;
let currentAns;
let length = 1;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

