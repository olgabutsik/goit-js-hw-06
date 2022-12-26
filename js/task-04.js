

const increaseBtn = document.querySelector('button[data-action="increment"]')
increaseBtn.addEventListener("click", onClickIncrease);
const decreaseBtn = document.querySelector('button[data-action="decrement"]')
decreaseBtn.addEventListener("click", onClickDecrease)

const changeValue = document.querySelector('#value');

let counterValue = 0;
function onClickIncrease() {
    counterValue += 1;
    changeValue.innerHTML = counterValue;
    
    
}
 
function onClickDecrease() {
    counterValue -= 1;
    changeValue.innerHTML = counterValue
    
}

