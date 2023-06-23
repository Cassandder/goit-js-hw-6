const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('keydown', event => {
  text.textContent = event.target.value;
  if(text.textContent === ""){
    text.textContent = 'Anonymous'
  }
})