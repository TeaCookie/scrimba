
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

let number = document.querySelector('input');

number.addEventListener('input', () => {
    numberValue = number.value
  all() // Log the new value after an input is made
});

function length(){
    lengthEl.textContent = numberValue + " meters = " + (numberValue * 3.28084).toFixed(3) + " feet."
}

function volume(){
    volumeEl.textContent = numberValue + " liters = " + (numberValue * 0.264172).toFixed(3) + " gallon."
}

function mass(){
    massEl.textContent = numberValue + " kilo = " + (numberValue * 2.20462).toFixed(3) + " pound."
}

function all(){
    length()
    volume()
    mass()
}

