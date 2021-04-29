const toggleButton = document.querySelector('.show-hide-button');
const box = document.querySelector('.box');

toggleButton.addEventListener('click', () => {
  box.classList.toggle('hidden');
  if (box.classList.contains('hidden')) {
    toggleButton.innerText = 'Hidden';
  } else {
    toggleButton.innerText = 'Show';
  }
});

// <div class="box"></div>
// <div class="controls">
//  <button class="show-hide-button">Hide</button>
