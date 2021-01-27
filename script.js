'use strict';
let roll = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
//current point of two player
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1')
let holdBtn = document.querySelector('.btn--hold')
let player0Point = 0;
let player1Point = 0
let currentScore = 0;
let activePlayer = 0;
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
roll.addEventListener('click', function () {
    // roll the dice
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
holdBtn.addEventListener('click', () => switchPlayer())
