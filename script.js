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
  // debugger;
  computerSelection = computerPlay();
  playerSelection2 = playerSelection.toUpperCase()

  // console.log(playerSelection2]
  // console.log(computerSelection)

  // Case where player select Paper.
  if (playerSelection2 === 'PAPER' && computerSelection === 'PAPER') {
    a = ['Tied!', 0];
    return a;
  }
  if (playerSelection2 === 'PAPER' && computerSelection === 'ROCK') {
    a = ['You Won! Paper beats Rock.', 1];
    return a;
  }
  if (playerSelection2 === 'PAPER' && computerSelection === 'SCISSORS') {
    a = ['You Lose! Scissors beats Paper.', 2];
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

let game = () => {
  for (let i = 1; i <= 3; i++) {
    let playerSelection = prompt('Select Rock, Paper, or Scissors')
    playerSelection2 = playerSelection.toUpperCase()
    if (playerSelection2 === 'ROCK' || playerSelection2 === 'PAPER' || playerSelection2 === 'SCISSORS') {
      playGame(playerSelection2)
      if (a[1] === 1) {
        winnerCounter++
        console.log(`round ${i} ${a[0]}`)
      } else if (a[1] === 2) {
        loserCounter++
        console.log(`round ${i} ${a[0]}`)
      } else if (a[1] === 0) {
        tiedCounter++
        console.log(`round ${i} ${a[0]}`)
      }

    } else alert('You must select Rock, Paper, Scissors')
  }
  // totalling up the final score.
  if (winnerCounter > (loserCounter && tiedCounter)) {
    console.log(`Winner!! you won ${winnerCounter} games, lost ${loserCounter}, and tied ${tiedCounter} out of 3 rounds `)
  } else if ((loserCounter > winnerCounter && tiedCounter)) {
    console.log(`Loser!! you lost ${loserCounter} games, won ${winnerCounter}, and tied ${tiedCounter} out of 3 rounds `)
  } else if ((tiedCounter >= loserCounter && winnerCounter)) {
    console.log(`Tied!! you tied ${tiedCounter} times`)
  }
  winnerCounter = '';
  loserCounter = '';
  tiedCounter = '';
}