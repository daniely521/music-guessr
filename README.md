# Music Guessr

A simple music guessing game built with HTML, CSS, and JavaScript.  Test your music knowledge by guessing the song title after listening to a short audio clip.

## How to Play

1. Click the "Start" button to begin the game.
2. Listen to the short audio clip of the song.
3. Enter the song title in the input box.
4. Click the "Submit" button to check your answer.
5. If you're correct, your score will increase.
6. Click the "Next" button to listen to the next song.
7. The game ends when you've guessed all the songs.
8. Your final score will be displayed at the end.
9. Click the "Start" button to play again, or "return home" to go to the home page (if implemented).

## Technologies Used

* HTML: For structuring the web page.
* CSS: For styling the game elements.
* JavaScript: For game logic, handling user input, and playing audio.

## Setup

1. Clone the repository (if applicable) or download the files.
2. Create a `sounds` directory in the same directory as `index.html`.
3. Place your audio files (in `.mp3` format) in the `sounds` directory.  Make sure the file names match what's in your `music` array in `script.js`.
4. Open `index.html` in your web browser.

## Game Logic (script.js)

The `script.js` file contains the core game logic:

* An array of song objects, each with a `song` (file path) and `answer` (song title).
* Functions to play songs, check answers, update the score, and handle the game flow.
* Event listeners for button clicks and the "Enter" key in the answer box.
* Audio element manipulation to play the song snippets.

## Styling (styles.css)

The `styles.css` file styles the game elements, including layout, colors, fonts, and responsiveness for different screen sizes.

## Audio Files

The game requires audio files in `.mp3` format.  You'll need to provide these yourself and place them in the `sounds` directory.  Make sure the file names in your JavaScript code (`music` array) correspond to the actual file names in the `sounds` directory.


## Future Enhancements 

* Add difficulty levels (e.g., shorter song snippets, more time to answer).
* Display artist or album cover information.
* Implement a more polished user interface.
* Add a "Play Again" button after the game ends.
* Improve accessibility with ARIA attributes.
