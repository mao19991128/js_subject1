const onClickStart = document.getElementById("onClickStart")
const onClickStop = document.getElementById("onClickStop")
const onClickReset = document.getElementById("onClickReset")
const time = document.querySelector("time");

let startTime = 0;
let running = false;
let timerInterval = undefined;
let currentTime = "";
let calcTime = 0;

const displayTimer = () => {
    timerInterval = window.setInterval(() => {

        calcTime = Date.now() - startTime;

      
        const currentTime = new Date(calcTime);

      const h = String(currentTime.getHours() - 9).padStart(2, "0");
      const m = String(currentTime.getMinutes()).padStart(2, "0");
      const s = String(currentTime.getSeconds()).padStart(2, "0");

      time.textContent = `${h}:${m}:${s}`;
    
    }, 1000);
}

onClickStart.addEventListener('click', function(){
    startTime = Date.now() - calcTime;
    displayTimer();
    onClickStart.disabled = true;
    onClickStop.disabled = false;
    onClickReset.disabled = false;
})

onClickStop.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    onClickStart.disabled = false;
    onClickStop.disabled = true;
    onClickReset.disabled = false;
})
 

onClickReset.addEventListener('click', function(){
    calcTime = 0;
    time.textContent = "00:00:00";
    onClickStart.disabled = false;
    window.clearInterval(timerInterval);
    onClickStart.disabled = false;
    onClickStop.disabled = true;
    onClickReset.disabled = true;
})