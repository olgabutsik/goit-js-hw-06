const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfProducts = document.querySelector("#ingredients")

const container = ingredients.map(
  (ingredient) => {
    const itemLi = document.createElement("li");
    itemLi.classList.add("item");
    itemLi.textContent = `${ingredient}`
    return itemLi;
  }
);

listOfProducts.append(...container)
console.log(container)


 




