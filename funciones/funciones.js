
let botonAñadir = document.querySelector(".botonAñadir")

let botonGuardar 
let botonEditar 
let botonEliminar
let botonDuplicar

let tarjetas = document.querySelector(".tarjetas")
let tarjeta = document.querySelectorAll(".tarjeta")
var inputNombre = document.querySelectorAll(".inputNombre")
var inputSalario = document.querySelectorAll(".inputSalario")


let contTarjetas = 0
botonAñadir.addEventListener("click", function(){
    buildTarjeta()

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
    contTarjetas += 1
})



function eventoEdicion(n){

    botonGuardar[n].addEventListener("click", function(){
        inputNombre[n].disabled = true
        inputSalario[n].disabled = true
    })     

    botonEditar[n].addEventListener("click", function(){
        inputNombre[n].disabled = false
        inputSalario[n].disabled = false
    })

}

function eventoEliminar(n){
    botonEliminar[n].addEventListener("click", function(){
        tarjeta[n].classList.add('oculta');
        setTimeout(() => {
            tarjetas.removeChild(tarjeta[n]);
            contTarjetas -=1
            console.log("quedan ",contTarjetas," tarjetas")
        }, 500);
    })
}

function eventoDuplicar(n){
    botonDuplicar[n].addEventListener("click",function(){
        buildTarjeta()

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

        inputNombre[n+1].value = inputNombre[n].value
        inputSalario[n+1].value = inputSalario[n].value
        contTarjetas += 1
    })
}

let modo = document.querySelector(".modo")


modo.addEventListener("click", function(){
    
})


/*

inputNombre[i-1].value = "hola"
        
        inputSalario[i-1].value = "123"
            
*/