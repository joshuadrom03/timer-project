
let timer = document.querySelector(".timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const message = document.querySelector(".message")
let seconds = 0;
let mintes = 0;

start.addEventListener("click", function(e){
    counting = setInterval(() => {
        seconds ++;
        if (seconds == 60){
            mintes++;
            seconds = 0;
        }
        timer.textContent = `${mintes}:${seconds}`;

    }, 1000);
    message.textContent = "You have started THE TIMER!"
})

function stopTimer(){
    clearInterval(counting); 
}

stop.addEventListener("click", function(e){
    stopTimer();
    message.textContent = "You have stopped THE TIMER!"
})

reset.addEventListener("click", function(e){
    stopTimer();
    seconds = 0;
    mintes = 0;
    timer.textContent = `${mintes}:${seconds}`;
    message.textContent = "Welcome to THE TIMER!"

})






