const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
const ingredientsEL = document.querySelector("ul");
// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredientsList = [];

ingredients.map((item) =>{
  const itemList = document.createElement("li");
  itemList.textContent = item;
  itemList.classList.add("item");
  ingredientsList.push(itemList);

});

ingredientsEL.append(...ingredientsList);



