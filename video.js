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

const ptplVids = [
  'ptpl-demo.mp4',
  'nachoboulders.mp4'
];

let ptplIndex = 0;

const ptpl = document.getElementById('ptpl');

ptpl.addEventListener('click', function() { changeVid("ptpl") });

function changeVid(project) {
  switch (project) {
    case "ptpl":
      ptplIndex = (ptplIndex + 1) % ptplVids.length;
      ptpl.src = "assets/" + ptplVids[ptplIndex];
      break;
    }
  }
