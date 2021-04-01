import './styles.css';

const counterElement = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let state = 1;

function _renderCounter() {
  counterElement.textContent = state.toString();
}

addBtn.addEventListener('click', () => {
  state++;
  _renderCounter();
});

subBtn.addEventListener('click', () => {
  state--;
  _renderCounter();
});

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    state++;
    _renderCounter();
  }, 2000);
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

_renderCounter();
