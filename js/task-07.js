// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFontSizeControl = document.querySelector("#font-size-control");
const textForChang = document.querySelector("#text");

console.dir(inputFontSizeControl.value);
textForChang.style.fontSize = inputFontSizeControl.value + `px`;


inputFontSizeControl.addEventListener("input", (i) => textForChang.style.fontSize = i.currentTarget.value + `px`);





