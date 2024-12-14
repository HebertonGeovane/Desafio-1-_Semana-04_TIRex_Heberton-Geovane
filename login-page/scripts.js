// Função para validar o e-mail
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Função para validar a senha
function validatePassword(password) {
    return password.trim() !== '';
}

// Função chamada ao clicar no botão Login
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        let isValid = true;

        // Validar o e-mail
        if (!validateEmail(email)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('email-error').style.display = 'none';
        }

        // Validar a senha
        if (!validatePassword(password)) {
            document.getElementById('password-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('password-error').style.display = 'none';
        }

        // Redirecionar Kanban-page
        if (isValid) {
            
            window.location.href = "../kanban-page/index.html"; 
        }
    });
});

