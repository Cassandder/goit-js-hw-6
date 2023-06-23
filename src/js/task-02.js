const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('ul')

const ingrArr = ingredients.map(item => {
  const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('item');
    return li;
})

ul.append(...ingrArr)