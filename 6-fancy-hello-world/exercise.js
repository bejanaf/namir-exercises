const inputField = document.querySelector('.controls__input');
const headLiner = document.querySelector('h1');

inputField.addEventListener('change', () => {
  headLiner.innerText = headLiner.innerText + ' ' + inputField.value;
}); //change ändert Text erst nach Eingabe/Enter

//input fügt den jeden tastenschlag, sofort ein

//    inputField.addEventListener('input', () => {
//        headLiner.innerText = 'Hello World ' + inputField.value;
//    });

// Beste Lösung. Text wird nicht zwischen gespeichert!
// inputField.addEventListener('change', () => {
//     headLiner.innerText = inputField.value;
// });
