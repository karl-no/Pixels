// 7 - Selecione uma cor na paleta de cores e preencha os pixels no quadro.
const colorClass = document.querySelectorAll('.color');

function selectColor() {
  for (let index = 0; index < colorClass.length; index += 1) {
    colorClass[index].addEventListener('click', () => {
      let colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      colorClass[index].classList.add('selected');
    });
  }
}
selectColor();
