//grab elements
const h1Total = document.querySelector('h1');
const input = document.querySelector('input');
const add = document.querySelector('#add');
const sub = document.querySelector('#subtract');

//event listeners
add.addEventListener('click', () => {
  h1Total.innerText = parseInt(input.value) + parseInt(h1Total.innerText);
  checkNegative();
})

sub.addEventListener('click', () => {
  h1Total.innerText = parseInt(h1Total.innerText) - parseInt(input.value);
  checkNegative();
})

//turn h1 text red if number is negative
const checkNegative = () => {
  if (isNaN(parseInt(h1Total.innerText))) h1Total.innerText = '0';
  if (parseInt(h1Total.innerText) < 0) h1Total.classList.add('red');
  else h1Total.classList.remove('red');
}