console.log('Hello World')

const success = document.querySelector('#success');
const submitButton = document.querySelector('#submitButton');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');
const output3 = document.querySelector('#output3');

const showDialog = () => {
  success.showModal();
  success.style = "transform: translateX(0%);"
  output1.textContent = input1.value;
  output2.textContent = input2.value;
  output3.textContent = input3.value;
  setTimeout(dismissDialog, 2000);
}

const dismissDialog = () => {
  success.style = translations[Math.floor(Math.random() * 4)];
  setTimeout(() => success.close(), 600);
}

const validate = () => {
  if (input1.value || input2.value || input3.value) {
    submitButton.disabled = false;
  }
  else {
    submitButton.disabled = true;
  }
}

const translations = [
  "transform: translateX(200%);",
  "transform: translateX(-200%);",
  "transform: translateY(280%);",
  "transform: translateY(-280%);"
];