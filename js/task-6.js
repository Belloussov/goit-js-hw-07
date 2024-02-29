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
    const feedbackMessage = document.createElement("span");
    feedbackMessage.textContent = "1 - 100!";
    createButton.insertAdjacentElement("afterend", feedbackMessage);
    setTimeout(() => {
      feedbackMessage.remove();
    }, 2000);
  }
}

function createBoxes(amount) {
  destroyBoxes();
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}"></div>`;
    boxesContainer.insertAdjacentHTML("beforeend", newDiv);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
