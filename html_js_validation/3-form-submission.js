const form = document.getElementById('submitForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirmpassword-error');

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])(.{8,})$/;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function handleFormSubmit(e) {
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = "Please fill in your name.";
        e.preventDefault();
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = "Please fill in your email address.";
        e.preventDefault();
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        e.preventDefault();
    }

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = "Please fill in your password.";
        e.preventDefault();
    } else if (!passwordRegex.test(passwordInput.value.trim())) {
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        e.preventDefault();
    }

    if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordError.textContent = "Please confirm your password.";
        e.preventDefault();
    } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        confirmPasswordError.textContent = "Passwords do not match.";
        e.preventDefault();
    }
}

form.addEventListener('submit', handleFormSubmit);