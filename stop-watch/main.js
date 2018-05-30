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
    setTimeout(function () {
      $button.textContent = 'pause'
      $button.style.backgroundColor = '#FF9F9F'
    }, 1000)

  }
  else if (isRunning) {
    isRunning = false
    clearInterval(interval)
    $button.textContent = 'start'
    $button.style.backgroundColor = 'transparent'
  }
}, false)
