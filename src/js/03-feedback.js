import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

const LOCAL_STORAGE_KEY = "feedback-form-state";
const {email, message} = form.elements;

function onInput(evt) {
    const obj = {
        email: email.value.trim(),
        message: message.value.trim()
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
}
pageReload();

function onSubmit (evt) {
  evt.preventDefault();
  if (email.value === "" || message.value === "") {
       return alert("Заповніть всі поля форми!")
    }
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  console.log(savedData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
}

function pageReload () {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedData) {
      email.value = savedData.email || "";
      message.value = savedData.message || "";
    }
}