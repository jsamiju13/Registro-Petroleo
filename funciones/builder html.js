let general = document.querySelector(".general")
let trabajadores = document.querySelector(".trabajadores")
let costo = document.querySelector(".costo")
let botonAñadir = document.querySelector(".botonAñadir")
let diessel = document.querySelector(".diessel")
let costoDiessel = document.querySelector(".costoDiessel")
let costoLitro = document.querySelector(".costoLitro")

general.style.setProperty('--grid-rows', '10% 10% min-content 10%');

botonAñadir.style.setProperty('--display-state', 'none');
trabajadores.style.setProperty('--grid-rows', '100% auto min-content')


diessel.style.setProperty('--grid-rows', '100% auto min-content');
costoDiessel.style.setProperty('--display-state', 'none');
costoLitro.style.setProperty('--display-state', 'none');

    function buildTarjeta(contTarjetas){

    const cardContainer = document.querySelector(".tarjetas");

    const card = document.createElement('section');
    card.className = 'tarjeta';

    // Crear botones con imágenes
    
        const buttonD = document.createElement('button');
        buttonD.className = 'botonDuplicar';

            const iButtoD = document.createElement('i');
            iButtoD.className = 'bx bx-duplicate tipoA';
            buttonD.appendChild(iButtoD);

        card.appendChild(buttonD);

        const inputN = document.createElement('input');
        inputN.className = 'inputNombre';
        inputN.type = 'text';
        inputN.placeholder = "Trabajador #"+contTarjetas;
        inputN.disabled = true

        card.appendChild(inputN);

        const buttonED = document.createElement('button');
        buttonED.className = 'botonEditar';

            const iButtoED = document.createElement('i');
            iButtoED.className = 'bx bx-edit-alt tipoA';
            buttonED.appendChild(iButtoED);

        card.appendChild(buttonED);

        const buttonG = document.createElement('button');
        buttonG.className = 'botonGuardar';

            const iButtoG = document.createElement('i');
            iButtoG.className = 'bx bxs-check-circle tipoA';
            buttonG.appendChild(iButtoG);

        card.appendChild(buttonG);

        const inputS = document.createElement('input');
        inputS.className = 'inputSalario';
        inputS.type = 'number';
        inputS.placeholder = "Salario del Trabajador";
        inputS.oninput = function() {
            if (this.value.length > 7) {
                this.value = this.value.slice(0, 7);
            }
            eventoSuma()
        };
        inputS.disabled = true

        card.appendChild(inputS);

        const buttonEL = document.createElement('button');
        buttonEL.className = 'botonEliminar';

            const iButtoEL = document.createElement('i');
            iButtoEL.className = 'bx bxs-user-x tipoA';
            buttonEL.appendChild(iButtoEL);

        card.appendChild(buttonEL);
        cardContainer.appendChild(card);
        
        
}


