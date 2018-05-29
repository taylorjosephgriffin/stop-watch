/* eslint-disable no-unused-vars */

let $button = document.querySelector('#start')
let $time = document.querySelector('#time')
let isRunning = false

function startTime() {
  isRunning = true
  $time.innerHTML++
}

$button.addEventListener('click', function () {
  setInterval(startTime, 1000)
}, false)
