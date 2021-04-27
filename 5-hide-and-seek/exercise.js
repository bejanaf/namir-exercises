const toggleButton = document.querySelector(".show-hide-button");
const box = document.querySelector(".box");

toggleButton.addEventListener("click", () => {
  box.classList.toggle("box");
});
