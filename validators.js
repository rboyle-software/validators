console.log('Hello World')

const success = document.querySelector('#success');
const submitButton = document.querySelector('#submitButton');
const dismissButton = document.querySelector('#dismissButton');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');
const output3 = document.querySelector('#output3');
let randomTranslation = Math.floor(Math.random() * 4);

success.style = 'transform: translateX(-120vw)';
submitButton.addEventListener('click', () => showDialog());
dismissButton.addEventListener('click', () => dismissDialog());
input1.addEventListener('input', () => validate());
input2.addEventListener('input', () => validate());
input3.addEventListener('input', () => validate());

const showDialog = () => {
  success.showModal();
  success.classList.add('show');
  success.classList.remove('hide');
  console.log(randomTranslation);
  success.style = 'transform: translate(0px, 0px)';
  output1.textContent = input1.value;
  output2.textContent = input2.value;
  output3.textContent = input3.value;
  // setTimeout(dismissDialog, 2500);
}

const dismissDialog = () => {
  const random = Math.floor(Math.random() * 4);
  randomTranslation = random;
  success.style = translations[random];
  success.classList.remove('show');
  success.addEventListener('webkitAnimationEnd', removeEvent)
  success.classList.add('hide');
}

const removeEvent = () => {
  success.removeEventListener('webkitAnimationEnd', removeEvent);
  success.close();
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
  "transform: translateX(120vw);",
  "transform: translateX(-120vw);",
  "transform: translateY(120vh);",
  "transform: translateY(-120vh);"
];
