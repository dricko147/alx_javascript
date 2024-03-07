const form = document.getElementById('dynamicForm');
const numFields = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');

function generateInputFields(numsOfFields) {
    inputContainer.innerHTML = '';
    for (let i = 0; i < parseInt(numsOfFields); i++) {
        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('name', `field${i + 1}`);
        inputField.setAttribute('id', `field${i + 1}`);
        inputField.setAttribute('placeholder', `Field ${i + 1}`);
        inputContainer.appendChild(inputField);
    }
};

numFields.addEventListener('change', function(){
    generateInputFields(numFields.value);
});

function validateForm() {
    let valid = true;
    for (let i = 0; i < parseInt(numFields.value); i++) {
        const error = document.createElement('span');
        const inputField = document.getElementById(`field${i + 1}`);
        error.setAttribute('id', `error`);
        if (inputField.value.trim() === '') {
            error.textContent = `Please fill in all fields.`;
            error.style.color = 'red';
            inputField.parentNode.appendChild(error);
            valid = false;
        }
    }
    return valid;
};

form.addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

generateInputFields(parseInt(numFields.value))