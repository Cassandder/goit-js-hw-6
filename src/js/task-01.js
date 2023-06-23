const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`)

categories.forEach(item => {
  const titleCategories = item.querySelector('h2');
const elementsCategory = item.querySelectorAll('li')
  console.log(`Category: ${titleCategories.textContent} 
  Elements: ${elementsCategory.length}`)
})