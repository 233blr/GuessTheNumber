let name = '';
const number = Math.floor(Math.random()*100);
let guesses = 0;

console.log(`The number is ${number}`);

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handelSubmit);

printMessage('Enter you name');

input.focus();

function handelSubmit(event){
  event.preventDefault();
  processInput(input.value);
  input.value = '';
}

function printMessage(message){
  const li = document.createElement('li');
  li.textContent = message;
  output.appendChild(li);
}

function clearOutput(){
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}

function processInput(input){
if (!input) return;
if (!name) {
  name = input;
  clearOutput();
  printMessage(`${input}, a number from 0 to 100 is conceived. 
  Try to guess it in the least number of attempts. After each try, 
  I will say "little," "a lot," or "true."`);
  return;
}

printMessage(input);
let guess = Number.parseInt(input);
if (Number.isNaN(guess)){
  printMessage('Not a number !');
return;
}

guesses += 1;

if (guess > number) {
  printMessage('A lot, try again');
} else if (guess < number) {
  printMessage('A little, try again');
} else {
  printMessage(`That\'s right, the number is ${number}.`);
  printMessage(`Number of attempts: ${guesses}.`);
  printMessage(`Game Over`);

  prompt.remove();
}
}