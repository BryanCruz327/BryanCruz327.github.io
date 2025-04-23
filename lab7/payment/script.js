document.getElementById("checkForm").addEventListener("submit", function (e) {
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
    if (name.length < 5) {
        return "Invalid name. Must be at least be 5 letters long.";
    }
    return ""; // No errors => Return empty string.
}

function validateAmount(amount) {
    if(!amount){
        return "Please enter an check amount.";
    }

    const amountNum = Number.parseFloat(amount).toFixed(2);

    if(!(amountNum > 0)){
        return "Please enter a valid amount.";
    }
    return "";
}

function validateDate(date) {
    const currDate = new Date().toISOString().slice(0, 10);

    if (!date) {
        return "Please enter a date.";
    }
    if (date < currDate) {
        return "Invalid date, must be after today's date.";
    }
    return ""; // No errors => Return empty string.
}

function validateBank(bank) {
    if (!bank) {
        return "Please enter a name.";
    }
    if (bank.length < 5) {
        return "Invalid name. Must be at least be 5 letters long.";
    }
    return ""; // No errors => Return empty string.
}

function validateAccountNum(accountNum) {
    if(!accountNum){
        return "Please enter an account number.";
    }

    if(!(accountNum.length == 10)){
        return "Please enter a valid amount.";
    }
    return "";
}

function roundDecimal(amount){
    return Number.parseFloat(amount).toFixed(2);
}

function validateForm() {
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
    const amountInput = document.getElementById("amount");
    const bankInput = document.getElementById("bank");
    const accountNumInput = document.getElementById("accountNum");


    const nameError = document.getElementById("nameError");
    const dateError = document.getElementById("dateError");
    const amountError = document.getElementById("amountError");
    const bankError = document.getElementById("bankError");
    const accountNumError = document.getElementById("accountNumError");

    // Clear previous error messages
    nameError.textContent = "";
    dateError.textContent = "";
    amountError.textContent = "";
    bankError.textContent = "";
    accountNumError.textContent = "";

    // Run validation checks
    const nameValidationMessage = validateName(nameInput.value.trim());
    const dateValidationMessage = validateDate(dateInput.value.trim());
    const amountValidationMessage = validateAmount(amountInput.value.trim());
    const bankValidationMessage = validateBank(bankInput.value.trim());
    const accountNumValidationMessage = validateAccountNum(accountNumInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (nameValidationMessage) {
        nameError.textContent = nameValidationMessage;
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

    if (bankValidationMessage) {
        bankError.textContent = bankValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }

    if (accountNumValidationMessage) {
        accountNumError.textContent = accountNumValidationMessage;
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