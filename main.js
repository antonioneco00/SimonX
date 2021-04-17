/// <reference path="jQuery/index.d.ts"/>

$(document).ready(() => {
    var botonEmpezar = $("#botonEmpezar");
    var empezarTexto = $("#botonEmpezar p")
    var contenedorBotones = $("#contenedorBotones");
    var botones = $(".botones");
    var numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    var taparPantalla = $("#taparPantalla");

    botones.hide();
    taparPantalla.hide();
    botonEmpezar.hide().delay(1000).fadeIn(300);
    botonEmpezar.click(() => {
        botonEmpezar.fadeOut(250, () => {
            taparPantalla.show();
            botones.fadeIn(300, () => {
                setTimeout(comienzo, 300);
            });
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
        empezarTexto.animate({left: '-100px'}, 100);
    });

    function comienzo() {
        $("#btn" + numeroAleatorio).css('background-color', '#00f');
        setTimeout(() => {
            $("#btn" + numeroAleatorio).css('background-color', '#000');
            taparPantalla.hide();
        }, 300);

        $("#btn" + numeroBoton).click(() => {
            $(this).css('background-color', '#00f');
        });
    }
});

var numeroBoton;

function getId(id) {
    numeroBoton = id;
}