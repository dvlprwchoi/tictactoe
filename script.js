const grid11 = document.querySelector('.grid11');
const grid12 = document.querySelector('.grid12');
const grid13 = document.querySelector('.grid13');
const grid21 = document.querySelector('.grid21');
const grid22 = document.querySelector('.grid22');
const grid23 = document.querySelector('.grid23');
const grid31 = document.querySelector('.grid31');
const grid32 = document.querySelector('.grid32');
const grid33 = document.querySelector('.grid33');

const allGameGrids = document.querySelectorAll('.gameGrid');
// console.log(allGameGrids[0].classList[1]);

let isXTurn = true;
let isGameOver = false;

/////////////////////////////////////////
// Mark
/////////////////////////////////////////

const mark = (e) => {
  if (
    isGameOver === true ||
    e.target.classList[2] === 'X' ||
    e.target.classList[2] === 'O'
  ) {
    return;
  } else if (isXTurn) {
    e.target.classList.add('X');
    e.target.innerHTML = 'X';
    winningLogic();
    isXTurn = !isXTurn;
  } else {
    e.target.classList.add('O');
    e.target.innerHTML = 'O';
    winningLogic();
    isXTurn = !isXTurn;
  }
};

for (const grid of allGameGrids) {
  grid.addEventListener('click', mark);
}

/////////////////////////////////////////
// Winning Logic and Function
/////////////////////////////////////////

const winningLogic = () => {
  const grid11Mark = allGameGrids[0].classList[2];
  const grid12Mark = allGameGrids[1].classList[2];
  const grid13Mark = allGameGrids[2].classList[2];
  const grid21Mark = allGameGrids[3].classList[2];
  const grid22Mark = allGameGrids[4].classList[2];
  const grid23Mark = allGameGrids[5].classList[2];
  const grid31Mark = allGameGrids[6].classList[2];
  const grid32Mark = allGameGrids[7].classList[2];
  const grid33Mark = allGameGrids[8].classList[2];

  const winningFunction = (winner) => {
    isGameOver = true;
    let loser = null;
    if (winner === 'O') {
      loser = 'X';
    } else if (winner === 'X') {
      loser = 'O';
    }
    console.log(winner + ' won and ' + loser + ' lost!');
  };

  if (grid11Mark && grid11Mark === grid12Mark && grid11Mark === grid13Mark) {
    allGameGrids[0].classList.add('win');
    allGameGrids[1].classList.add('win');
    allGameGrids[2].classList.add('win');
    winningFunction(grid11Mark);
  } else if (
    grid11Mark &&
    grid11Mark === grid21Mark &&
    grid11Mark === grid31Mark
  ) {
    allGameGrids[0].classList.add('win');
    allGameGrids[3].classList.add('win');
    allGameGrids[6].classList.add('win');
    winningFunction(grid11Mark);
  } else if (
    grid11Mark &&
    grid11Mark === grid22Mark &&
    grid11Mark === grid33Mark
  ) {
    allGameGrids[0].classList.add('win');
    allGameGrids[4].classList.add('win');
    allGameGrids[8].classList.add('win');
    winningFunction(grid11Mark);
  } else if (
    grid12Mark &&
    grid12Mark === grid22Mark &&
    grid12Mark === grid32Mark
  ) {
    allGameGrids[1].classList.add('win');
    allGameGrids[4].classList.add('win');
    allGameGrids[7].classList.add('win');
    winningFunction(grid12Mark);
  } else if (
    grid13Mark &&
    grid13Mark === grid23Mark &&
    grid13Mark === grid33Mark
  ) {
    allGameGrids[2].classList.add('win');
    allGameGrids[5].classList.add('win');
    allGameGrids[8].classList.add('win');
    winningFunction(grid13Mark);
  } else if (
    grid13Mark &&
    grid13Mark === grid22Mark &&
    grid13Mark === grid31Mark
  ) {
    allGameGrids[2].classList.add('win');
    allGameGrids[4].classList.add('win');
    allGameGrids[6].classList.add('win');
    winningFunction(grid13Mark);
  } else if (
    grid21Mark &&
    grid21Mark === grid22Mark &&
    grid21Mark === grid23Mark
  ) {
    allGameGrids[3].classList.add('win');
    allGameGrids[4].classList.add('win');
    allGameGrids[5].classList.add('win');
    winningFunction(grid21Mark);
  } else if (
    grid31Mark &&
    grid31Mark === grid32Mark &&
    grid31Mark === grid33Mark
  ) {
    allGameGrids[6].classList.add('win');
    allGameGrids[7].classList.add('win');
    allGameGrids[8].classList.add('win');
    winningFunction(grid31Mark);
  } else if (
    grid11Mark &&
    grid12Mark &&
    grid13Mark &&
    grid21Mark &&
    grid22Mark &&
    grid23Mark &&
    grid31Mark &&
    grid32Mark &&
    grid33Mark
  ) {
    isGameOver = true;
    console.log('Tied!');
  }
};

/////////////////////////////////////////
// Reset
/////////////////////////////////////////

const resetFunction = () => {
  for (const grid of allGameGrids) {
    grid.classList.remove('X');
    grid.classList.remove('O');
    grid.classList.remove('win');
    grid.innerHTML = '';
    isXTurn = true;
    isGameOver = false;
  }
};

const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetFunction);

/////////////////////////////////////////
// Dark Mode
/////////////////////////////////////////

let isDarkMode = false;

const darkmodeFunction = () => {
  if (!isDarkMode) {
    darkmodeButton.innerHTML = '<p>Light Mode</p>';
    darkmodeButton.classList.add('dark');
    background.classList.add('darkTheme');
    background.classList.remove('lightTheme');
    darkmodeButton.classList.remove('light');
    isDarkMode = !isDarkMode;
  } else {
    darkmodeButton.innerHTML = '<p>Dark Mode</p>';
    darkmodeButton.classList.add('light');
    background.classList.add('lightTheme');
    background.classList.remove('darkTheme');
    darkmodeButton.classList.remove('dark');
    isDarkMode = !isDarkMode;
  }
};

const background = document.querySelector('html');

const darkmodeButton = document.querySelector('.darkmodeButton');
darkmodeButton.addEventListener('click', darkmodeFunction);
