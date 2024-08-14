let botonSonido =document.querySelector(".botonPlay")
let botones = document.querySelectorAll("button")

let botonAñadir = document.querySelector(".botonAñadir")

let botonGuardar 
let botonEditar 
let botonEliminar
let botonDuplicar

let tarjetas = document.querySelector(".tarjetas")
let tarjeta = document.querySelectorAll(".tarjeta")
var inputNombre = document.querySelectorAll(".inputNombre")
var inputSalario = document.querySelectorAll(".inputSalario")

let botonSumarDiessel = document.querySelector("#sumarDiessel")
let botonRestarDiessel = document.querySelector("#restarDiessel")
let inputDiessel = document.querySelector(".diessel input")
let litrosDiessel = document.querySelectorAll(".costoLitro h3")

let costoPago = document.querySelector(".costo h3")

var on = 1
var sum = 0
let precioLitros = 10
litrosDiessel[0].textContent = "HNL/L: "+ formatNumber(precioLitros) 
let contTarjetas = 0

for (i=0;i<botones.length;i++){
    botones[i].addEventListener("click", function(){
        botonSonido.play()
    });

}

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

function eventoSuma() {
    sum = 0
    for(i=0;i<inputSalario.length;i++){
        sum += Number(inputSalario[i].value) || 0;
        if(sum == 1){
            
            costoPago.textContent = sum+" HNL";
        }else{
            costoPago.textContent = formatNumber(sum)+" HNL";
        }
        
    }
    
}

function formatNumber(num) {
    return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcularDiessel(element){
    
    if (element.value.length > 4) {
        element.value = element.value.slice(0, 4);
    };

    litrosDiessel[1].textContent = "Total: "+ formatNumber(Number(inputDiessel.value)*precioLitros)+" HNL"
    if(litrosDiessel[1].textContent == "Total: "){
        litrosDiessel[1].textContent = "Total: 0 HNL"
    }
}

botonSumarDiessel.addEventListener("click", function(){
    inputDiessel.value = Number(inputDiessel.value) +25
    if (inputDiessel.value > 9999){
        inputDiessel.value = 9999
    }

    calcularDiessel(inputDiessel)
})

botonRestarDiessel.addEventListener("click", function(){
    inputDiessel.value = Number(inputDiessel.value) -25
    if (inputDiessel.value < 0){
        inputDiessel.value = 0
    }
    calcularDiessel(inputDiessel)
})