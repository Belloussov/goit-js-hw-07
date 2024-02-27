const fieldInput = document.querySelector("#name-input");
const valueOutput = document.querySelector("#name-output");

fieldInput.addEventListener("input", (event) => {
  const eventValue = event.currentTarget.value.trim();
  if (eventValue) {
    valueOutput.textContent = eventValue;
  } else {
    valueOutput.textContent = "Anonymous";
  }
});
