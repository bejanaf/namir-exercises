const box = document.querySelector('.box');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  box.classList.toggle('hidden'); // without the dot!
  button.innerText = button.innerText === 'Hide' ? 'Show' : 'Hide';
});
