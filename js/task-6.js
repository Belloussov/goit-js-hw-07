const inputElement = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", handleClick);
destroyButton.addEventListener("click", destroyBoxes);

function handleClick() {
  if (inputElement.value >= 1 && inputElement.value <= 100) {
    createBoxes(inputElement.value);
    inputElement.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  let boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  inputElement.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
