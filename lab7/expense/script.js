document.getElementById("expenseForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

document.getElementById("amount").addEventListener("blur", function(){
    const amountInput = document.getElementById("amount");
    amountInput.value = roundDecimal(amountInput.value.trim()).toString();
});

function validatePlace(place) {
    if (!place) {
        return "Please enter a place.";
    }
    if (place.length < 5) {
        return "Invalid name. Must be at least be 5 letters long.";
    }
    return ""; // No errors => Return empty string.
}

function validateDate(date) {
    const currDate = new Date().toISOString().slice(0, 10);

    if (!date) {
        return "Please enter a date.";
    }
    if (date > currDate) {
        return "Invalid date, must be before today's date.";
    }
    return ""; // No errors => Return empty string.
}

function validateAmount(amount) {
    if(!amount){
        return "Please enter an income amount.";
    }

    const amountNum = Number.parseFloat(amount).toFixed(2);

    if(!((amountNum > 0) && (amountNum < 50000))){
        return "Please enter a valid amount.";
    }
    return "";
}

function validateMode(mode) {
    if(!mode){
        return "Please select a payment method.";
    }

    return "";
}

function roundDecimal(amount){
    return Number.parseFloat(amount).toFixed(2);
}

function validateForm() {

    const placeInput = document.getElementById("place");
    const dateInput = document.getElementById("date");
    const amountInput = document.getElementById("amount");
    const modeInput = document.getElementById("mode");
    const exampleInput = document.getElementById("explain");

    const placeError = document.getElementById("placeError");
    const dateError = document.getElementById("dateError");
    const amountError = document.getElementById("amountError");
    const modeError = document.getElementById("modeError");

    // Clear previous error messages
    placeError.textContent = "";
    amountError.textContent = "";
    dateError.textContent = "";
    modeError.textContent = "";

    // Run validation checks
    const placeValidationMessage = validatePlace(placeInput.value.trim());
    const amountValidationMessage = validateAmount(amountInput.value.trim());
    const dateValidationMessage = validateDate(dateInput.value.trim());
    const modeValidationMessage = validateMode(modeInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (placeValidationMessage) {
        placeError.textContent = placeValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }

    if (amountValidationMessage) {
        amountError.textContent = amountValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }

    if (dateValidationMessage) {
        dateError.textContent = dateValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }

    if (modeValidationMessage) {
        modeError.textContent = modeValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }
    
    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        submitRequest();
    }
}