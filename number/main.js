const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const numberText = document.querySelector('.number');

let num = 0;
minusBtn.addEventListener('click', () => {
  num = (num - 1 < 0) ? 0 : num - 1;
  numberText.innerHTML = num;
});

plusBtn.addEventListener('click', () => {
  num++;
  numberText.innerHTML = num;
});