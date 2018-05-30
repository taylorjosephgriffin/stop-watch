const $start = document.querySelector('#start')
const $time = document.querySelector('#time')
const $reset = document.querySelector('#reset')
let isRunning = false
let interval = null

function startTime() {
  $time.innerHTML++
}

$reset.hidden = true

$start.addEventListener('click', function () {
  if (!isRunning) {
    isRunning = true
    $reset.hidden = false
    interval = setInterval(startTime, 1000)
    setTimeout(function () {
      $start.textContent = 'pause'
      $start.style.backgroundColor = '#FF9F9F'
    }, 1000)

  }
  else if (isRunning) {
    isRunning = false
    clearInterval(interval)
    $start.textContent = 'start'
    $start.style.backgroundColor = 'transparent'
  }
}, false)

$reset.addEventListener('click', function () {
  clearInterval(interval)
}, false)
