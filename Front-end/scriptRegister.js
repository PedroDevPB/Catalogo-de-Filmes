function onChangeName() {
  toggleErrorMessage('name-required-error', !name.value);
  toggleRegisterButton();
}

function onChangeEmail() {
  toggleErrorMessage('email-required-error', !email.value);
  toggleErrorMessage('email-invalid-error', !isEmailValid(email.value));
  toggleRegisterButton();
}

function onChangePassword() {
  toggleErrorMessage('password-required-error', !password.value);
  toggleErrorMessage('password-too-short-error', password.value.length > 0 && password.value.length < 6);
  validatePasswordMatch();
  toggleRegisterButton();
}

function onChangeConfirmPassword() {
  toggleErrorMessage('confirm-password-required-error', !confirmPassword.value);
  validatePasswordMatch();
  toggleRegisterButton();
}

function validatePasswordMatch() {
  const passwordsMatch = password.value === confirmPassword.value;
  const bothFilled = password.value && confirmPassword.value;
  toggleErrorMessage('passwords-dont-match-error', bothFilled && !passwordsMatch);
}

function toggleErrorMessage(id, show) {
  const element = document.getElementById(id);
  if (show) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function toggleRegisterButton() {
  const formValid =
    name.value &&
    isEmailValid(email.value) &&
    password.value.length >= 6 &&
    confirmPassword.value &&
    password.value === confirmPassword.value;

  registerButton.disabled = !formValid;
}

function isEmailValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Inputs
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const registerButton = document.getElementById('register-button');

// Envio do formulário
document.getElementById('register-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  };

  fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      window.location.href = "login.html";
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro na comunicação com o servidor.');
    });
});
