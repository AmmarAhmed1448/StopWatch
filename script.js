let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!timer) {
    timer = setInterval(updateStopwatch, 10);
    document.getElementById('startBtn').innerText = 'Pause';
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById('startBtn').innerText = 'Resume';
  }
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
  document.getElementById('startBtn').innerText = 'Start';
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById('startBtn').innerText = 'Start';
}

function updateStopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}<span id="milliseconds">.${pad(milliseconds)}</span>`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
