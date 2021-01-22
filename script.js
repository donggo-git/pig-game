'use strict';
let roll = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
let player0Point = 0;
let player1Point = 0
roll.addEventListener('click', function () {
    let randomRoll = Math.round(Math.random() * 5 + 1);
    dice.src = `dice-${randomRoll}.png`

})