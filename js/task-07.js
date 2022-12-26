const changeFontSize = document.getElementById("font-size-control");
const changeText = document.getElementById("text");
changeText.style.fontSize = changeFontSize.value + "px";
changeFontSize.addEventListener('input', (value) => {
    
    changeText.style.fontSize = `${changeFontSize.value}px`;
   
})