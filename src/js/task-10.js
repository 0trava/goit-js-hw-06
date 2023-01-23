function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Hапиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в 
// input і натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову 
// функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const inputNumber = document.querySelector("input");
const boxForDiv = document.querySelector("#boxes")


function createDiv (){
  const divList = [];

  for (let i=1; i <= inputNumber.value; i +=1){
    const addDiv = document.createElement("div");
    addDiv.style.width= 30+(i*10)+`px`;
    addDiv.style.height= 30+(i*10)+`px`;
    addDiv.style.background= getRandomHexColor();
    divList.push(addDiv);
  }

  boxForDiv.append(...divList);
};

function destroyBoxes() {
  boxForDiv.innerHTML = '';
  inputNumber.value = 0;
};


buttonCreate.addEventListener("click", createDiv);
buttonDestroy.addEventListener("click", destroyBoxes);