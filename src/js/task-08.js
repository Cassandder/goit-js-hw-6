const form = document.querySelector('.login-form');
const btn = document.querySelector('button');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {elements} = event.currentTarget;
  const email = elements.email.value;
  const password = elements.password.value;


  if (email === "" || password === "") {
    alert('Все поля должны быть заполнены');
    return;
  }

  const formData = {
    email,
    password,
  }
  console.log(formData);
  form.reset();
})
