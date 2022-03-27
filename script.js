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
    // console.log('ROCK');
    return 'ROCK'
  } else if (randomNumber === 2) {
    // console.log('PAPER')
    return 'PAPER'
  } else if (randomNumber === 3) {
    // console.log('SCISSORS')
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

  // console.log(playerSelection2)
  // console.log(computerSelection)

  // Case where player select Paper.
  if (playerSelection2 === 'PAPER' && computerSelection === 'PAPER') {
    console.log('Tied! please go again.')
  }
  if (playerSelection2 === 'PAPER' && computerSelection === 'ROCK') {
    console.log('You Won! Paper beats Rock.')
  }
  if (playerSelection2 === 'PAPER' && computerSelection === 'SCISSORS') {
    console.log('You Lose! Scissors beats Paper.')
  }


  // Case where player select Rock.
  if (playerSelection2 === 'ROCK' && computerSelection === 'ROCK') {
    console.log('Tied! please go again.')
  }
  if (playerSelection2 === 'ROCK' && computerSelection === 'PAPER') {
    console.log('You Lose! Paper beats Rock.')
  }
  if (playerSelection2 === 'ROCK' && computerSelection === 'SCISSORS') {
    console.log('You Won! Rock beats Scissors.')
  }


  // Case where player select Scissors.
  if (playerSelection2 === 'SCISSORS' && computerSelection === 'ROCK') {
    console.log('You Lose! Rock beats Scissors.')
  }
  if (playerSelection2 === 'SCISSORS' && computerSelection === 'PAPER') {
    console.log('You Won! Scissors beats Paper.')
  }
  if (playerSelection2 === 'SCISSORS' && computerSelection === 'SCISSORS') {
    console.log('Tied! please go again.')
  }


  

}