document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    fetch("users.json")
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar o JSON");
            return response.json();
        })
        .then(users => {
            const userFound = users.find(
                user => user.email === emailInput && user.password === passwordInput
            );

            if (userFound) {
                window.location.href = "index.html";
            } else {
                alert("Usuário ou senha inválidos.");
            }
        })
        .catch(error => {
            console.error("Erro ao verificar o login:", error);
            alert("Erro interno. Tente novamente mais tarde.");
        });

});