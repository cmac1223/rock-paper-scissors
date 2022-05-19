// create function called computerPlay
// function will randomly return either 'Rock', 'Paper' or 'Scissors'. in console
// create a functin that takes a max num and console.log a random num up to the max num
// only returning whole nums

const Rock = 1;
const Paper = 2;
const Scissors = 3;


let computerPlay = () => {
  let randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    // console.log['ROCK');
    return 'ROCK'
  } else if (randomNumber === 2) {
    // console.log['PAPER')
    return 'PAPER'
  } else if (randomNumber === 3) {
    // console.log['SCISSORS')
    return 'SCISSORS'
  }
}


// create a function that plays a single round or RPS.
// two parameters playerSelection and computerSelection
// returns string that declares the winner of round
// make playerSelection case-insensitive


let playGame = (playerSelection, computerSelection) => {
  computerSelection = computerPlay();
  playerSelection2 = playerSelection.toUpperCase()

  // Case where player select Paper.
  if (playerSelection2 === 'PAPER' && computerSelection === 'PAPER') {
    a = [' Tied!', 0];
    return a;
  }
  if (playerSelection2 === 'PAPER' && computerSelection === 'ROCK') {
    a = [' You Won! Paper beats Rock.', 1];
    return a;
  }
  if (playerSelection2 === 'PAPER' && computerSelection === 'SCISSORS') {
    a = [' You Lose! Scissors beats Paper.', 2];
    return a;
  }


  // Case where player select Rock.
  if (playerSelection2 === 'ROCK' && computerSelection === 'ROCK') {
    a = ['Tied!', 0];
    return a;
  }
  if (playerSelection2 === 'ROCK' && computerSelection === 'PAPER') {
    a = ['You Lose! Paper beats Rock.', 2];
    return a;
  }
  if (playerSelection2 === 'ROCK' && computerSelection === 'SCISSORS') {
    a = ['You Won! Rock beats Scissors.', 1];
    return a;
  }


  // Case where player select Scissors.
  if (playerSelection2 === 'SCISSORS' && computerSelection === 'ROCK') {
    a = ['You Lose! Rock beats Scissors.', 2];
    return a;
  }
  if (playerSelection2 === 'SCISSORS' && computerSelection === 'PAPER') {
    a = ['You Won! Scissors beats Paper.', 1];
    return a;
  }
  if (playerSelection2 === 'SCISSORS' && computerSelection === 'SCISSORS') {
    a = ['Tied!', 0];
    return a;
  }
}

// create a function game that runs playGame 5 times using a loop
// The first goal is to run function i times.
// Create some type of counter variable to keep track of round outcome.

let winnerCounter = 0;
let loserCounter = 0;
let tiedCounter = 0;

let game = (e) => {
  div4.innerText = ''
  
  let playerSelection = e.target.innerText
  playerSelection2 = playerSelection.toUpperCase()

  if (playerSelection2 === 'ROCK' || playerSelection2 === 'PAPER' || playerSelection2 === 'SCISSORS') {
    playGame(playerSelection2)

    if (a[1] === 1) {
      winnerCounter++
      div3.innerText = ` ${a[0]}`
    } else if (a[1] === 2) {
      loserCounter++
      div3.innerText = ` ${a[0]}`
    } else if (a[1] === 0) {
      tiedCounter++
      div3.innerText = ` ${a[0]}`
    }

  } else alert('You must select Rock, Paper, Scissors')

  // sum up all the counters in order to get the total rounds
  const totalRounds = winnerCounter + loserCounter + tiedCounter;

  // totalling up the final score.
  if (winnerCounter === 5) {
    // dynamically insert the results into the popup
    finalTitle.innerText = 'CONGRATULATIONS'
    finalResults.innerText = `Games won ${winnerCounter}, Games lost ${loserCounter}, and Games tied ${tiedCounter} total rounds ${totalRounds}  `
    // runs the toggle function
    toggleModal();

  } else if ((loserCounter === 5)) {
    finalTitle.innerText = 'BETTER LUCK NEXT TIME'
    finalResults.innerText = ` Games lost ${loserCounter}, Games won ${winnerCounter}, and Games tied ${tiedCounter} total rounds ${totalRounds} `
    toggleModal();

  } else if ((tiedCounter)) {
    // endResults.innerText = (`Tied!! you tied ${tiedCounter} times`)
  }

}



// select div (container)
const container = document.querySelector('.container');

// Title div
const div1 = document.createElement('div');
div1.classList.add('header')

// div containing buttons
const div2 = document.createElement('div');
div2.classList.add('buttons');

// div containing 1st content
const div3 = document.createElement('div');
div3.classList.add('content');

// div containing end of game content
const div4 = document.createElement('div');
div4.classList.add('results');

// append the sub divs to the container div
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);

// create header
const header = document.createElement('h1');
// create text for header
header.innerText = 'Rock-Paper-Scissors';
// append header to div1
div1.appendChild(header);


// create a button name rockButton
const rockButton = document.createElement('button');
rockButton.classList.add('optionButton');
// name button 'Rock'
rockButton.innerText = 'Rock';
// append rockButton to container (parent div)
div2.appendChild(rockButton);


// Same thing with paperButton
const paperButton = document.createElement('button');
paperButton.classList.add('optionButton');
paperButton.innerText = 'Paper';
div2.appendChild(paperButton);


// Same thing with scissorsButton
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('optionButton');
scissorsButton.innerText = 'Scissors';
div2.appendChild(scissorsButton);



// addEventListener to multiple buttons with one function
// querySelectorAll for each button loop through and call game function
// e.target.innerText
let buttons = document.querySelectorAll('.optionButton');
buttons.forEach((button) => {
  button.addEventListener('click', game)
})



// popup modal 
const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');
const backdrop = document.getElementById('backdrop')

// function which allows the popup to render
function toggleModal() {
  const modalDiv = document.querySelector('.popup-modal');
  const backdrop = document.querySelector('.backdrop')
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');
}


// reset the page
function reset() {
  window.location.reload();
}

closeButton.addEventListener('click', reset);


