/**
store buttons and displays in variables
when you click the start button,the last two digits of the timer should count all the way up to 100 then reset back to 0 and repeat
*/


let timer = document.querySelector(".timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const message = document.querySelector(".message")
let seconds = 0;
let mintes = 0;

    
function startTimer(){

    counting = setInterval(() => {
        seconds ++;
       

        if (seconds == 60){
            mintes++;
            seconds = 0;
        }

        timer.textContent = `${mintes}:${seconds}`;

    }, 1000);
}

function stopTimer(){
    clearInterval(counting);
    
}


start.addEventListener("click", function(e){
    startTimer(60);
    message.textContent = "You have started THE TIMER!"
})

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






