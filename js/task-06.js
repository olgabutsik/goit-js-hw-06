const inputValidation = document.querySelector("#validation-input");
const charLength = document.querySelector('input[data-length="6"]')


inputValidation.addEventListener('blur', evt => {
    
    if (evt.target.value.length === Number(evt.target.dataset.length)) {
        evt.target.classList.add("valid");
        evt.target.classList.remove("invalid");
    } else {
            evt.target.classList.add("invalid");
    }
});

 