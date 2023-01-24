// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.getElementById('validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event){
	input.classList = [];
	if(event.target.value.length === 6){
			input.classList.add('valid');
	}else{
			input.classList.add('invalid');
	}
};



