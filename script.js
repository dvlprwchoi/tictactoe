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

const resetFunction = () => {
  for (const grid of allGameGrids) {
    grid.classList.remove('markX');
    grid.classList.remove('markO');
    grid.innerHTML = '';
    isXTurn = true;
  }
};

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetFunction);

for (const grid of allGameGrids) {
  grid.addEventListener('click', mark);
}
