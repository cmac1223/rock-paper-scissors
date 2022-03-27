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
    console.log('Rock');
  } else if (randomNumber === 2) {
    console.log('Paper')
  } else if (randomNumber === 3) {
    console.log('Scissors')
  }
}


// create a function that plays a single round or RPS.
// two parameters playerSelection and computerSelection
// returns string that declares the winner of round
// make playerSelection case-insensitive