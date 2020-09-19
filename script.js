const releaseDay = '19 Nov 2020';

function countdown() {
    const releaseDayDate = new Date(releaseDay);
    const currentDate = new Date();

    const totalSeconds = (releaseDayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60; 
    
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(mins);
    document.getElementById("secs").innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();
setInterval(countdown, 1000);

