const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body')
const colorName = document.querySelector('.color')
changeColorBtn.addEventListener("click", getRandomHexColor);


function getRandomHexColor() {
  bodyColor.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`
  colorName.textContent = bodyColor.style.backgroundColor;
  
}
