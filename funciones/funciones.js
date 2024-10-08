
let botonSonido =document.querySelector(".botonPlay")
let botones = document.querySelectorAll("button")
let flechas = document.querySelectorAll("article i")

let botonGuardar = document.querySelectorAll(".botonGuardar")
let botonEditar = document.querySelectorAll(".botonEditar")
let botonEliminar = document.querySelectorAll(".botonEliminar")
let botonDuplicar = document.querySelectorAll(".botonDuplicar")

let filas
let trabajadoresH2 = document.querySelector(".trabajadores article")
let diesselH2 = document.querySelector(".diessel article")
let palmaH2 =  document.querySelector(".palma article")
let recuentoH2 = document.querySelector(".recuento article")

let tarjetas = document.querySelector(".tarjetas")
let tarjeta = document.querySelectorAll(".tarjeta")
var inputNombre = document.querySelectorAll(".inputNombre")
var inputSalario = document.querySelectorAll(".inputSalario")

let costoPago = document.querySelector(".costo h3")
let totalPalma = document.querySelector(".palma h3")

let botonSumarDiessel = document.querySelector("#sumarDiessel")
let botonRestarDiessel = document.querySelector("#restarDiessel")
let inputDiessel = document.querySelector(".diessel input")

let botonSumarPalma = document.querySelectorAll(".sumarPalma")
let botonRestarPalma = document.querySelectorAll(".restarPalma")
let inputPalma = document.querySelectorAll(".palma input")

let recuentoItemA = document.querySelectorAll(".recuento .itemA")
let recuentoItemB = document.querySelectorAll(".recuento .itemB")
let enviarCorreoBoton = document.querySelector(".recuento .enviarCorreo")
let tomarCapBoton = document.querySelector(".recuento .tomarCap")

let plegar = document.querySelector(".plegar")
let plegarBotones = document.querySelectorAll(".plegar button")
let saveData = document.querySelector(".saveData")
let resetData = document.querySelector(".resetData")

trabajadoresH2.addEventListener("click", function(){
    if (getComputedStyle(trabajadores).getPropertyValue('--grid-rows').trim() === '100% auto min-content'){

        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[1] = "60%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=0;i<2;i++){
            flechas[i].classList.remove("bx-chevron-up")
            flechas[i].classList.add("bx-chevron-down")
        }

        trabajadores.style.setProperty('--grid-rows', '10% auto min-content')

        setTimeout(() => {
            botonAñadir.style.setProperty('--display-state', 'grid');
        }, 250);
        
    }else{

        
        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[1] = "10%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=0;i<2;i++){
            flechas[i].classList.add("bx-chevron-up")
            flechas[i].classList.remove("bx-chevron-down")
        }

        botonAñadir.style.setProperty('--display-state', 'none');
        trabajadores.style.setProperty('--grid-rows', '100% auto min-content')
    }
})

diesselH2.addEventListener("click", function(){
    if (getComputedStyle(diessel).getPropertyValue('--grid-rows').trim() === '100% auto'){

        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[3] = "35%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=2;i<5;i++){
            flechas[i].classList.remove("bx-chevron-up")
            flechas[i].classList.add("bx-chevron-down")
        }
        flechas[2].classList.remove("bx-chevron-down")
        diessel.style.setProperty('--grid-rows', 'min-content auto')
        setTimeout(() => {
            costoDiessel.style.setProperty('--display-state', 'grid');
        }, 250);
        
    }else{
        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[3] = "10%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=2;i<5;i++){
            flechas[i].classList.add("bx-chevron-up")
            flechas[i].classList.remove("bx-chevron-down")
        }
        flechas[2].classList.remove("bx-chevron-up")
        diessel.style.setProperty('--grid-rows', '100% auto')
            costoDiessel.style.setProperty('--display-state', 'none');
    }
    
    
})

palmaH2.addEventListener("click", function(){
    if (getComputedStyle(palma).getPropertyValue('--grid-rows').trim() === '100% auto auto'){

        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[4] = "40%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=5;i<7;i++){
            flechas[i].classList.remove("bx-chevron-up")
            flechas[i].classList.add("bx-chevron-down")
        }

        palma.style.setProperty('--grid-rows', 'min-content auto')
        setTimeout(() => {
            costoPalma.style.setProperty('--display-state', 'grid');
        }, 250);
        
    }else{
        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[4] = "10%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=5;i<7;i++){
            flechas[i].classList.add("bx-chevron-up")
            flechas[i].classList.remove("bx-chevron-down")
        }
        palma.style.setProperty('--grid-rows', '100% auto auto')
        costoPalma.style.setProperty('--display-state', 'none');
    }
    
    
})

recuentoH2.addEventListener("click", function(){
    if (getComputedStyle(recuento).getPropertyValue('--grid-rows').trim() === '100% auto auto'){

        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[5] = "100%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=7;i<9;i++){
            flechas[i].classList.remove("bx-chevron-up")
            flechas[i].classList.add("bx-chevron-down")
        }

        recuento.style.setProperty('--grid-rows', 'min-content auto')
        recuento.style.setProperty('--margin-bottom', '5%');
        setTimeout(() => {
            recuentoSummary.style.setProperty('--display-state', 'grid');
            recuentoFecha.style.setProperty('--display-state', 'flex');
        }, 250);
        
    }else{
        filas = getComputedStyle(general).gridTemplateRows.split(' ') 
        filas[5] = "10%"
        general.style.gridTemplateRows = filas.join(' ');

        for (i=7;i<9;i++){
            flechas[i].classList.add("bx-chevron-up")
            flechas[i].classList.remove("bx-chevron-down")
        }
        recuento.style.setProperty('--grid-rows', '100% auto auto')
        recuento.style.setProperty('--margin-bottom', '0%');
        recuentoSummary.style.setProperty('--display-state', 'none');
        recuentoFecha.style.setProperty('--display-state', 'none');
    }
    
    
})

plegar.style.setProperty('--width-state', '10vw');
plegar.style.setProperty('--height-state', '4vh');
plegarBotones[0].style.setProperty('--display-state', 'none');
plegar.addEventListener("click", function(){
    
    if(plegar.classList.contains("cerrado")){
        plegar.style.setProperty('--width-state', '20vw');
        plegar.style.setProperty('--height-state', '6vh');
        setTimeout(() => {
            plegarBotones[0].style.setProperty('--display-state', 'auto');
        }, 250);
        plegar.classList.remove("cerrado")
    }else{
        plegar.style.setProperty('--width-state', '10vw');
        plegar.style.setProperty('--height-state', '4vh');
        plegarBotones[0].style.setProperty('--display-state', 'none');
        plegar.classList.add("cerrado")
    }
})

for (i=0;i<botones.length;i++){
    botones[i].addEventListener("click", function(){
        botonSonido.play()
    });
}
var on = 1
eventoEdicion(contTarjetas)  
eventoEliminar(contTarjetas)
eventoDuplicar(contTarjetas)
eventoAparecer(contTarjetas)
contTarjetas += 1

botonAñadir.addEventListener("click", function(){
    eventoAñadir()
})

function eventoAñadir(){
    buildTarjeta(contTarjetas+1)
    tarjeta = document.querySelectorAll(".tarjeta")

    botonGuardar = document.querySelectorAll(".botonGuardar")
    botonEditar = document.querySelectorAll(".botonEditar")
    botonEliminar = document.querySelectorAll(".botonEliminar")
    botonDuplicar = document.querySelectorAll(".botonDuplicar")

    inputNombre = document.querySelectorAll(".inputNombre");
    inputSalario = document.querySelectorAll(".inputSalario")
    
    eventoEdicion(contTarjetas)  
    eventoEliminar(contTarjetas)
    eventoDuplicar(contTarjetas)
    eventoAparecer(contTarjetas)

    if (on == 0){
        oscuro(1)
    }else{
        claro(1)
    }

    contTarjetas += 1
}

function eventoDuplicar(n){
    botonDuplicar[n].addEventListener("click",function(){
        botonSonido.play()
        buildTarjeta(contTarjetas+1)

        tarjeta = document.querySelectorAll(".tarjeta")

        botonGuardar = document.querySelectorAll(".botonGuardar")
        botonEditar = document.querySelectorAll(".botonEditar")
        botonEliminar = document.querySelectorAll(".botonEliminar")
        botonDuplicar = document.querySelectorAll(".botonDuplicar")

        inputNombre = document.querySelectorAll(".inputNombre");
        inputSalario = document.querySelectorAll(".inputSalario")

        eventoEdicion(contTarjetas)  
        eventoEliminar(contTarjetas)
        eventoDuplicar(contTarjetas)
        eventoAparecer(contTarjetas)
        
        inputSalario[contTarjetas].value = inputSalario[n].value
        inputSalario[contTarjetas].addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, ''); // Elimina cualquier carácter que no sea un dígito
            let formattedValue = new Intl.NumberFormat('es-ES').format(value); // Formatea el número
            e.target.value = formattedValue;
        });

        if (on == 0){
            oscuro(1)
        }else{
            claro(1)
        }

        eventoSuma()
        contTarjetas += 1
    })
}

function eventoEdicion(n){

    botonGuardar[n].addEventListener("click", function(){
        botonSonido.play()
        inputNombre[n].disabled = true
        inputSalario[n].disabled = true
        eventoSuma()
    })     

    botonEditar[n].addEventListener("click", function(){
        botonSonido.play()
        inputNombre[n].disabled = false
        inputSalario[n].disabled = false
    })

}

function eventoEliminar(n){
    botonEliminar[n].addEventListener("click", function(){
        botonSonido.play()
        sweet(n)
    })
}

function eventoAparecer(n){
    setTimeout(() => {
        tarjeta[n].classList.add('vista');
    }, 25);
    
}

var sum = 0
let costoPagoNum = 0
let costoPalmaTotal = 0
let costoCamionPalma = 0
let gananciaPalma = 0

function eventoSuma() {

    gananciaPalma = Number(inputPalma[0].value)*Number(inputPalma[2].value)
    costoCamionPalma = Number(inputPalma[2].value)*Number(inputPalma[1].value)
    costoPalmaTotal = Number(inputPalma[2].value)*Number(inputPalma[1].value)
    totalPalma.innerHTML = "<span>" + gananciaPalma.toFixed(2) + " </span> HNL <span>(-" + costoPalmaTotal.toFixed(2) + ")</span>"

    sum = 0
    costoPagoNum = Number(Number(sum) + Number(inputDiessel.value) + Number(costoPalmaTotal))
    costoPago.innerHTML = "<span>" + formatNumber(costoPagoNum) +"</span> HNL";
    for(i=0;i<inputSalario.length;i++){
        sum += Number(inputSalario[i].value) || 0;
        costoPagoNum = Number(+sum + Number(inputDiessel.value) + Number(costoPalmaTotal))
        costoPago.innerHTML = "<span>" + formatNumber(costoPagoNum) +"</span> HNL";
    }

    updateSummary()
}

function formatNumber(num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}


botonSumarDiessel.addEventListener("click", function(){
    inputDiessel.value = Number(inputDiessel.value) +250
    if (inputDiessel.value > 9999){
        inputDiessel.value = 9999
    }

    slice4(inputDiessel)
})

botonRestarDiessel.addEventListener("click", function(){
    inputDiessel.value = Number(inputDiessel.value) -250
    if (inputDiessel.value < 0){
        inputDiessel.value = 0
    }
    slice4(inputDiessel)
})

for (i=0;i<3;i++){
    sumarPalma(i)
    restarPalma(i)
}

function sumarPalma(n) {
    botonSumarPalma[n].addEventListener("click", function(){
        if(n == 0){
            inputPalma[n].value = Number(inputPalma[n].value)+1000
        }else{
            if (n == 1){
                inputPalma[n].value = Number(inputPalma[n].value)+100
            }else{
                inputPalma[n].value = Number(inputPalma[n].value)+3
                slice6(inputPalma[n])
            }
        }

        if(inputPalma[n].value >9999){
            inputPalma[n].value = 9999
        }
        eventoSuma()
    })
}

function restarPalma(n) {
    botonRestarPalma[n].addEventListener("click", function(){
        if(n == 0){
            inputPalma[n].value = Number(inputPalma[n].value)-1000
            
        }else{
            if (n == 1){
                inputPalma[n].value = Number(inputPalma[n].value)-100
            }else{
                inputPalma[n].value = Number(inputPalma[n].value)-3
                slice6(inputPalma[n])
            }
        }
        if(inputPalma[n].value <0){
            inputPalma[n].value = 0
        }
        
        eventoSuma()
    })

}

function slice4(element){
    if (element.value.length > 4) {
        element.value = element.value.slice(0, 4);
    }
    eventoSuma()
}

function slice6(element){
    if (element.value.length > 6) {
        element.value = element.value.slice(0, 6);
    }
    eventoSuma()
}

function updateSummary(){
    
    recuentoItemB[0].innerHTML = "<span>" + sum + " </span> HNL"
    recuentoItemB[1].innerHTML = "<span>" + Number(inputDiessel.value - 0) + " </span> HNL"
    recuentoItemB[2].innerHTML = "<span>" + Number(inputPalma[0].value - 0) + " </span> HNL"
    recuentoItemB[3].innerHTML = "<span>" + Number(inputPalma[1].value - 0) + " </span> HNL"
    recuentoItemB[4].innerHTML = "<span>" + Number(inputPalma[2].value - 0) + " </span> T"
    recuentoItemB[5].innerHTML = "<span>" + Number(costoPalmaTotal - 0) + " </span> HNL"
    recuentoItemB[6].innerHTML = "<span>" + Number(costoPagoNum - 0) + " </span> HNL"
    recuentoItemB[7].innerHTML = "<span>" + Number(gananciaPalma - costoPagoNum) + " </span> HNL"

    if (on == 0){
        oscuro(1)
    }else{
        claro(1)
    }
    guardarDatos()
}

function mostrarFecha() {
    var hoy = new Date();
    var dia = hoy.getDate().toString().padStart(2, '0');
    var mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan desde 0
    var anio = hoy.getFullYear();
    var fechaFormateada = dia + '/' + mes + '/' + anio;
    recuentoFechaH3.textContent = fechaFormateada
}

mostrarFecha()

function guardarDatos(){
    let datoCantTrabajadores  = tarjeta.length
    let datoTrabajadoresNombre = []
    let datoTrabajadoresSalario = []
    for (i=0;i<tarjeta.length;i++){
        
        if (tarjeta[i].classList.contains("eliminada")){
            datoCantTrabajadores -= 1
        }else{
            datoTrabajadoresNombre.push(inputNombre[i].value)
            datoTrabajadoresSalario.push(inputSalario[i].value)
        }
    }

    

    localStorage.setItem('datoCantTrabajadores', datoCantTrabajadores);
    localStorage.setItem('datoTrabajadoresNombre', datoTrabajadoresNombre.join(","));
    localStorage.setItem('datoTrabajadoresSalario', datoTrabajadoresSalario.join(","));

    localStorage.setItem("datoDiessel", inputDiessel.value)

    localStorage.setItem("datoPalmaPrecioT", inputPalma[0].value)
    localStorage.setItem("datoCostoCamionT", inputPalma[1].value)
    localStorage.setItem("datoCantPalmaT",   inputPalma[2].value)
}

function setearDatos(){
    contTarjetas = 0
    tarjetas.innerHTML = ""

    datoCantTrabajadores = localStorage.getItem('datoCantTrabajadores')
    for(i=1;i<Number(datoCantTrabajadores)+1;i++){
    eventoAñadir()
    inputNombre[i-1].value = localStorage.getItem('datoTrabajadoresNombre').split(",")[i-1]
    inputSalario[i-1].value = localStorage.getItem('datoTrabajadoresSalario').split(",")[i-1]
    }

    inputDiessel.value = localStorage.getItem('datoDiessel')

    inputPalma[0].value = localStorage.getItem('datoPalmaPrecioT')
    inputPalma[1].value = localStorage.getItem('datoCostoCamionT')
    inputPalma[2].value = localStorage.getItem('datoCantPalmaT')

    eventoSuma()
}

function retearDatos(){
    contTarjetas = 0
    tarjetas.innerHTML = ""
    eventoAñadir()

    inputDiessel.value = ""
    inputPalma[0].value = ""
    inputPalma[1].value = ""
    inputPalma[2].value = ""
    eventoSuma()
    guardarDatos()
}

resetData.addEventListener("click", function(){
    Toast.fire({
        icon: "info",
        title: "Información Reiniciada con éxito"
    });
    retearDatos()
})

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

function sweet(n){
    Swal.fire({
    title: "Atención",
    text: "Estás seguro? esta acción no se puede deshacer",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    showCloseButton: true
    }).then((result) => {
    if (result.isConfirmed) {
        tarjeta[n].classList.add('oculta');
        tarjeta[n].classList.remove('vista');
        setTimeout(() => {
            tarjeta[n].classList.add('eliminada');
        }, 250);
        inputSalario[n].value = 0
        eventoSuma()
    }
    });
};