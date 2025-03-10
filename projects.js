const magicCoordinatesImgs = [
  'MAGIC COORDINATES.png',
  'MAGIC COORDINATES2.png',
  'MAGIC COORDINATES4.png'
];

const books24Imgs = [
  '2024BOOKS2.png',
  '2024BOOKS.png'
];

const camusImgs = [
  'CAMUS.png',
  'CAMUS2.png',
  'CAMUS3.png'
]

let magicCoordinatesIndex = 0;
let vagaryIndex = 0;
let tiempoPerdidoIndex = 0;
let books24Index = 0;
let camusIndex = 0;

const magicCoordinates = document.getElementById('magic-coordinates');
const books24 = document.getElementById('books-24');
const camus = document.getElementById('camus');

magicCoordinates.addEventListener('click', function() { changeImage("magicCoordinates") });
books24.addEventListener('click', function() { changeImage("books24") });
camus.addEventListener('click', function() { changeImage("camus") });

function changeImage(project) {
  switch (project) {
    case "magicCoordinates":
      magicCoordinatesIndex = (magicCoordinatesIndex + 1) % magicCoordinatesImgs.length;
      magicCoordinates.src = "assets/" + magicCoordinatesImgs[magicCoordinatesIndex];
      break;
    case "books24":
      books24Index = (books24Index + 1) % books24Imgs.length;
      books24.src = "assets/" + books24Imgs[books24Index];
      break;
    case "camus":
      camusIndex = (camusIndex + 1) % camusImgs.length;
      camus.src = "assets/" + camusImgs[camusIndex];
      break;
  }
}

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

const ptplLink = document.getElementById('ptpl-link');
const ptplPreview = document.getElementById('ptpl-preview');
const pigeonsLink = document.getElementById('pigeons-link');
const pigeonsPreview = document.getElementById('pigeons-preview');

ptplLink.addEventListener("mouseover",showPtplPreview);
ptplLink.addEventListener("mouseout",hidePtplPreview);
pigeonsLink.addEventListener("mouseover",showPigeonsPreview);
pigeonsLink.addEventListener("mouseout",hidePigeonsPreview);

function showPtplPreview() {
  ptplPreview.style.display="block";
}

function hidePtplPreview() {
  ptplPreview.style.display="none";
}

function showPigeonsPreview() {
  pigeonsPreview.style.display="block";
}

function hidePigeonsPreview() {
  pigeonsPreview.style.display="none";
}
