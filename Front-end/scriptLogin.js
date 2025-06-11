
function onChangeEmail() {
    toggleButtonsDisabled();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisabled();
    togglePasswordsErrors();
}

//caso o campo de email esteja vazio ou não seja válido retorna uma mensagem.
function toggleEmailErrors() {
    const email = form.email().value;

    //*Usando o operador ternário é uma forma condensada de usar o if else, pois ele retorna o 'none' se a condição for true e 'block' se for false.*
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";


}
// caso o campo de senhas esteja vazio ele retorna uma mensagem informando que o campo precisa ser preenchido.
function togglePasswordsErrors() {

    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block";

}

//desabilita os botões de 'recuperar senha' e o de 'entrar' se os campos de email e senha não estverem preenchidos.
function toggleButtonsDisabled() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();

    form.loginButton().disabled = !emailValid || !passwordValid;

}

// verifica se o email é valido
function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    //passa o valor do email para função que é uma expressão regular e retorna se é valido ou não.
    return validateEmail(email);
}
//verifica se o campo da senha não está vazio.

function isPasswordValid() {
    return form.password().value ? true : false;
}
// expressão regular que verifica se o email é valido.
function validateEmail(email) {
    return /\S+@\S+/.test(email);
}

//função que retorna o valor do input do formulário.
const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
}

