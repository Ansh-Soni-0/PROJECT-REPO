
let hour = document.getElementById('hour');
let minut = document.getElementById('min');
let second = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minut.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);