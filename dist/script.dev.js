"use strict";

// script.js
// Exemplo de validação de formulário
document.getElementById('login-form').addEventListener('submit', function (event) {
  var email = document.querySelector('input[name="email"]').value;
  var password = document.querySelector('input[name="password"]').value;

  if (!email || !password) {
    alert("Por favor, preencha todos os campos.");
    event.preventDefault(); // Previne o envio do formulário
  }
});
//# sourceMappingURL=script.dev.js.map
