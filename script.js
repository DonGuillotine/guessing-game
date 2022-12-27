'use strict';

// Introduction to DOM Manipulation
// // Selecting the message class
// console.log(document.querySelector('.message').textContent);


// Selecting and Manipulating ELements
// Select Elements
// console.log(document.querySelector('.message').textContent);

// Setting Elements
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

// Handling Click Events

//Generated Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
console.log(secretNumber);

// Set the score to 20
let score = 20;

let highscore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // document.querySelector('.message').textContent = 'Correct NUmber';


// GAME LOGIC
    if(!guess){
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage('No Number');
    }

    // When Guess is Correct
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent = 'Correct Number ! 🥳';
        displayMessage('Correct Number ! 🥳');
        document.querySelector('.number').textContent = secretNumber;

        // Manipulating CSS Styles with Javascript
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        // Calculating the Highscore
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too High! ⚡' : 'Too Low 👇');
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High! ⚡' : 'Too Low 👇';
            // score = score - 1;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost The Game 😭';
            document.querySelector('.score').textContent = 0;
        }
    }

    // // When Guess is too high
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too High! ⚡';
    //         // score = score - 1;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You Lost The Game 😭';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    // // When Guess is too low
    // else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low 👇';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } 
    //     else{
    //         document.querySelector('.message').textContent = 'You Lost The Game 😭';
    //         document.querySelector('.score').textContent = 0;
    //     }  
    // }
});

// Resetting the Game
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 2) + 1;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

// Implementing the Game Logic
