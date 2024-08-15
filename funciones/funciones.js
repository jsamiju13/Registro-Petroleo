
let botonSonido =document.querySelector(".botonPlay")
let botones = document.querySelectorAll("button")
let flechas = document.querySelectorAll("article i")

let botonGuardar 
let botonEditar 
let botonEliminar
let botonDuplicar

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

for (i=0;i<botones.length;i++){
    botones[i].addEventListener("click", function(){
        botonSonido.play()
    });
}
var on = 1
let contTarjetas = 0

botonAñadir.addEventListener("click", function(){
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
})

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
        tarjeta[n].classList.add('oculta');
        tarjeta[n].classList.remove('vista');
        setTimeout(() => {
            tarjeta[n].classList.add('eliminada');
            console.log("quedan ",contTarjetas," tarjetas", " y ", n)
        }, 500);
        inputSalario[n].value = 0
        eventoSuma()
    })
}

function eventoAparecer(n){
    setTimeout(() => {
        tarjeta[n].classList.add('vista');
    }, 25);
    
}

var sum = 0
let costoPagoNum = 0

function eventoSuma() {
    sum = 0
    costoPagoNum = Number(+sum + Number(inputDiessel.value) + Number(costoPalmaTotal))
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

function calcularDiessel(element){
    
    if (element.value.length > 4) {
        element.value = element.value.slice(0, 4);
    };
    eventoSuma()
}

botonSumarDiessel.addEventListener("click", function(){
    inputDiessel.value = Number(inputDiessel.value) +250
    if (inputDiessel.value > 9999){
        inputDiessel.value = 9999
    }

    calcularDiessel(inputDiessel)
})

botonRestarDiessel.addEventListener("click", function(){
    inputDiessel.value = Number(inputDiessel.value) -250
    if (inputDiessel.value < 0){
        inputDiessel.value = 0
    }
    calcularDiessel(inputDiessel)
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
            }
        }

        if(inputPalma[n].value >9999){
            inputPalma[n].value = 9999
        }
        calcularPalma()
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
            }
        }
        if(inputPalma[n].value <0){
            inputPalma[n].value = 0
        }
        calcularPalma()
    })

}

function slice4(element){
    if (element.value.length > 4) {
        element.value = element.value.slice(0, 4);
    }
}

let costoPalmaTotal = 0
let costoCamionPalma = 0
let gananciaPalma = 0


function calcularPalma(){
    gananciaPalma = Number(inputPalma[0].value)*Number(inputPalma[2].value)
    costoCamionPalma = Number(inputPalma[2].value)*Number(inputPalma[1].value)
    costoPalmaTotal = Number(inputPalma[2].value)*Number(inputPalma[1].value)
    totalPalma.innerHTML = "<span>" + gananciaPalma + " </span> HNL <span>(-" + costoPalmaTotal + ")</span>"
    eventoSuma()
}

function updateSummary(){
    console.log(costoPagoNum)
    recuentoItemB[0].innerHTML = "<span>" + sum+ " </span> HNL"
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
