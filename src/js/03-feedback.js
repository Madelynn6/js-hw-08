import _ from 'lodash'
const form = document.querySelector(".feedback-form");
const email = form.querySelector('label > input');
const message = form.querySelector('label > textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";


form.addEventListener("input", _.throttle(()=>{
    let storedInput = {
        email: email.value,
        message: message.value,
      };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storedInput));
},500));

let storedOutput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
    email.value = '';
  message.value = '';
} else {
    email.value = storedOutput.email;
    message.value = storedOutput.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});