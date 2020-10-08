setInterval(setClock, 10)

// Object references
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const hourDig = document.getElementById('digital-hour')
const minuteDig = document.getElementById('digital-minute')
const secondDig = document.getElementById('digital-second')

// Set clocks
function setClock() {
  
  // Calculating day percentage
  const currentDate = new Date()
  const totalSeconds = (currentDate.getHours() * 3600) + (currentDate.getMinutes() * 60) + currentDate.getSeconds()
  const totalMS = totalSeconds * 1000 + currentDate.getMilliseconds();
  const dayPercent = totalMS / 86400000;

  const secondRatio = (dayPercent * 1000) % 1
  const minuteRatio = (dayPercent * 10) % 1
  const hourRatio = dayPercent;

  // Update analog clock
  setRotation(secondHand, secondRatio)
  setRotation(minuteHand, minuteRatio)
  setRotation(hourHand, hourRatio)

  // Update digital clock
  setNumber(hourDig, hourRatio * 10)
  setNumber(minuteDig, minuteRatio * 100)
  setNumber(secondDig, secondRatio * 100)
}

// Rotate analog clock hands
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

// Set the number for a given element
function setNumber(element, value) {
  if (value < 10) {
    element.innerHTML = '0'
  } else {
    element.innerHTML = '';
  }
  element.innerHTML += Math.floor(value);
}

// Update on page open
setClock()