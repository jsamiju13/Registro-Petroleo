let fondo = document.querySelector(".general")
let titulo = document.querySelector(".titulo")
let textoH2 = document.querySelectorAll("h2")
let textoH3 = document.querySelectorAll("h3")
let tarjetaIcon = document.querySelectorAll(".tarjeta i")
let modo = document.querySelector(".modo")
let icon = document.querySelectorAll("i")
let inputes = document.querySelectorAll("input")
let span = document.querySelectorAll("span")

modo.addEventListener("click", function(){
    if (on == 1){
        on = 0
        
    }else {
        on = 1 
        
    }
    paint(1)
})

function paint(n){
    
    if (fondo.style.getPropertyValue('--bg-color') === '#F8FAFC'){
        oscuro(n)
    }else{
        claro(n)
    }
}


function claro(n){
    botones = document.querySelectorAll("button")
    icon = document.querySelectorAll("i")
    inputes = document.querySelectorAll("input")
    fondo.style.setProperty('--bg-color','#F8FAFC')
    titulo.style.setProperty('--text-color','#0F172A')
    span = document.querySelectorAll("span")

    plegar.style.setProperty('--bg-color','#FFFFFF')
    plegar.style.setProperty('--border-color','#dee1e3')
    plegar.style.setProperty('--box-shadow', "5px 5px 5px rgba(0, 0, 0, 0.3)");

    trabajadores.style.setProperty('--bg-color','#FFFFFF')
    trabajadores.style.setProperty('--border-color','#dee1e3')
    trabajadores.style.setProperty('--box-shadow', "5px 5px 5px rgba(0, 0, 0, 0.3)");

    costo.style.setProperty('--bg-color','#FFFFFF')
    costo.style.setProperty('--border-color','#dee1e3')
    costo.style.setProperty('--box-shadow', "5px 5px 5px rgba(0, 0, 0, 0.3)");

    diessel.style.setProperty('--bg-color','#FFFFFF')
    diessel.style.setProperty('--border-color','#dee1e3')
    diessel.style.setProperty('--box-shadow', "5px 5px 5px rgba(0, 0, 0, 0.3)");

    palma.style.setProperty('--bg-color','#FFFFFF')
    palma.style.setProperty('--border-color','#dee1e3')
    palma.style.setProperty('--box-shadow', "5px 5px 5px rgba(0, 0, 0, 0.3)");

    recuento.style.setProperty('--bg-color','#FFFFFF')
    recuento.style.setProperty('--border-color','#dee1e3')
    recuento.style.setProperty('--box-shadow', "5px 5px 5px rgba(0, 0, 0, 0.3)");

    

    for (i=0;i<textoH2.length;i++){
        textoH2[i].style.setProperty('--text-color','#0F172A')
    }

    for (i=0;i<textoH3.length;i++){
        textoH3[i].style.setProperty('--text-color','#0F172A')
    }

    for (i=0;i<botones.length;i++){
        botones[i].style.setProperty('--bg-color', '#ebf5ff');
        botones[i].style.setProperty('--box-shadow', "4px 4px 4px rgba(0, 0, 0, 0.3)");
    }

    for (i=0;i<icon.length;i++){
        icon[i].style.setProperty('--text-color', '#007BFF');
        
    }

    for (i=0;i<span.length;i++){
        span[i].style.setProperty('--text-color','#ff3341')
        
    }
    span[1].style.setProperty('--text-color','#0cab51')
    span[5].style.setProperty('--text-color','#1a1fad')
    span[7].style.setProperty('--text-color','#1a1fad')
    span[10].style.setProperty('--text-color','#0cab51')

    for (i=0;i<inputes.length;i++){
        inputes[i].style.setProperty('--placeholder-color', "#a2a5a6");
        inputes[i].style.setProperty('--disabled-bg-color', "#ebf5ff");
        inputes[i].style.setProperty('--disabled-border-color', "#ebf5ff");
        inputes[i].style.setProperty('--disabled-text-color', "#a2a5a6");
        inputes[i].style.setProperty('--box-shadow', "4px 4px 4px rgba(0, 0, 0, 0.3)");
    }

    if (n == 1){

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
        tarjeta[i].style.setProperty('--box-shadow', "5px 5px 5px rgba(0, 0, 0, 0.3)");
    }

    }
}

function oscuro(n){
    icon = document.querySelectorAll("i")
    inputes = document.querySelectorAll("input")
    fondo.style.setProperty('--bg-color','#0F172A')
    titulo.style.setProperty('--text-color','#FFFFFF')
    span = document.querySelectorAll("span")

    plegar.style.setProperty('--bg-color','#1E293B')
    plegar.style.setProperty('--border-color','#475569')
    plegar.style.setProperty('--box-shadow', "5px 5px 5px rgba(255, 255, 255, 0.3)");

    trabajadores.style.setProperty('--bg-color','#1E293B')
    trabajadores.style.setProperty('--border-color','#475569')
    trabajadores.style.setProperty('--box-shadow', "5px 5px 5px rgba(255, 255, 255, 0.3)");

    costo.style.setProperty('--bg-color','#1E293B')
    costo.style.setProperty('--border-color','#475569')
    costo.style.setProperty('--box-shadow', "5px 5px 5px rgba(255, 255, 255, 0.3)");

    diessel.style.setProperty('--bg-color','#1E293B')
    diessel.style.setProperty('--border-color','#475569')
    diessel.style.setProperty('--box-shadow', "5px 5px 5px rgba(255, 255, 255, 0.3)");

    palma.style.setProperty('--bg-color','#1E293B')
    palma.style.setProperty('--border-color','#475569')
    palma.style.setProperty('--box-shadow', "5px 5px 5px rgba(255, 255, 255, 0.3)");

    recuento.style.setProperty('--bg-color','#1E293B')
    recuento.style.setProperty('--border-color','#475569')
    recuento.style.setProperty('--box-shadow', "5px 5px 5px rgba(255, 255, 255, 0.3)");

    for (i=0;i<textoH2.length;i++){
        textoH2[i].style.setProperty('--text-color','#FFFFFF')
    }

    for (i=0;i<textoH3.length;i++){
        textoH3[i].style.setProperty('--text-color','#FFFFFF')
    }

    for (i=0;i<botones.length;i++){
        botones[i].style.setProperty('--bg-color', '#334155');
        botones[i].style.setProperty('--box-shadow', "4px 4px 4px rgba(255, 255, 255, 0.3)");
    }

    for (i=0;i<icon.length;i++){
        icon[i].style.setProperty('--text-color', '#FFFFFF');
    }

    for (i=0;i<span.length;i++){
        span[i].style.setProperty('--text-color','#ff3341')
        
    }
    span[1].style.setProperty('--text-color','#0cab51')
    span[5].style.setProperty('--text-color','#007BFF')
    span[7].style.setProperty('--text-color','#007BFF')
    span[10].style.setProperty('--text-color','#0cab51')

    for (i=0;i<inputes.length;i++){
        inputes[i].style.setProperty('--placeholder-color', "#c0c1c2");
        inputes[i].style.setProperty('--disabled-bg-color', "#334155");
        inputes[i].style.setProperty('--disabled-border-color', "#334155");
        inputes[i].style.setProperty('--disabled-text-color', "#c0c1c2");
        inputes[i].style.setProperty('--box-shadow', "4px 4px 4px rgba(255, 255, 255, 0.3)");
    }

    if (n == 1){

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
        tarjeta[i].style.setProperty('--box-shadow', "5px 5px 5px rgba(255, 255, 255, 0.3)");
    }
}
}

paint(0)