document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Usuario y contraseña "hardcoded"
    const validUsername = "jhane";
    const validPassword = "jhane123";

    // Obtener los valores ingresados
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const messageElement = document.getElementById('message');

    // Validar credenciales
    if (username === validUsername && password === validPassword) {
        messageElement.textContent = "Inicio de sesión exitoso!";
        messageElement.style.color = "green";
        
        // Redirigir a inicio.html después de 1 segundo (opcional)
        setTimeout(function() {
            window.location.href = "inicio.html"; // Cambia esto por la página a la que deseas redirigir
        }, 1000);
    } else {
        messageElement.textContent = "Usuario o contraseña incorrectos.";
        messageElement.style.color = "red";
    }
});
