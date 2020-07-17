const computerTag = document.querySelector('#computer');
computerTag.style.background = `url(image/rsp.jpeg) 0 0`;

let computerChoice = 'rock';
const rspCoord = {
    rock: '0',
    scissors: '-250px',
    paper: '-530px'
};

const intervalMaker = () => {
    return setInterval(() => {
        if (computerChoice === 'rock') {
            computerChoice = 'scissors';
        } else if (computerChoice === 'scissors') {
            computerChoice = 'paper';
        } else if (computerChoice === 'paper') {
            computerChoice = 'rock';
        }
        computerTag.style.background = `url(image/rsp.jpeg) ${rspCoord[computerChoice]} 0`;
    }, 50);
};

let intervalId = intervalMaker();

const rockTag = document.querySelector('#rock');
const scissorsTag = document.querySelector('#scissors');
const paperTag = document.querySelector('#paper');

const score = {
    rock: 0,
    scissors: 1,
    paper: -1
};
const clickButton = (myChoice) => () => {
    clearInterval(intervalId);
    const myScore = score[myChoice];
    const computerScore = score[computerChoice];
    const diff = myScore - computerScore;
    const scoreTag = document.querySelector('#score');
    let accScore = Number(scoreTag.textContent);
    if (diff === 2 || diff === -1) {
        accScore += 1;
    } else if (diff === -2 || diff === 1) {
        accScore -= 1;
    }
    scoreTag.textContent = accScore;
    setTimeout(() => {
        intervalId = intervalMaker();
    }, 1000);
};    

rockTag.addEventListener('click', clickButton('rock'));
scissorsTag.addEventListener('click', clickButton('scissors'));
paperTag.addEventListener('click', clickButton('paper'));