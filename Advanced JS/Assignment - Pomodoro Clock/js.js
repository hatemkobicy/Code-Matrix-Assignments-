let workSeconds = 1500;
let breakSeconds = 300;
let currentSeconds = workSeconds;
let cycles = 0;
let timer;
let isWork = true;
let isRunning = false;

function updateDisplay() {
  let mins = Math.floor(currentSeconds / 60)
    .toString()
    .padStart(2, "0");
  let secs = (currentSeconds % 60).toString().padStart(2, "0");
  document.getElementById("timer").textContent = `${mins}:${secs}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (currentSeconds > 0) {
        currentSeconds--;
      } else {
        isWork = !isWork;
        currentSeconds = isWork ? workSeconds : breakSeconds;
        if (isWork) cycles++;
        document.getElementById("cycle-count").textContent = cycles;
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isWork = true;
  currentSeconds = workSeconds;
  cycles = 0;
  document.getElementById("cycle-count").textContent = cycles;
  updateDisplay();
}
