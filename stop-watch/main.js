let $button = document.querySelector('#start')
let $time = document.querySelector('#time')
let isRunning = false
let interval = null

function startTime() {
  $time.innerHTML++
}

$button.addEventListener('click', function () {
  if (!isRunning) {
    isRunning = true
    interval = setInterval(startTime, 1000)
  }
  else if (isRunning) {
    isRunning = false
    clearInterval(interval)
  }
}, false)
