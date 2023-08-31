let timer: number = null;

function timerStart() {
    let targetDate = new Date((document.getElementById("date_input") as HTMLInputElement).valueAsNumber);
    let thisDate = new Date();

    if (targetDate < thisDate) {
        return;
    }

    if (timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(function() {
        countdown(targetDate, thisDate);
    }, 1000);
    
}

function countdown(target: Date, today: Date) {
    let dayText = document.getElementById("days");
    let hourText = document.getElementById("hours");
    let minText = document.getElementById("minutes");
    let secText = document.getElementById("seconds");
    let days: number, hours: number, minutes: number, seconds: number;

    today = new Date();
    let remaining = target.valueOf() - today.valueOf();

    dayText.innerHTML = Math.floor(remaining / 86000000).toString() + " days";
    remaining = remaining % 86000000;
    hourText.innerHTML = Math.floor(remaining / 3600000).toString() + " hours";
    remaining = remaining % 3600000;
    minText.innerHTML = Math.floor(remaining / 60000).toString() + " minutes";
    remaining = remaining % 60000;
    secText.innerHTML = Math.floor(remaining / 1000).toString() + " seconds";
}