const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const userName = $("#enter-username");
const password = $("#enter-password");
const form = $("form");

/// show message error
function showError(input, message) {
  const parent = input.parentElement;
  const small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}
showError(userName, "");

/// show succses
function showSuccses(input) {
  const parent = input.parentElement;
  const small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

/// check value của input
function checkEmptyError(listInput) {
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      showError(input, "Không được để trống");
    } else {
      showSuccses(input);
    }
  });
}

/// xử lý khi submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkEmptyError([userName, password]);
});
