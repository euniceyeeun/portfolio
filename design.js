let showMobileNav = false;
const navCircle = document.getElementById('nav-circle');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-item');

navCircle.addEventListener('click',function() { mobileNavToggle() });

function mobileNavToggle() {
  if (showMobileNav == false) {
    nav.style.opacity=1;
    nav.style.height="100dvh";
    setTimeout(fadeInNavItems,500);
    showMobileNav = true;
  }
  else {
    fadeOutNavItems();
    setTimeout(function() {
      nav.style.height="0dvh";
      setTimeout(function() {
        nav.style.opacity=0;
      },1000);
    },500);
    showMobileNav = false;
  }
}

function fadeInNavItems() {
  navItems.forEach(function(navItem) {
    navItem.style.opacity=1;
  })
}

function fadeOutNavItems() {
  navItems.forEach(function(navItem) {
    navItem.style.opacity=0;
  })
}

const magicCoordinatesImgs = [
  'MAGIC COORDINATES.png',
  'MAGIC COORDINATES2.png',
  'MAGIC COORDINATES4.png'
];

const tiempoPerdidoImgs = [
  'Tiempo-Perdido.jpg',
  'Tiempo-Perdido2.jpg',
  'Tiempo-Perdido3.jpg',
  'Tiempo-Perdido4.jpg',
  'Tiempo-Perdido5.jpg'
];

const books24Imgs = [
  '2024BOOKS2.png',
  '2024BOOKS.png'
];

const symposiumImgs = [
  'SYMPOSIUM-SITE.png'
]

const camusImgs = [
  'CAMUS.png',
  'CAMUS2.png',
  'CAMUS3.png'
]

let magicCoordinatesIndex = 0;
let tiempoPerdidoIndex = 0;
let books24Index = 0;
let symposiumIndex = 0;
let camusIndex = 0;

const magicCoordinates = document.getElementById('magic-coordinates');
const tiempoPerdido = document.getElementById('tiempo-perdido');
const books24 = document.getElementById('books-24');
const symposium = document.getElementById('symposium');
const camus = document.getElementById('camus');

magicCoordinates.addEventListener('click', function() { changeImage("magicCoordinates") });
tiempoPerdido.addEventListener('click', function() { changeImage("tiempoPerdido") });
books24.addEventListener('click', function() { changeImage("books24") });
symposium.addEventListener('click', function() { changeImage("symposium") });
camus.addEventListener('click', function() { changeImage("camus") });

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
    case "symposium":
      symposiumIndex = (symposiumIndex + 1) % symposiumImgs.length;
      symposium.src = "assets/" + symposiumImgs[symposiumIndex];
      break;
    case "camus":
      camusIndex = (camusIndex + 1) % camusImgs.length;
      camus.src = "assets/" + camusImgs[camusIndex];
      break;
  }
}
