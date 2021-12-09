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

const mark = (e) => {
  if (e.target.classList[2] === 'markX' || e.target.classList[2] === 'markO') {
    return;
  } else if (isXTurn) {
    e.target.classList.add('markX');
    e.target.innerHTML = 'X';
    isXTurn = !isXTurn;
  } else {
    e.target.classList.add('markO');
    e.target.innerHTML = 'O';
    isXTurn = !isXTurn;
  }
};

for (const grid of allGameGrids) {
  grid.addEventListener('click', mark);
}

const resetFunction = () => {
  for (const grid of allGameGrids) {
    grid.classList.remove('markX');
    grid.classList.remove('markO');
    grid.innerHTML = '';
    isXTurn = true;
  }
};

const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetFunction);

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
