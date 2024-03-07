const form = document.getElementById('passwordForm');
const password = document.getElementById('password');
const error = document.getElementById('error');
const passregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])(.{8,})$/;

function validatePassword() {
    if (!passregex.test(password.value.trim())) {
        error.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

form.addEventListener('submit', function(e) {
    if (!validatePassword()) {
        e.preventDefault();
    }
});