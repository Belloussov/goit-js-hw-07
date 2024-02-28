const bodyElement = document.querySelector("body");
const btn = document.querySelector(".change-color");
const spanElement = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = function changeColor() {
  let randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
  return;
};

btn.addEventListener("click", handleClick);
