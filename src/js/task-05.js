// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const outPutEl = document.querySelector("#name-output");

const inputText = (text) => 
    (text.currentTarget.value === '') ?
    outPutEl.textContent = 'Anonymous':
    outPutEl.textContent = text.currentTarget.value;


inputEl.addEventListener("input", inputText );