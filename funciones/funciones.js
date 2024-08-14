
let botonSonido =document.querySelector(".botonPlay")
let botones = document.querySelectorAll("button")
let flechas = document.querySelectorAll("article i")

let botonGuardar 
let botonEditar 
let botonEliminar
let botonDuplicar

let trabajadoresH2 = document.querySelector(".trabajadores article")
let filas
let diesselH2 = document.querySelector(".diessel article")

let tarjetas = document.querySelector(".tarjetas")
let tarjeta = document.querySelectorAll(".tarjeta")
var inputNombre = document.querySelectorAll(".inputNombre")
var inputSalario = document.querySelectorAll(".inputSalario")

let costoPago = document.querySelector(".costo h3")

let botonSumarDiessel = document.querySelector("#sumarDiessel")
let botonRestarDiessel = document.querySelector("#restarDiessel")
let inputDiessel = document.querySelector(".diessel input")

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
        oscuro()
    }else{
        claro()
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
            oscuro()
        }else{
            claro()
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

function eventoSuma() {
    sum = 0
    costoPago.textContent = formatNumber(+sum + Number(inputDiessel.value))+" HNL"
    for(i=0;i<inputSalario.length;i++){
        sum += Number(inputSalario[i].value) || 0;
        costoPago.textContent = formatNumber(+sum + Number(inputDiessel.value))+" HNL";
    }
    
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