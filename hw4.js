
let countdownDate = newDate("December 25, 2021 12:00:00").getTime()

let time = setInterval(function() {
    let currentTime = new Date().getTime();
    let i = ending - currentTime;

    var days = Math.floor(i / (1000 * 60 * 60 * 24));
    var hours = Math.floor((i % (1000 * 60 * 60)) / (1000 * 60 * 60));
    var minutes = Math.floor((i % (1000 * 60)) / (1000 * 60));
    var seconds = Math.floor((i % 1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (i <= 0) {
        clearInterval(time);
        document.getElementById("days").innerHTML = '0';
        document.getElementById("hours").innerHTML = '0';
        document.getElementById("minutes").innerHTML =' 0';
        document.getElementById("seconds").innerHTML = '0';
        document.getElementById("stop").innerHTML = "STOP!!"
    }
})

