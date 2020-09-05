const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // using constraint API
    isValid = form.checkValidity();
    // style main message for an error
    if (!isValid) {
        message.textContent = 'please fill out all fields';
        message.style.color = '#db6d6d';
        messageContainer.style.borderColor = "#db6d6d";
        // it will break out this function and just stop doing what it's doing cause it's invalid form
        return;
    }
    // check to see if password match
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = '#31b531';
        password2El.style.borderColor = '#31b531';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match ';
        message.style.color = '#db6d6d';
        messageContainer.style.borderColor = '#db6d6d';
        password1El.style.borderColor = '#db6d6d';
        password2El.style.borderColor = '#db6d6d';
        return;
    }
    // if form is valid and passwords match
    if (isValid && passwordMatch) {
        message.textContent = 'Successfully Registered :)';
        message.style.color = '#31b531';
        messageContainer.style.borderColor = '#31b531';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // validate form method
    validateForm();
    // submit data if valid
    if (isValid && passwordMatch) {
        storeFormData();
    }
}

// event listeners
form.addEventListener('submit', processFormData);