let numberA
let numberB
let numberH
let area

document.getElementById('button').addEventListener('click', calculatingButton)

function calculatingButton () {
  numberA = document.getElementById('length-a').value
  numberB = document.getElementById('length-b').value
  numberH = document.getElementById('height-h').value
  numberA = parseInt(numberA)
  numberB = parseInt(numberB)
  numberH = parseInt(numberH)
  area = (numberA + numberB) / 2 * numberH
  alert(area)
}

document.getElementById('formula').addEventListener('click', trapezoidArea)

function trapezoidArea () {
  document.getElementById('formula').innerHTML = 'A=(a+b)/2*h'
}
