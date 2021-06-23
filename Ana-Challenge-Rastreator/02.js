'use strict'


    window.addEventListener('load', function (){
        var imagenes = [];
        imagenes[0] = 'img/imagen4.jpg';
        imagenes[1] = 'img/imagen5.jpg';
        imagenes[2] = 'img/imagen6.jpg';

        var indiceImagenes = 0;

        function cambiarImagenes(){

        document.slider2.src = imagenes[indiceImagenes];
            
            if (indiceImagenes < 2) {
                indiceImagenes++;
            } else {
                indiceImagenes = 0;
            }
        }

        setInterval(cambiarImagenes, 3000);
    });
