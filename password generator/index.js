var possibleChars = []
var passLength = 10

for (let i = 33; i < 126; i++) {
    possibleChars.push(String.fromCharCode(i))
}

var options = document.querySelectorAll("input.passOption")

function renderPass() {
    options.forEach(option => {
        option.style.backgroundImage = "none";
        option.value = genPass()
    })
}

function genPass() {
    var password = ''
    for (var i = 0; i < passLength; i++) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }
    return password

}