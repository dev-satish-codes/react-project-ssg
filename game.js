
let playerScore = 0;
let computerScore = 0;

window.onload = function() {
  if (localStorage.getItem('playerScore')) {
    playerScore = parseInt(localStorage.getItem('playerScore'));
    computerScore = parseInt(localStorage.getItem('computerScore'));
  }
  updateScore();
}

function updateScore() {
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
}

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  if (result === 'You win!') { 
    playerScore++;
    document.getElementById('celebration').style.display = 'block';
    document.getElementById('celebration').textContent = '🎉 You Win! 🎉';
  } else if (result === 'Computer wins!') {
    computerScore++;
    document.getElementById('celebration').style.display = 'none';
  } else {
    document.getElementById('celebration').style.display = 'none';
  }

  localStorage.setItem('playerScore', playerScore);
  localStorage.setItem('computerScore', computerScore);

  document.getElementById('resultMessage').textContent = result;
  updateScore();
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

document.getElementById('rulesBtn').addEventListener('click', () => {
  document.getElementById('rulesPopup').style.display = 'block';
});

document.getElementById('closeRules').addEventListener('click', () => {
  document.getElementById('rulesPopup').style.display = 'none';
});
