document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
 
    // Validar nombre
    const name = document.getElementById('name').value;
    if (name.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        valid = false;
    }
 
    // Validar correo electrónico
    const email = document.getElementById('email').value;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        valid = false;
    }
 
    // Validar teléfono
    const phone = document.getElementById('phone').value;
    if (!phonePattern.test(phone)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        valid = false;
    }
 
    // Validar mensaje
    const message = document.getElementById('message').value;
    if (message.trim() === "") {
        alert("Por favor, ingresa tu mensaje.");
        valid = false;
    }
 
    if (valid) {
        // Si todo es válido, mostramos la alerta de éxito
        alert("¡Formulario enviado exitosamente! Espere una respuesta en los próximos días.");
 
    } else
        // Si no es válido, prevenimos el envío
        event.preventDefault();
   
});