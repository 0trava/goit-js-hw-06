function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
const body = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
const spanForChange = document.querySelector ("span");
 
function changeColor () {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
	spanForChange.textContent = color;
}

buttonChangeColor.addEventListener('click', changeColor);
