const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const displayValueSpan = document.getElementById("displayValue");

let value = 0;

decrementButton.addEventListener("click", () => {
    if (value > 0) {
        value--;
        updateValue();
    }
});

incrementButton.addEventListener("click", () => {
    if (value < 9999) {
        value++;
        updateValue();
    }
});

function updateValue() {
    displayValueSpan.textContent = value;
}

