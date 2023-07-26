const resetBtn = document.querySelector('.hero-reset')
const heroError = document.querySelector('.hero-error');
const numberPeopleParagragh = document.querySelector('.number-people-paragragh')
const dollarImgBill = document.querySelector('.dollar-img-bill');
const dollarImgPeople = document.querySelector('.dollar-img-people');
let billTotal = document.querySelector('.hero-bill');
let tipOptions = document.querySelectorAll('.hero-options');
let numberPeople = document.querySelector('.hero-people');
let tipAmount = document.querySelector('.hero-amount-person');
let totalPerPerson = document.querySelector('.hero-per-person');
let customTip = document.querySelector('.hero-options-custom');

// Calculating tips and updating innerHTML
tipOptions.forEach((option) => { 
  option.addEventListener('click', (e) => {
    if (numberPeople.value == 0) {
      heroError.classList.remove('visible')
      dollarImgPeople.classList.add('visible')
      numberPeopleParagragh.classList.add('hero-error')
      numberPeople.className = 'error'  
    } else {
    e.target.classList.toggle('fixed')
    e.target.classList.toggle('hero-options')
    tipAmount.innerHTML = (e.target.value*billTotal.value).toFixed(2) // Calculating total tip
    totalPerPerson.innerHTML = (e.target.value*billTotal.value/numberPeople.value).toFixed(2) // Calculating tip per person
    }
  })
})

// Calculates custom tip field
customTip.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    tipAmount.innerHTML = (customTip.value/100*billTotal.value).toFixed(2)
    totalPerPerson.innerHTML = (customTip.value/100*billTotal.value/numberPeople.value).toFixed(2)
  }
})

// Makes dollar SVG disapear on click.
billTotal.addEventListener('click', () => {
  dollarImgBill.classList.add('visible')
})

numberPeople.addEventListener('click', () => {
  dollarImgPeople.classList.add('visible')
})

// reseting input fields when Reset button clicked
function resetFields() {
    billTotal.value = ""
    numberPeople.value = ""
    customTip.value = ""
    tipAmount.innerHTML = "$0.00"
    totalPerPerson.innerHTML = "$0.00"
}

// Resets input fields
resetBtn.addEventListener('click', resetFields)