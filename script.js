'use strict';
let roll = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
//current point of two player
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1')
let holdBtn = document.querySelector('.btn--hold')
let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let resetTheGame = document.querySelector('.btn--new')
let playing = true
roll.addEventListener('click', function () {
    // roll the dice
    if (playing) {
        let randomRoll = Math.round(Math.random() * 5 + 1);
        dice.src = `dice-${randomRoll}.png`

        if (randomRoll !== 1) {
            currentScore += randomRoll
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore

        }
        else {
            currentScore = 0;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
            switchPlayer()
        }
    }
})
function switchPlayer() {
    if (activePlayer == 0) {
        currentScore = 0
        activePlayer = 1;
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
    }
    else {
        currentScore = 0
        activePlayer = 0;
        player1.classList.toggle('player--active')
        player0.classList.toggle('player--active')
    }
}
//switch player
holdBtn.addEventListener('click', () => {
    if (playing) {
        //add current score to active player
        scores[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
        //reset the current score
        document.querySelector(`#current--${activePlayer}`).textContent = 0
        //check who get to 50 first
        if (scores[activePlayer] >= 50) {
            dice.classList.add('hidden')
            alert(`player ${activePlayer + 1} is the winner`)
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            playing = false
        }
        //switch player
        else {
            switchPlayer()
        }
    }
})
resetTheGame.addEventListener('click', function () {
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    document.querySelector(`#score--0`).textContent = scores[0]
    document.querySelector(`#score--1`).textContent = scores[1]
})
