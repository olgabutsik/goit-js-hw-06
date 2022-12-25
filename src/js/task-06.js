const inputValidation = document.querySelector("#validation-input");
const charLength = document.querySelector('input[data-length="6"]')


inputValidation.addEventListener('blur', evt => {
    
    if (inputValidation.value.length >= charLength.dataset.length) {
        inputValidation.style.borderColor =
            inputValidation.classList.add("valid");
    } else {
            inputValidation.classList.add("invalid");
    }
});