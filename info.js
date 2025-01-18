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
