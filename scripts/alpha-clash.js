// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden');

// }

function handleKeyboardUpEvent(event) {
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed)
    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // console.log('player pressed', playerPressed);


    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase()
    // console.log(playerPressed, expectedAlphabet);

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);


        //-------------------------------------
        //     // console.log('you get a point');
        //     // console.log('you have pressed correctly', expectedAlphabet)
        //     // update a score
        //     // 1. get the current score
        //     const currentScoreElemlent = document.getElementById('current-score');
        //     const currentScoreText = currentScoreElemlent.innerText;
        //     const currentScore = parseInt(currentScoreText);

        //     // 2. increase the score by 1
        // const newScore = currentScore + 1;
        //     // 3. show the updated score
        //     currentScoreElemlent.innerText = newScore;


        // srart a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            // console.log('Game is over');
            gameOver();
        }

        // -----------------------------------
        // console.log('you missed. you lost a life')
        // // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;
        // // step-3: display the update life count
        // currentLifeElement.innerText = newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardUpEvent)


// document.addEventListener('keyup', function(event){
//     console.log(event.key);
// })


function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('alphabet is', alphabet)

    // set random generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function play() {
    // hide everythinge show only the playgound
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}


function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet heighlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}