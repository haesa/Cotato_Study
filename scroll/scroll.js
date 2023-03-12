'use strict';

const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const pageY = document.documentElement.offsetHeight - window.innerHeight;

function onScroll(event) {
  const currentScroll = window.pageYOffset;
  const scale = (currentScroll + 100) / 100;
  const scrollPercentage = currentScroll / pageY * 100;

  outer.style.transform = `scale(${scale})`;
  inner.style.transform = `scaleY(${scale * 6})`;
  // inner.style.height = `${scrollPercentage}%`;
}
document.addEventListener('scroll', onScroll);

// if(currentScroll > preScroll) {
//   outerScale = (outerScale + outerStep >= 10) ? 10 : outerScale + outerStep;
//   innerScale = (innerScale + innerStep >= 91) ? 91 : innerScale + innerStep;
// } else if(currentScroll < preScroll) {
//   outerScale = (outerScale - outerStep <= 1) ? 1 : outerScale - outerStep;
//   innerScale = (innerScale - innerStep <= 1) ? 1 : innerScale - innerStep;
// }
// outer.style.transform = `scale(${outerScale})`;
// inner.style.transform = `scaleY(${innerScale})`;
// preScroll = currentScroll;