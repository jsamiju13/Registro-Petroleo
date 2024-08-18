(function() {
    emailjs.init("SBIZoLsfl2Rc5stzI");
})();

function enviarCorreo() {
    var templateParams = {
        user_email: 'fernando.sierra744@gmail.com',
        message: recuentoSummary.textContent,
    };

    emailjs.send('service_2rx8ijq', 'template_6bbsts6', templateParams)
        .then(function(response) {
            Toast.fire({
                icon: "success",
                title: "Correo enviado correctamente"
            });
        }, function(error) {
            Toast.fire({
                icon: "error",
                title: "ocurrió un error inesperado"
            });
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