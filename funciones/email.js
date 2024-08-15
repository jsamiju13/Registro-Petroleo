(function() {
    emailjs.init("SBIZoLsfl2Rc5stzI");
})();

function capturar() {
    html2canvas(document.querySelector('.recuento'), { scale: 0.8 }).then(canvas => {
        var imgData = canvas.toDataURL('image/png');
        enviarCorreo(imgData);
    });
}

function enviarCorreo(imgData) {
    var templateParams = {
        user_email: 'jsamiju13@gmail.com',
        message: 'Aquí está tu imagen capturada',
        attachment: imgData
    };

    emailjs.send('service_2rx8ijq', 'template_6bbsts6', templateParams)
        .then(function(response) {
            alert('Correo enviado!', response.status, response.text);
        }, function(error) {
            alert('Error al enviar el correo:', error);
        });
}



enviarCorreoBoton.addEventListener('click', capturar);