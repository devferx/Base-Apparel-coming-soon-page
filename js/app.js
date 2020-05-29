const $form = document.querySelector("form");
const $emailInput = document.getElementById("email-input");
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const $alertIcon = document.getElementById("alert-icon");
const $labelError = document.querySelector(".main-section--label");

const verifyEmail = (email) => emailRegex.test(email.trim());

function sendError() {
  $emailInput.classList.add("error-input");
  $labelError.classList.add("label-active");
  $alertIcon.classList.add("alert-active");
}

function sendSuccessMessage() {
  $emailInput.classList.remove("error-input");
  $labelError.classList.remove("label-active");
  $alertIcon.classList.remove("alert-active");
  alert("Subscrito Correctamente");
}

$form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  verifyEmail($emailInput.value)
    ? sendSuccessMessage()
    : sendError();
  $emailInput.value = "";
});
