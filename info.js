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

// const designer = document.getElementById('designer');
// const writer = document.getElementById('writer');
// const filmmaker = document.getElementById('filmmaker');
// const programmer = document.getElementById('programmer');
//
// designer.onclick=function() {
//   changeImg('designer');
// };
// writer.onclick=function() {
//   changeImg('writer');
// };
// filmmaker.onclick=function() {
//   changeImg('filmmaker');
// };
// programmer.onclick=function() {
//   changeImg('programmer');
// };
//
// function changeImg(occupation) {
//   switch (occupation) {
//     case 'designer':
//       console.log("d");
//       break;
//     case 'writer':
//       console.log("w");
//       break;
//     case 'filmmaker':
//       console.log("f");
//       break;
//     case 'programmer':
//       console.log("p");
//       break;
//   }
// }
