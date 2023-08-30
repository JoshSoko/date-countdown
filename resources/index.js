function timerStart() {
    var targetDate = document.getElementById("date_input").valueAsNumber;
    var thisDate = Date.now();
    var timerText = document.getElementById("timer");
    console.log(thisDate - targetDate);
    if (targetDate - thisDate <= 0) {
        return;
    }
    timerText.innerHTML = "Clicked.";
}
