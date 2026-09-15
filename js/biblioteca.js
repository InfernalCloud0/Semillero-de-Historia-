document.addEventListener("DOMContentLoaded", () => {

    const buscador =
        document.getElementById("buscador");

    const carpetas =
        document.querySelectorAll(".carpeta");

    const sinResultados =
        document.getElementById("sin-resultados");

    const cantidad =
        document.getElementById("cantidad-carpetas");


    if (cantidad) {

        cantidad.textContent =
            carpetas.length;

    }


    buscador.addEventListener("input", () => {


        const texto =
            buscador.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();


        let resultados = 0;


        carpetas.forEach((carpeta) => {


            const nombre =
                carpeta.dataset.nombre
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


            if (nombre.includes(texto)) {

                carpeta.style.display = "flex";

                resultados++;

            } else {

                carpeta.style.display = "none";

            }

        });



        if (resultados === 0) {

            sinResultados.classList.add("visible");

        } else {

            sinResultados.classList.remove("visible");

        }



        if (cantidad) {

            cantidad.textContent =
                resultados;

        }

    });


});