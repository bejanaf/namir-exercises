const data = [];

const form = document.querySelector('.super-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const age = form.elements.age.value;
  const married = form.elements.married.checked;
  const hobbies = form.elements.hobbies.value;

  const person = { name, age, married, hobbies };

  data.push(person);

  form.reset();

  console.table(data);
});
