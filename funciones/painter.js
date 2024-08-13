let fondo = document.querySelector(".general")
let titulo = document.querySelector(".titulo")
let textoH2 = document.querySelectorAll("h2")
let textoH3 = document.querySelectorAll("h3")
let trabajadores = document.querySelector(".trabajadores")
let tarjetaIcon = document.querySelectorAll(".tarjeta i")
let modo = document.querySelector(".modo")
let icon = document.querySelectorAll("i")
let costo = document.querySelector(".costo")

modo.addEventListener("click", function(){
    if (on == 1){
        on = 0
        
    }else {
        on = 1 
        
    }
    paint()
})



function paint(n){
    
    if (fondo.style.getPropertyValue('--bg-color') === '#F8FAFC'){
        oscuro()
    }else{
        claro()
    }
}

function claro(){
    icon = document.querySelectorAll("i")
    inputes = document.querySelectorAll(".tarjeta input")
    fondo.style.setProperty('--bg-color','#F8FAFC')
    titulo.style.setProperty('--text-color','#0F172A')
    trabajadores.style.setProperty('--bg-color','#FFFFFF')
    trabajadores.style.setProperty('--border-color','#dee1e3')
    costo.style.setProperty('--bg-color','#F8FAFC')
    costo.style.setProperty('--border-color','#dee1e3')
    modo.style.setProperty('--bg-color','#ebf5ff')
    botonAñadir.style.setProperty('--bg-color', '#ebf5ff');

    for (i=0;i<textoH2.length;i++){
        textoH2[i].style.setProperty('--text-color','#0F172A')
    }

    for (i=0;i<textoH3.length;i++){
        textoH3[i].style.setProperty('--text-color','#0F172A')
    }

    for (i=0;i<icon.length;i++){
        icon[i].style.setProperty('--text-color', '#007BFF');
    }

    for (i=0;i<botonGuardar.length;i++){
        botonGuardar[i].style.setProperty('--bg-color', '#ebf5ff');
    }

    for (i=0;i<botonEditar.length;i++){
        botonEditar[i].style.setProperty('--bg-color', '#ebf5ff');
    }

    for (i=0;i<botonEliminar.length;i++){
        botonEliminar[i].style.setProperty('--bg-color', '#ebf5ff');
    }

    for (i=0;i<botonDuplicar.length;i++){
        botonDuplicar[i].style.setProperty('--bg-color', '#ebf5ff');
    }

    for (i=0;i<tarjeta.length;i++){
        tarjeta[i].style.setProperty('--bg-color', '#F8FAFC');
        tarjeta[i].style.setProperty('--border-color','#dee1e3')
    }
    
    

    for (i=0;i<inputes.length;i++){
        inputes[i].style.setProperty('--placeholder-color', "#a2a5a6");
        inputes[i].style.setProperty('--disabled-bg-color', "#ebf5ff");
        inputes[i].style.setProperty('--disabled-border-color', "#ebf5ff");
        inputes[i].style.setProperty('--disabled-text-color', "#a2a5a6");
    }
}

function oscuro(){
    icon = document.querySelectorAll("i")
    inputes = document.querySelectorAll(".tarjeta input")
    fondo.style.setProperty('--bg-color','#0F172A')
    titulo.style.setProperty('--text-color','#FFFFFF')
    trabajadores.style.setProperty('--bg-color','#1E293B')
    trabajadores.style.setProperty('--border-color','#475569')
    costo.style.setProperty('--bg-color','#1E293B')
    costo.style.setProperty('--border-color','#475569')
    modo.style.setProperty('--bg-color','#334155')
    botonAñadir.style.setProperty('--bg-color', '#334155');
    
    for (i=0;i<textoH2.length;i++){
        textoH2[i].style.setProperty('--text-color','#FFFFFF')
    }

    for (i=0;i<textoH3.length;i++){
        textoH3[i].style.setProperty('--text-color','#FFFFFF')
    }

    for (i=0;i<icon.length;i++){
        icon[i].style.setProperty('--text-color', '#FFFFFF');
    }

    for (i=0;i<botonGuardar.length;i++){
        botonGuardar[i].style.setProperty('--bg-color', '#334155');
    }

    for (i=0;i<botonEditar.length;i++){
        botonEditar[i].style.setProperty('--bg-color', '#334155');
    }

    for (i=0;i<botonEliminar.length;i++){
        botonEliminar[i].style.setProperty('--bg-color', '#334155');
    }

    for (i=0;i<botonDuplicar.length;i++){
        botonDuplicar[i].style.setProperty('--bg-color', '#334155');
    }

    for (i=0;i<tarjeta.length;i++){
        tarjeta[i].style.setProperty('--bg-color', '#1E293B');
        tarjeta[i].style.setProperty('--border-color','#475569')
    }
    
    for (i=0;i<inputes.length;i++){
        inputes[i].style.setProperty('--placeholder-color', "#c0c1c2");
        inputes[i].style.setProperty('--disabled-bg-color', "#334155");
        inputes[i].style.setProperty('--disabled-border-color', "#334155");
        inputes[i].style.setProperty('--disabled-text-color', "#c0c1c2");
    }

}

claro()