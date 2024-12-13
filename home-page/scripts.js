// Função para validar o e-mail 
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Função para validar o nome
function validateName(name) {
    return name.trim() !== '';
}

// Função chamada ao clicar no botão Subscribe
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('subscribe-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;

        let isValid = true;

        // Validar o e-mail
        if (!validateEmail(email)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('email-error').style.display = 'none';
        }

        // Validar o nome
        if (!validateName(name)) {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('name-error').style.display = 'none';
        }

        // armazenar os dados no LocalStorage
        if (isValid) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name);
           alert('Information saved successfully!');
          
        }
    });
});
