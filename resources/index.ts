


function timerStart() {
    let targetDate = (document.getElementById("date_input") as HTMLInputElement).valueAsNumber;
    let thisDate = Date.now();
    let timerText = document.getElementById("timer");
    console.log(thisDate - targetDate);

    if (targetDate - thisDate <= 0) {
        return;
    }

    timerText.innerHTML = "Clicked.";
}