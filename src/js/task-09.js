const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const text = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor())
btn.addEventListener('click', event => {
  // console.log(getRandomHexColor)
  body.style.background = getRandomHexColor();
  text.textContent = getRandomHexColor();
})




