const ulCategoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${ulCategoriesList.length}`);

ulCategoriesList.forEach(ulCategoriesItem => {
  console.log(`Category: ${ulCategoriesItem.childNodes[1].textContent}`);
  console.log(`Elements: ${ulCategoriesItem.childNodes[3].children.length}`);
});
