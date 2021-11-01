const firstNameInput = document.querySelector("input#first-name");
const lastNameInput = document.querySelector("input#last-name");
const emailInput = document.querySelector("input#email");
const form = document.querySelector("form#contact-form");

let isValidFirstName;
let IsValidLastName;
let isValidEmail;

if (firstNameInput) {
    firstNameInput.addEventListener('input', () => {
        isValidFirstName = validateName(firstNameInput);
    }, false);    
}

if (lastNameInput) {
    lastNameInput.addEventListener('input', () => {
        isValidLastName = validateName(lastNameInput);
    }, false);
}

if (emailInput) {
    emailInput.addEventListener('input', () => {
        isValidEmail = validateEmail(emailInput);
    }, false)
}

if (form) {
    form.addEventListener('submit', function (event) {
       
        handleValidateFormBeforeSubmit(); 
        handleSubmit(form, event);
    }, false);
}

const handleSubmit = (form, event) => {
    if (validateContactForm(form)) {
        handleValidSubmit(form);
    } else {
        handleInvalidSubmit(event); 
    }
}

const handleValidSubmit = (form) => {
    alert('Datos enviados!');
}

const handleInvalidSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
}


const handleValidateFormBeforeSubmit = () => {
    isValidFirstName = validateName(firstNameInput);
    isValidLastName = validateName(lastNameInput);
    isValidEmail = validateEmail(emailInput);
}

/**
 * Validacion contacto 
  @param {*} form 
  @returns 
 */
const validateContactForm = (form) => {
    return form.checkValidity() && isValidEmail && isValidFirstName && isValidLastName;
}

/**
 * Validacion nombre o apellido
 * @param {*} text 
 * @returns 
 */
const validateName = (text) => {
    const isValid = /([A-Z]|[a-z]){3,}/.test(text.value);

    if (isValid) {
        text.classList.add('is-valid');
        text.classList.remove('is-invalid');
    } else {
        text.classList.add('is-invalid');
        text.classList.remove('is-valid');
    }

    return isValid;
}

/**

 * @param {*} text 
 * @returns 
 */
const validateEmail = (emailInput) => {
    console.log(emailInput);
    const isValid = /^\S+@\S+\.\S+$/.test(emailInput.value);
    console.log(isValid);

    if (isValid) {
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
    } else {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
    }

    return isValid;
}
