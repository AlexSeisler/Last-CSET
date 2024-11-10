const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const createAccountBtn = document.getElementById('create');

// Function to check if email is valid
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
}

// Function to check if phone number is valid
function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^[0-9]{10}$/; // Matches a 10-digit phone number
    return phonePattern.test(phoneNumber);
}

// Function to validate form
function validateForm() {
    let isValid = true;
    passwordError.style.display = 'none'; // Hide password error by default

    // Check if required fields are filled
    if (firstName.value.trim() === '' || lastName.value.trim() === '' || email.value.trim() === '' || phoneNumber.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '') {
        alert('Please fill out all required fields.');
        isValid = false;
    }

    // Validate email format
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate phone number format
    if (!validatePhoneNumber(phoneNumber.value)) {
        alert('Please enter a valid 10-digit phone number.');
        isValid = false;
    }

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        passwordError.style.display = 'block';
        isValid = false;
    }

    return isValid;
}