// script.js

// Exemplo de validação de formulário
document.getElementById('login-form').addEventListener('submit', function(event) {
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault(); // Previne o envio do formulário
    }
});