
// pw



const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");
const resetBtn = document.getElementById("resetBtn");

// Decrement Button
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negative value is not allowed");
    }
});

// Increment Button
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
        alert("This is the highest number allowed");
    } else {
        displayValue.innerText = value + 1;
    }
});

// Reset Button
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});

