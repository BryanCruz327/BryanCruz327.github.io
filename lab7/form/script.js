document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

function validateEmail(email) {
    if (!email) {
        return "Please enter your Siena College email.";
    }
    if (!email.endsWith("@siena.edu")) {
        return "Invalid email. Use your Siena College email ending in '@siena.edu'.";
    }
    return ""; // No errors => Return empty string.
}

function validateSienaID(sienaID) {
    if(!sienaID){
        return "Please enter your Siena College ID.";
    }

    if(!sienaID.includes("90", 0) || !(sienaID.length === 9)){
        return "Please enter a valid ID.";
    }
}

function validateForm() {
    const emailInput = document.getElementById("emailAddress");
    const sienaIDInput = document.getElementById("sienaID");
    const emailError = document.getElementById("emailError");
    const sienaIDError = document.getElementById("sienaIDError");

    // Clear previous error messages
    emailError.textContent = "";
    sienaIDError.textContent = "";

    // Run validation checks
    const emailValidationMessage = validateEmail(emailInput.value.trim());
    const sienaIDValidationMessage = validateSienaID(sienaIDInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (emailValidationMessage) {
        emailError.textContent = emailValidationMessage;
        isValid = false;
    }

    else{
        isValid = true;
    }

    // << ADD CODE HERE >>
    // Do something similar for SienaID error handling.
    if (sienaIDValidationMessage) {
        sienaIDError.textContent = sienaIDValidationMessage;
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