const $start = document.querySelector('#start')
const $time = document.querySelector('#time')
const $reset = document.querySelector('#reset')
const $form = document.querySelector('#timelimit')
const $confirm = document.querySelector('#confirm')
const $reached = document.querySelector('#reached')
let timeLimit = 0
let limitSet = false
let isRunning = false
let intervalStart = null

$reset.hidden = true
$reached.hidden = true

function startTime() {
  if ($time.textContent === timeLimit) {
    $reached.hidden = false
    $time.className = 'expired'
    clearInterval(intervalStart)
  }
  else {
    $time.textContent++
  }
}

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
  else {
    isRunning = false
    clearInterval(intervalStart)
    $start.textContent = 'start'
    $start.style.backgroundColor = 'transparent'
  }
}, false)

$reset.addEventListener('click', function () {
  clearInterval(intervalStart)
  $time.textContent = 0
  isRunning = false
  $reset.hidden = true
  $reached.hidden = true
  $time.className = ''
  $start.textContent = 'start'
  $start.style.backgroundColor = 'transparent'
  if (limitSet) {
    $form.value = 0
    $confirm.style.backgroundColor = 'transparent'
    $confirm.textContent = 'SET'
  }
}, false)

$confirm.addEventListener('click', function () {
  timeLimit = $form.value
  limitSet = true
  if (timeLimit !== '') {
    $confirm.style.backgroundColor = 'rgba(120, 222, 196, 1)'
    $confirm.textContent = 'time limit is set'
  }
}, false)
