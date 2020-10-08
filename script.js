setInterval(setClock, 10)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const totalSeconds = (currentDate.getHours() * 3600) + (currentDate.getMinutes() * 60) + currentDate.getSeconds()
  const dayPercent = totalSeconds / 86400

  const secondsRatio = ( (100000 * dayPercent) % 100) / 100
  const minutesRatio = ( (1000 * dayPercent) % 100) / 100
  const hoursRatio = dayPercent;

  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

//Dummy commit