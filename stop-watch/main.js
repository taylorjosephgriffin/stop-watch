const $start = document.querySelector('#start')
const $time = document.querySelector('#time')
const $reset = document.querySelector('#reset')
let isRunning = false
let intervalStart = null

function startTime() {
  $time.textContent++
}

function resetTime() {
  $time.textContent = 0
}

$reset.hidden = true

$start.addEventListener('click', function () {
  if (!isRunning) {
    isRunning = true
    $reset.hidden = false
    intervalStart = setInterval(startTime, 1000)
    setTimeout(function () {
      $start.textContent = 'pause'
      $start.style.backgroundColor = '#FF9F9F'
    }, 1000)

  }
  else if (isRunning) {
    isRunning = false
    clearInterval(intervalStart)
    $start.textContent = 'start'
    $start.style.backgroundColor = 'transparent'
  }
}, false)

$reset.addEventListener('click', function () {
  clearInterval(intervalStart)
  resetTime()
  isRunning = false
  $reset.hidden = true
  $start.textContent = 'start'
  $start.style.backgroundColor = 'transparent'
}, false)
