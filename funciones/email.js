(function() {
    emailjs.init("SBIZoLsfl2Rc5stzI");
})();

function enviarCorreo() {
    var templateParams = {
        user_email: 'jsamiju13@gmail.com',
        message: recuentoSummary.textContent,
    };

    emailjs.send('service_2rx8ijq', 'template_6bbsts6', templateParams)
        .then(function(response) {
            alert('Correo enviado!', response.status, response.text);
        }, function(error) {
            alert('Error al enviar el correo:', error);
        });
}

function capturar() {
    html2canvas(document.querySelector('.recuento')).then(canvas => {
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = imgData;
        link.download = 'recuento.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
tomarCapBoton.addEventListener('click', capturar);

enviarCorreoBoton.addEventListener('click', enviarCorreo);