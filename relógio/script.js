const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


function relogio_digital1() {
const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursElement.textContent = fixartempo(hours)
    minutesElement.textContent = fixartempo(minutes)
    secondsElement.textContent = fixartempo(seconds)

console.log(hours, minutes, seconds)
}
function fixartempo(time) {
    return time < 10 ? '0'+time : time
}

setInterval(relogio_digital1, 1000);


