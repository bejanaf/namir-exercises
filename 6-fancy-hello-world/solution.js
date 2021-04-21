const inputField = document.querySelector('.controls__input');
const headline = document.querySelector('h1.header__text');

inputField.addEventListener('change', () => {
  const inputValue = inputField.value;
  headline.innerText = `Hello World ${inputValue}`;
});
