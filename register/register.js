const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const userName = $("#username");
const email = $("#email");
const password = $("#password");
const confirmPassword = $("#confirm-password");
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

// check length
function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} ký tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Không được vượt quá ${max} ký tự`);
    return true;
  }
  return false;
}

// check 2 mật khẩu trùng nhau
function checkMathPassword(passwordInput, confirmPasswordInput) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPassword, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}

/// xử lý khi submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isEmptyError = checkEmptyError([
    userName,
    email,
    password,
    confirmPassword,
  ]);
  const isUsernameLengthError = checkLengthError(userName, 6, 15);
  const isPasswordLengthError = checkLengthError(password, 6, 12);
  const isCheckMathPassword = checkMathPassword(password, confirmPassword);

  if (
    isEmptyError ||
    isUsernameLengthError ||
    isPasswordLengthError ||
    isCheckMathPassword
  ) {
    // do nothing
  } else {
    // call api,...
  }
});
