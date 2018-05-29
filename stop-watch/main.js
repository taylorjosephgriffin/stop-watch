let $button = document.querySelector('#start')
let $time = document.querySelector('#time')

function startTime() {
  return $time.innerHTML++
}

$button.addEventListener('click', function () {
  setInterval(startTime, 1000)
}, false)
