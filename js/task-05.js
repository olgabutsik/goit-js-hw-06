
const userName = document.querySelector('#name-input');
const userNameOutput = document.querySelector("#name-output");
console.log(userNameOutput)

userName.addEventListener('input', event => {
    if (event.currentTarget.value) {
        userNameOutput.textContent = event.currentTarget.value;
    } else {
        userNameOutput.textContent = "Anonymous";
    }
})
