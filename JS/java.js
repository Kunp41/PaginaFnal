const perfiles = [];

const formulario = document.getElementById("formulario-perfil")
const mensaje  = document.getElementById("mensaje")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
   
    
    const nombre = document.getElementById("nombre").value;
    const interes = document.getElementById("interes").value;
    const correo = document.getElementById("correo").value;

    mensaje.textContent = `Bienvenido/a, ${nombre}! Tu correo es ${correo} y buscaremos oportunidades en ${interes}.`;

    const perfil = {
        nombre: nombre,
        correo: correo,
        interes: interes
    };

    perfiles.push(perfil);

    console.log(perfiles);

    alert("¡Perfil creado correctamente!");

});

const botonesOferta = document.querySelectorAll(".btn-oferta")

botonesOferta.forEach(function(boton) {

    boton.addEventListener("click", function() {

        botonesOferta.forEach(function(otroBoton) {

            otroBoton !== boton

            if (otroBoton !== boton) {

                const otraOferta = otroBoton.parentElement;

                const otrosDetalles = otraOferta.querySelector(".detalles-oferta")

                otrosDetalles.classList.remove("mostrar")

                otroBoton.textContent = "Ver oferta";

            }

        });

        const oferta = boton.parentElement;

        const detalles = oferta.querySelector(".detalles-oferta");

        detalles.classList.toggle("mostrar") 

        if (detalles.classList.contains("mostrar")) {
            boton.textContent = "Ocultar oferta";
        } else {
            boton.textContent = "Ver oferta";
        }

    });

});


const contenedorOfertas = document.querySelector(".contenedor-ofertas")

const flechaDerecha = document.querySelector(".derecha");
const flechaIzquierda= document.querySelector(".izquierda")

flechaDerecha.addEventListener("click", function () {

    contenedorOfertas.scrollLeft += 330;

});

flechaIzquierda.addEventListener("click", function() {

    contenedorOfertas.scrollLeft -= 330;

});

const formularioContacto = document.getElementById("formulario-contacto");

formularioContacto.addEventListener("submit", function(event) {
    event.preventDefault ();

    alert("¡Mensaje enviado correctamente");

    formularioContacto.reset();
});