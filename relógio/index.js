const pont_segundos = document.getElementById('pont_segundos1');
const pont_hrs = document.getElementById('pont_hrs1');
const pont_minutos = document.getElementById('pont_minutos1');



function tick_relogio() {
        const date = new Date();
        const segundos = date.getSeconds() / 60;
        const minutos = (segundos + date.getMinutes()) / 60;
        const horas = (minutos + date.getHours()) / 12;

        rotacao(pont_segundos, segundos);
        rotacao(pont_minutos, minutos);
        rotacao(pont_hrs, horas);
        
}

function rotacao(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(tick_relogio, 1000);


function relogio_digital() {
    const digital_horas = document.getElementById('digital_horas1');
    const digital_minutos = document.getElementById('digital_minutos1');
    const digital_segundos = document.getElementById('digital_segundos1');

    const horas2 = date.getHours();
    const minutos2 = date.getMinutes();
    const segundos2 = date.getSeconds();

    digital_horas.textContent = horas2;
}


