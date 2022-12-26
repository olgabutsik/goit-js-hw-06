const parentRoot = document.getElementById("boxes");
const controlsEl = document.getElementById('controls');
const inputNumber = document.querySelector('input[type="number"]')
const startSizeDiv = 30;

controlsEl.addEventListener("click", (evt) => {
  if (evt.target.dataset.destroy != undefined) {
    parentRoot.innerHTML = '';
  }
  if (evt.target.dataset.create != undefined) {
    const amount = inputNumber.value
    parentRoot.innerHTML = ""
    
    for (let i = 0; i < amount; i += 1) {
      const newBox = document.createElement("div")
      newBox.classList.add("new")
      newBox.style.width = `${(i + 1) * 10 + startSizeDiv}px`
      newBox.style.height = `${(i + 1) * 10 + startSizeDiv}px`
      newBox.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`
      newBox.style.marginTop = '5px';
         parentRoot.insertAdjacentElement("afterbegin", newBox)
    }
    parentRoot.insertAdjacentElement("afterbegin", newBox)
  }
})



