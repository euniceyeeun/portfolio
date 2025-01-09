const magicCoordinatesImgs = [
  'MAGIC COORDINATES.png',
  'MAGIC COORDINATES2.png',
  'MAGIC COORDINATES4.png'
];

const tiempoPerdidoImgs = [
  'Tiempo-Perdido.jpg',
  'Tiempo-Perdido2.jpg',
  'Tiempo-Perdido3.jpg',
];

const books24Imgs = [
  '2024BOOKS2.png',
  '2024BOOKS.png'
];

let magicCoordinatesIndex = 0;
let tiempoPerdidoIndex = 0;
let books24Index = 0;

const magicCoordinates = document.getElementById('magic-coordinates');
const tiempoPerdido = document.getElementById('tiempo-perdido');
const books24 = document.getElementById('books-24');

magicCoordinates.addEventListener('click', function() { changeImage("magicCoordinates") });
tiempoPerdido.addEventListener('click', function() { changeImage("tiempoPerdido") });
books24.addEventListener('click', function() { changeImage("books24") });

function changeImage(project) {
  switch (project) {
    case "magicCoordinates":
      magicCoordinatesIndex = (magicCoordinatesIndex + 1) % magicCoordinatesImgs.length;
      magicCoordinates.src = "assets/" + magicCoordinatesImgs[magicCoordinatesIndex];
      break;
    case "tiempoPerdido":
      tiempoPerdidoIndex = (tiempoPerdidoIndex + 1) % tiempoPerdidoImgs.length;
      tiempoPerdido.src = "assets/" + tiempoPerdidoImgs[tiempoPerdidoIndex];
      break;
    case "books24":
      books24Index = (books24Index + 1) % books24Imgs.length;
      books24.src = "assets/" + books24Imgs[books24Index];
      break;
  }
}
