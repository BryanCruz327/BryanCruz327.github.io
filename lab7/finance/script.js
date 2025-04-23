document.getElementById("financeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

document.getElementById("amount").addEventListener("blur", function(){
    const amountInput = document.getElementById("amount");
    amountInput.value = roundDecimal(amountInput.value.trim()).toString();
});

function validateName(name) {
    if (!name) {
        return "Please enter a name.";
    }
    if (name.length < 3) {
        return "Invalid name. Must be at least be 3 letters long.";
    }
    return ""; // No errors => Return empty string.
}

function validateAmount(amount) {
    if(!amount){
        return "Please enter an income amount.";
    }

    const amountNum = Number.parseFloat(amount).toFixed(2);

    if(!(amountNum > 0)){
        return "Please enter a valid amount.";
    }
    return "";
}

function validateFrequency(frequency) {
    if(!frequency){
        return "Please select a frequency.";
    }

    return "";
}

function roundDecimal(amount){
    return Number.parseFloat(amount).toFixed(2);
}

function validateForm() {
    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amount");
    const frequencyInput = document.getElementById("frequency");

    const nameError = document.getElementById("nameError");
    const amountError = document.getElementById("amountError");
    const frequencyError = document.getElementById("frequencyError");

    // Clear previous error messages
    nameError.textContent = "";
    amountError.textContent = "";
    frequencyError.textContent = "";

    // Run validation checks
    const nameValidationMessage = validateName(nameInput.value.trim());
    const amountValidationMessage = validateAmount(amountInput.value.trim());
    const frequencyValidationMessage = validateFrequency(frequencyInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (nameValidationMessage) {
        nameError.textContent = nameValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }

    // << ADD CODE HERE >>
    if (amountValidationMessage) {
        amountError.textContent = amountValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }

    if (frequencyValidationMessage) {
        frequencyError.textContent = frequencyValidationMessage;
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