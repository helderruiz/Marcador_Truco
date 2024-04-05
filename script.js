const value = document.querySelector('#value')
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const resetButton = document.querySelector('#reset')


const valueOponent = document.querySelector('#value_oponent')
const plusOponent = document.querySelector('#plus_oponent')
const minusOponent = document.querySelector('#minus_oponent')

let count = 0

const updateValueOponent = () => {
  valueOponent.innerHTML = count
}

const updateValue = () => {
  value.innerHTML = count
}

plusButton.addEventListener('click', () => {
  count += 1
  if (count === 12) {
    alert('SEU TIME VENCEU !!! ')
  }
  updateValue()
})

minusButton.addEventListener('click', () => {
  count -= 1
  if (count < 1) {
    alert('O placar nao pode ser menor que 0 seu pato')
    count = 0
  }
  updateValue()
})

plusOponent.addEventListener('click', () => {
  count += 1
  updateValueOponent()
})

minusOponent.addEventListener('click', () => {
  count -= 1
  updateValueOponent()
})


