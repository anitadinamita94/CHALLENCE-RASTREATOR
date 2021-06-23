'use strict'


    window.addEventListener('load', function (){
        var imagenes = [];
        imagenes[0] = 'img/imagen1.jpg';
        imagenes[1] = 'img/imagen2.jpg';
        imagenes[2] = 'img/imagen3.jpg';

        var indiceImagenes = 0;

        function cambiarImagenes(){

        document.slider1.src = imagenes[indiceImagenes];
            
            if (indiceImagenes < 2) {
                indiceImagenes++;
            } else {
                indiceImagenes = 0;
            }
        }

        setInterval(cambiarImagenes, 3000);
    });
