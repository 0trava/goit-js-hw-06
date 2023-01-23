// Лічильник складається зі спану і кнопок, 
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const buttonDecr = document.querySelector(`[data-action = "decrement"]`);
const buttonIncr = document.querySelector(`[data-action = "increment"]`);
const value = document.querySelector(`#value`);

const decrValue = () =>{
    counterValue -= 1;
    value.textContent = counterValue;
};

const incrValue = () =>{
    counterValue += 1;
    value.textContent = counterValue;
};


buttonDecr.addEventListener('click', decrValue);
buttonIncr.addEventListener('click', incrValue);


