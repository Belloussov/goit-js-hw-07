const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputEmail = form.elements.email;
  const inputPassword = form.elements.password;

  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const elements = event.currentTarget.elements;

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(info);

  event.currentTarget.reset();
}
