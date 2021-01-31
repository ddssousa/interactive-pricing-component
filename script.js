const spanLeft = document.getElementById('span-left')
const spanRight = document.getElementById('span-right')
const checkInput = document.getElementById('check')

spanLeft.onclick = unckeck
spanRight.onclick = check


function unckeck() {
    if (checkInput.checked) {
        checkInput.checked = false
    }
}

function check() {
    if (!checkInput.checked) {
        checkInput.checked = true
    }
}

// Input range
// Handle colors
// NOT WORKING

const inputRange = document.getElementById('input-range')
const min = inputRange.min
const max = inputRange.max;
const value = inputRange.value

inputRange.style.backgroundColor = `linear-gradient(to right, red 0%, red ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

inputRange.oninput = function () {
    this.style.backgroundColor = `linear-gradient(to right, red 0%, red ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
};