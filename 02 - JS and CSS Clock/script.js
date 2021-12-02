const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const div = document.querySelector(".current-time");


setInterval(getTime, 1000);
function getTime() {
    let currentTime = new Date();

    let currentSecond = currentTime.getSeconds();
    let secondToDeg = ((currentSecond/60 * 360) + 90);
    secondHand.style.transform = `rotate(${secondToDeg}deg)`;

    let currentMinute = currentTime.getMinutes();
    let minuteToDeg = ((currentMinute/60 * 360) + 90);
    minuteHand.style.transform = `rotate(${minuteToDeg}deg)`;

    let currentHour = currentTime.getHours();
    let hourToDeg = ((currentHour/12 * 360) + 90);
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;

    div.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`;
}
