const input = document.querySelector('#validation-input');

input.addEventListener('input', event => {
  input.textContent = event.target.value
  if(event.target.value.length < event.target.getAttribute('data-length')) {
    input.setAttribute('class','invalid')
  } else{
    input.setAttribute('class','valid')
  } 
})
