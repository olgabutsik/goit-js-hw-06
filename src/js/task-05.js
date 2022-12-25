
const userName = document.querySelector('#name-input');
const userNameOutput = document.querySelector("#name-output");
console.log(userNameOutput)

userName.addEventListener('input', event => {
    userNameOutput.textContent = userName.value
})
