const form = document.getElementById('emailForm');
const email = document.getElementById('email');
const error = document.getElementById('error');
const emailregex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function validateEmail() {
    if (!emailregex.test(email.value.trim())) {
        error.textContent = "Please enter a valid email address.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
};

form.addEventListener('submit', function(e) {
    if (!validateEmail()) {
        e.preventDefault();
    }
});