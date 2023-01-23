// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoriesEL = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEL.length}`);


// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст 
// заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

categoriesEL.forEach(item => {
    console.log (`Category: ${item.firstElementChild.textContent}`);
    console.log (`Elements: ${item.lastElementChild.children.length}`);
});


