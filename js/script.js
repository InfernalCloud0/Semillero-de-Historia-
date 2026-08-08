/* =====================================================
   SCRIPT PRINCIPAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       ANIMACIÓN DE SECCIONES
    ================================================= */

    const elementos = document.querySelectorAll(
        ".seccion, .linea, .proyecto"
    );


    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elementos.forEach((elemento) => {

        elemento.classList.add("animacion");

        observador.observe(elemento);

    });


    /* =================================================
       ENLACES DEL MENÚ
    ================================================= */

    const enlaces = document.querySelectorAll(
        ".navegacion a"
    );


    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            enlaces.forEach((item) => {
                item.classList.remove("activo");
            });


            enlace.classList.add("activo");

        });

    });


});
