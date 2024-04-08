const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

window.addEventListener('DOMContentLoaded', (event) => {
    // Select all .input elements and add event listeners
    document.querySelectorAll('.input').forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focus');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.classList.remove('focus');
            }
        });
    });
});