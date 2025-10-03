function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputField = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function onCreateButtonClick() {
  const amount = Number.parseInt(inputField.value);
  if (!amount || amount < 1 || amount > 100) return;
  destroyBoxes();
  createBoxes(amount);
  inputField.value = '';
}

function onDestroyButtonClick() {
  destroyBoxes();
}

createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick);

const createBoxes = amount => {
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    boxesArray.push(document.createElement('div'));
    boxesArray[i].style.width = i * 10 + 30 + 'px';
    boxesArray[i].style.height = i * 10 + 30 + 'px';
    boxesArray[i].style.backgroundColor = getRandomHexColor();
  }
  boxesDiv.append(...boxesArray);
};

const destroyBoxes = () => (boxesDiv.innerHTML = '');
