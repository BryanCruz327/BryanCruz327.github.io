
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let counter = document.getElementById("counter");
let count = 0;

function startTimer(){
    if(timerID == null){
        timerID = setInterval(timer, 100);
    }
}

function stopTimer(){
    clearInterval(timerID);
}

function timer(){
    count = count + 1;
    counter.textContent = count;
}

let timerID;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
