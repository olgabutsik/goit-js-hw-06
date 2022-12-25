const changeFontSize = document.getElementById("font-size-control");
const changeText = document.getElementById("text");

changeFontSize.addEventListener('input', (value) => {
    
    changeText.style.fontSize = `${changeFontSize.value}px`;
   
})