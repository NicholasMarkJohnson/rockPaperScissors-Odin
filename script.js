"use strict";

// scores
let computerScore = 0
let playerScore = 0

// Options
const options = ['rock', 'paper', 'scissors']

// computer choice
function getComputerChoice(){
  const computerChoice = options[Math.floor(Math.random() * options.length)]
  return computerChoice
}


// player choice
function getHumanChoice(){
  let validatedInput = false
  while(validatedInput === false){
   const humanChoice = prompt("pick one of the following options: rock, paper or scissors")
   if(humanChoice === null){
     continue
   }
    const choiceInLower = humanChoice.toLowerCase()
    if(options.includes(choiceInLower)){
      validatedInput = true
      return choiceInLower
    }
  }
}


// check winner
function checkWinner(computerChoice, humanChoice){
  if(computerChoice === humanChoice){
    return 'draw'
  } 
  else if(computerChoice === 'rock' && humanChoice === 'scissors' || 
          computerChoice === 'paper' && humanChoice === 'rock' || 
          computerChoice === 'scissors' && humanChoice === 'paper'){
    return 'computer'
  }
  else {
    return 'player'
  }
}

// play game
function playGame(){
  console.log('lets play')
  for(let i = 0; i < 5; i++){
    console.log(`Round ${i + 1}`)
    const playerSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    console.log(playRound(computerSelection, playerSelection))
    
    if(checkWinner(computerSelection, playerSelection) === 'player'){
      playerScore++
    }
    else if(checkWinner(computerSelection, playerSelection) === 'computer'){
      computerScore++
    }
  }
  console.log('Game Over!')
  if(playerScore > computerScore){
    console.log(`player wins the game ${playerScore} v ${computerScore}`)
  }
  else if(computerScore > playerScore){
    console.log(`computer wins the game ${computerScore} v ${playerScore}`)
  }
  else {
    console.log('the game is a draw')            
  }
}

// play round
function playRound(computerChoice, humanChoice){
  const result = checkWinner(computerChoice, humanChoice)
  if(result === 'draw'){
    return `it's a draw, player chose ${humanChoice} and the computer chose ${computerChoice}`
  }
  else if(result === 'player'){
    return `player wins! player chose ${humanChoice} and the computer chose ${computerChoice}`
  }
  else{
    return `computer wins! computer chose ${computerChoice} and the player chose ${humanChoice}`
  }
}


playGame()