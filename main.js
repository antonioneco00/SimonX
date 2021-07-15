/// <reference path="jQuery/index.d.ts"/>

$(document).ready(() => {

    // Variables

    var botonEmpezar = $("#botonEmpezar");
    var empezarTexto = $("#botonEmpezar p")
    var contenedorBotones = $("#contenedorBotones");
    var botones = $(".botones");
    var idBoton = "#btn";
    var iterador = 0;
    var listaNumeros = [];
    var footer = $("#footer");
    var record;
    var highScore = 0;
    var taparPantalla = $("#taparPantalla");

    mostrarBotonEmpezar();

    function mostrarBotonEmpezar() {
        listaNumeros = [];
        botones.hide();
        taparPantalla.hide();
        contenedorBotones.css('display', 'flex');
        botonEmpezar.css({
            'transition': 'box-shadow 300ms',
            'box-shadow': '',
        });
        empezarTexto.css('left', '');
        botonEmpezar.hide().delay(1000).fadeIn(300);
    }

    botonEmpezar.click(() => {
        console.log('Se ha clicado el boton empezar');
        botonEmpezar.fadeOut(250, () => {
            taparPantalla.show();
            botones.fadeIn(300);
            setTimeout(comienzo, 600);
            contenedorBotones.css({
                'display': 'grid',
                'justify-items': 'center',
                'align-items': 'center'
            });
        });
        botonEmpezar.css({
            'transition': 'box-shadow 100ms',
            'box-shadow': '40px 4px 0px 0px #30b, 80px 8px 0px 0px #30bb, 120px 12px 0px 0px #30b7, 160px 16px 0px 0px #30b3'
        });
        empezarTexto.animate({ left: '-100px' }, 100);
    });

    function comienzo() {
        record = listaNumeros.length;
        listaNumeros.push(Math.floor(Math.random() * 9) + 1);
        console.log('Se ha añadido 1 numero');
        iterador = 0;
        footer.html(record);
        footer.css('font-size', '');

        function mostrarPartida(i) {
            setTimeout(() => {
                $(idBoton + listaNumeros[i]).css('background-color', '#00f');
            }, 300 * i + 300);
            setTimeout(() => {
                $(idBoton + listaNumeros[i]).css('background-color', '#000');
            }, 300 * i + 500);
            setTimeout(() => {
                taparPantalla.hide();
            }, 300 * listaNumeros.length + 500);
        }

        for (var i = 0; i < listaNumeros.length; i++) {
            mostrarPartida(i);
        }
    }

    botones.click(() => {
        $(idBoton + Id).css('background-color', '#00f');
        setTimeout(() => {
            $(idBoton + Id).css('background-color', '#000');
        }, 200);

        console.log(Id);
        console.log(listaNumeros);

        if (Id == listaNumeros[iterador]) {
            taparPantalla.show();
            setTimeout(() => {
                if (iterador < listaNumeros.length) {
                    taparPantalla.hide();
                }
            }, 200);
            if (iterador == listaNumeros.length - 1) { 
                setTimeout(comienzo, 1000);
            }
        } else if (Id != listaNumeros[iterador]) {
            taparPantalla.show();
            console.log("incorrecto");

            for (var i = 0; i < 6; i++) {
                function botonIncorrecto(i) {
                    setTimeout(() => {
                        if (i % 2 == 0) {
                            $(idBoton + Id).css('background-color', '#f00');
                        } else {
                            $(idBoton + Id).css('background-color', '#000');
                        }
                    }, 300 * i);
                }

                botonIncorrecto(i);
            }

            setTimeout(() => {
                mostrarBotonEmpezar();
                footer.css('font-size', '35px');
                if (record > highScore) {
                    highScore = record;
                    footer.html('¡Nuevo record! ' + highScore);
                } else {
                    footer.html('Tu puntuacion: ' + record);
                }
            }, 2500);
        }

        iterador++;
    });
});

var Id;

function getId(id) {
    Id = id;
}