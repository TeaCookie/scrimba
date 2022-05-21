var possibleChars = []
// default value of passLength is 10
var passLength = 10
let lengthEl = document.querySelector("input#inputLength");
lengthEl.value = 10
// change value of passLength based on the event listening on the element
lengthEl.addEventListener('change', () => {
    if (lengthEl.value < 1) {
        passLength = 1
    } else if (lengthEl.value > 20) {
        passLength = 20
    } else {
        passLength = lengthEl.value
    }

});
// generate array of chars from ascii
for (let i = 33; i < 126; i++) {
    possibleChars.push(String.fromCharCode(i))
}
// pull nodelist object from option elements
var options = document.querySelectorAll("input.passOption")

function renderPass() {
    options.forEach(option => {
        option.style.backgroundImage = "none";
        option.value = genPass()
        option.addEventListener('click', () => {
            navigator.clipboard.writeText(option.value)
            console.log(option.value)
        })
    })
}

function genPass() {
    var password = ''
    for (var i = 0; i < passLength; i++) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }
    return password
}

function clipboard() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
    
}