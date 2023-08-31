var timer = null;
function timerStart() {
    var targetDate = new Date(document.getElementById("date_input").valueAsNumber);
    var thisDate = new Date();
    if (targetDate < thisDate) {
        return;
    }
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        countdown(targetDate, thisDate);
    }, 1000);
}
function countdown(target, today) {
    var dayText = document.getElementById("days");
    var hourText = document.getElementById("hours");
    var minText = document.getElementById("minutes");
    var secText = document.getElementById("seconds");
    var days, hours, minutes, seconds;
    today = new Date();
    var remaining = target.valueOf() - today.valueOf();
    dayText.innerHTML = Math.floor(remaining / 86000000).toString() + " days";
    remaining = remaining % 86000000;
    hourText.innerHTML = Math.floor(remaining / 3600000).toString() + " hours";
    remaining = remaining % 3600000;
    minText.innerHTML = Math.floor(remaining / 60000).toString() + " minutes";
    remaining = remaining % 60000;
    secText.innerHTML = Math.floor(remaining / 1000).toString() + " seconds";
}
