const btns = document.querySelector('.btns');
const box = document.querySelector('.box');

btns.addEventListener('click', onChangeColor);

function onChangeColor(event)
{
  const target = event.target;
  const color = target.dataset.color;
  box.style.backgroundColor = color;
}