const button = document.querySelector('.shine-button');
const listItems = document.querySelectorAll('.list__item');

button.addEventListener('click', () => {
  listItems.forEach((item) => (item.style.color = item.innerText));
});
