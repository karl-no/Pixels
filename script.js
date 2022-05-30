// 7 - Selecione uma cor na paleta de cores e preencha os pixels no quadro.
const colorClass = document.querySelectorAll('.color');

function selectColor() {
  for (let index = 0; index < colorClass.length; index += 1) {
    colorClass[index].addEventListener('click', () => {
      const colorSelected = document.querySelector('.selected');
      console.log(colorSelected);
      colorSelected.classList.remove('selected');
      colorClass[index].classList.add('selected');
    });
  }
}
selectColor();

// 8 - Preencha um pixel do quadro com a cor selecionada na paleta de cores.
function pixelArt() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', () => {
      const color = document.querySelector('.selected');
      const colorBackground = window
        .getComputedStyle(color, null)
        .getPropertyValue('background-color');
      pixel[index].style.background = colorBackground;
    });
  }
}

// function pintaPixel() {
//   const pixel = document.querySelectorAll('.pixel');
//   for (let index = 0; index < pixel.length; index += 1) {
//     pixel[index].addEventListener('click', () => {
//       const collor = document.querySelector('.selected');
//       const collorBg = window.getComputedStyle(collor, null).getPropertyValue('background-color');
//       pixel[index].style.background = collorBg;
//     });
//   }
// }

// 9 - Crie um botão que retorne a cor do quadro para a cor inicial
function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    for (let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = 'white';
    //   board[index].style.background = 'white';
    }
  });
}
clearBoard();

// function clearSelected() {
//   for (let index = 0; index <= colorClass.length; index += 1) {
//     colorClass[index].addEventListener('click', () => {
//       let selected = document.querySelector('.selected');
//       selected.className.replace('selected', '');
//       colorClass[index].classList.add('selected');
//     });
//   }
// }
// function clearSelected() {
//   for (let index = 0; index <= colorClass.length; index += 1) {
//     colorClass[index].addEventListener('click', () => {
//       let selected = document.querySelector('.selected');
//       selected.classList.remove('selected');
//       colorClass[index].classList.add('selected');
//     });
//   }
// }
// clearSelected();

// function clearSelected() {
//   for (let index = 0; index < colorSelection.length; index += 1) {
//     colorSelection[index].className = colorSelection[index].className.replace('selected', '');
//   }
// }

// function selectColor() {
//   for (let index = 0; index < colorClass.length; index += 1) {
//     colorClass[index].addEventListener('click', () => {
//       clearSelected();
//       colorClass[index].className += ' selected';
//     });
//   }
// }

// selectColor();

// function paintPixel(event) {
//   const pixelTarget = event.target;
//   const colorSelected = document.querySelector('.color .selected');
//   const colorToPaint = window
//     .getComputedStyle(colorSelected)
//     .getPropertyValue('background-color');
//   pixelTarget.style.backgroundColor = colorToPaint;
// }

// 7, 8 e 9
// function clearSelected() {
//   const collorPallet = document.querySelectorAll('.color');
//   for (let index = 0; index < collorPallet.length; index += 1) {
//     collorPallet[index].className = collorPallet[index].className.replace('selected', '');
//   }
// }

// function selectCollor() {
//   const collorPallet = document.querySelectorAll('.color');

//   for (let i = 0; i < collorPallet.length; i += 1) {
//     collorPallet[i].addEventListener('click', () => {
//       clearSelected();
//       collorPallet[i].className += ' selected';
//     });
//   }
// }

// selectCollor();

// function pintaPixel() {
//   const pixel = document.querySelectorAll('.pixel');
//   for (let index = 0; index < pixel.length; index += 1) {
//     pixel[index].addEventListener('click', () => {
//       const collor = document.querySelector('.selected');
//       const collorBg = window.getComputedStyle(collor, null).getPropertyValue('background-color');
//       pixel[index].style.background = collorBg;
//     });
//   }
// }

// pintaPixel();
// // clear-board
// function clearBoard() {
//   const div = document.querySelector('#pixel-board');
//   const pixelCollor = document.querySelectorAll('.pixel');
//   const button = document.createElement('button');
//   button.id = 'clear-board';
//   button.innerText = 'Limpar';
//   div.appendChild(button);
//   button.addEventListener('click', () => {
//     for (let index = 0; index < pixelCollor.length; index += 1) {
//       pixelCollor[index].style.background = 'white';
//     }
//   });
// }

// clearBoard();

// window.onload = function () {

//   function createColorPalette(color) {
//     let colorPalette = document.getElementById9('color-palette');
//     let palette = document.createElement('div');
//     palette.className = 'color';
//     palette.classList.add = color;
//     colorPalette.appendChild(palette);
//   }

//   createColorPalette('black');
//   createColorPalette('green');
//   createColorPalette('yellowgreen');
//   createColorPalette('yellow');
// };

// function CreatePixelBoard() {
//   let div = document.querySelector('#pixel-board');
//   for (let linhas = 1; linhas <= 5; linhas += 1) {
//     let pixelBoard = document.createElement('div');
//     pixelBoard.className = 'pixel';
//     div.appendChild(pixelBoard);
//     for (let colunas = 1; colunas <= 4; colunas += 1) {
//       let pixelBoard = document.createElement('div');
//       pixelBoard.className = 'pixel';
//       div.appendChild(pixelBoard);
//     }
//   }
// }

// CreatePixelBoard();

// window.onload = function () {
//   function CreatePixelBoard() {
//     let div = document.querySelector('#pixel-board');
//     for (let linhas = 1; linhas <= 5; linhas += 1) {
//       let pixelBoard = document.createElement('div');
//       pixelBoard.className = 'pixel';
//       div.appendChild(pixelBoard);
//       for (let colunas = 1; colunas <= 4; colunas += 1) {
//         let pixelBoard = document.createElement('div');
//         pixelBoard.className = 'pixel';
//         div.appendChild(pixelBoard);
//       }
//     }
//   }

//   CreatePixelBoard();
// };

// function colorPixels(tamanho) {
//   const pixelBoard = document.getElementById('pixel-board');
//   let boardSize = tamanho;
//   if (boardSize === undefined) {
//     boardSize = 5;
//   }

//   for (let index = 0; index < boardSize; index += 1) {
//     const pixelLine = document.createElement('div');
//     pixelLine.classLine.add('linha');
//     pixelBoard.appendChild(pixelLine);

//     for (let square = 0; square < boardSize; square += 1) {
//       const pixel = document.createElement('div');
//       pixel.classLine.add('pixel');
//       pixel.style.display = 'inline-block';
//       pixelLine.appendChild(pixel);
//     }
//   }
// }

// colorPixels();

// window.onload = function quadrados() {
//   const pixelBoard = document.getElementById('pixel-board');

//   function createSquares() {
//     for (let index = 0; index < 5; index += 1) {
//       const pixel = pixelBoard.appendChild(document.createElement('div'));
//       pixel.classList.add('line');
//       const pixelLine = document.getElementsByClassName('line');
//       for (let i = 0; i < 5; i += 1) {
//         const newPixel = pixelLine[index].appendChild(document.createElement('div'));
//         newPixel.classList.add('pixel');
//       }
//     }
//   }
//   createSquares();
// };

// window.onload = function () {
//   const pixelBoard = document.getElementById('pixel-board');

//   for (let index = 0; index < 5; index += 1) {
//     const pixel = document.createElement('div');
//     const linhaPixel = pixelBoard.appendChild(pixel);
//     linhaPixel.classList.add('line');
//     const pixelLine = document.getElementsByClassName('line');
//     for (let i = 0; i < 5; i += 1) {
//       const newPixel = pixelLine[i].appendChild(document.createElement('div'));
//       newPixel.classList.add('pixel');
//     }
//   }
// }

// const color1 = document.getElementById('color1');
// const color2 = document.getElementById('color2');
// const color3 = document.getElementById('color3');
// const color4 = document.getElementById('color4');
// let colosrSelected = document.getElementsByClassName('selected');

// GERAÇÂO ALEATÓRIA DAS CORES
// const palette = document.querySelectorAll('.color');
// function GerCor() {

//   let cor1 = Math.floor((Math.random() * 249) + 1)
//   let cor2 = Math.floor((Math.random() * 250) + 1)
//   let cor3 = Math.floor((Math.random() * 250) + 1)
//   const collor = `rgb(${cor1}, ${cor2}, ${cor3})`
//   console.log(collor);
//   return collor;
// }
// function setColor() {
//   for (let index = 1; index < palette.length; index += 1) {
//       palette[index].style.backgroundColor = GerCor();
//   }
// }
// setColor();
