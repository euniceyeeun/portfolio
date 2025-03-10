window.addEventListener('load', function () {
    document.getElementById('cover').style.display="none";
});

setInterval(updateLoadingMsg, 1000);

function updateLoadingMsg() {
  let loadingMsg = document.getElementById('loading-msg');
  let loadingMsgString = loadingMsg.textContent;
  let status = loadingMsgString.split(".").length - 1;
  if (status == 0) {
    loadingMsg.textContent = "Loading Contiguous Worlds .";
  }
  else if (status == 1) {
    loadingMsg.textContent = "Loading Contiguous Worlds . .";
  }
  else if (status == 2) {
    loadingMsg.textContent = "Loading Contiguous Worlds . . .";
  }
  else {
    loadingMsg.textContent = "Loading Contiguous Worlds";
  }
}


let archiveOpen = false;

let distancesPage = false;
let ptplPage = false;
let filmPage = false;
let infoPage = false;
let homePage = true;

let pages = [distancesPage, ptplPage, filmPage, infoPage, homePage];
let infoKey = 3;
let homeKey = 4;
let currentKey = 4;

let filmVideos = document.getElementById('film-content').querySelectorAll('video');
let newPageObjects = document.getElementsByClassName('new-page');
for (let i = 0; i < newPageObjects.length; i++) {
    newPageObjects[i].addEventListener('click', function() { hideArchive(); }, false);
}

document.getElementById('film-page').addEventListener('scroll', function() {
  posTestFilm();
});

function posTestFilm() {
  for (let i = 0; i < filmVideos.length; i++) {
    let topBound = 100;
    let bottomBound = window.innerHeight - 100;
    let video = filmVideos[i];
    let topPos = video.getBoundingClientRect().top;
    let bottomPos = video.getBoundingClientRect().bottom;
    if (bottomPos < topBound || topPos > bottomBound) {
      video.style.opacity = 0;
    }
    else {
      video.style.opacity = 1;
    }
  }
}

document.getElementById('ptpl-phone-text').addEventListener('scroll', function() {
  posTestPortals();
});

let ptplDivs = [document.getElementById('ptpl-phone-text-title'),document.getElementById('ptpl-phone-text-subtitle'),document.getElementById('ptpl-phone-text-desc-1'),document.getElementById('ptpl-phone-text-desc-2'),document.getElementById('ptpl-phone-text-link')];

function posTestPortals() {
  for (let i = 0; i < ptplDivs.length; i++) {
    let topBound = 50;
    let bottomBound = window.innerHeight - 100;
    let ptplDiv = ptplDivs[i];
    let topPos = ptplDiv.getBoundingClientRect().top;
    let bottomPos = ptplDiv.getBoundingClientRect().bottom;
    if (bottomPos < topBound || topPos > bottomBound) {
      ptplDiv.style.opacity = 0;
    }
    else {
      ptplDiv.style.opacity = 1;
    }
  }
}

document.getElementById('distances-content').addEventListener('scroll', function() {
  posTestDistances();
});

let distancesDivs = [document.getElementById('distances-title'),document.getElementById('distances-subtitle'),document.getElementById('distances-inspo-question'),document.getElementById('distances-inspo-desc'),document.getElementById('distances-love-question'),document.getElementById('distances-love-desc'),document.getElementById('distances-fin-text-1'),document.getElementById('distances-fin-text-2')];
let distanceImgs = document.getElementById('distances-content').querySelectorAll('img');
let distanceVids = document.getElementById('distances-content').querySelectorAll('video');
let distanceIframes = document.getElementById('distances-content').querySelectorAll('iframe');
let distanceCaptions = document.getElementsByClassName('distances-caption');

function posTestDistances() {
  for (let i = 0; i < distancesDivs.length; i++) {
    let topBound = 100;
    let bottomBound = window.innerHeight - 150;
    let distanceDiv = distancesDivs[i];
    let topPos = distanceDiv.getBoundingClientRect().top;
    let bottomPos = distanceDiv.getBoundingClientRect().bottom;
    if (bottomPos < topBound || topPos > bottomBound) {
      distanceDiv.style.opacity = 0;
    }
    else {
      distanceDiv.style.opacity = 1;
    }
  }
  for (let i = 0; i < distanceImgs.length; i++) {
    let topBound = 100;
    let bottomBound = window.innerHeight - 150;
    let img = distanceImgs[i];
    let topPos = img.getBoundingClientRect().top;
    let bottomPos = img.getBoundingClientRect().bottom;
    if (bottomPos < topBound || topPos > bottomBound) {
      img.style.opacity = 0;
    }
    else {
      img.style.opacity = 1;
    }
  }
  for (let i = 0; i < distanceVids.length; i++) {
    let topBound = 100;
    let bottomBound = window.innerHeight - 150;
    let video = distanceVids[i];
    let topPos = video.getBoundingClientRect().top;
    let bottomPos = video.getBoundingClientRect().bottom;
    if (bottomPos < topBound || topPos > bottomBound) {
      video.style.opacity = 0;
    }
    else {
      video.style.opacity = 1;
    }
  }
  for (let i = 0; i < distanceIframes.length; i++) {
    let topBound = 100;
    let bottomBound = window.innerHeight - 150;
    let iframe = distanceIframes[i];
    let topPos = iframe.getBoundingClientRect().top;
    let bottomPos = iframe.getBoundingClientRect().bottom;
    if (bottomPos < topBound || topPos > bottomBound) {
      iframe.style.opacity = 0;
    }
    else {
      iframe.style.opacity = 1;
    }
  }
  for (let i = 0; i < distanceCaptions.length; i++) {
    let topBound = 100;
    let bottomBound = window.innerHeight - 150;
    let caption = distanceCaptions[i];
    let topPos = caption.getBoundingClientRect().top;
    let bottomPos = caption.getBoundingClientRect().bottom;
    if (bottomPos < topBound || topPos > bottomBound) {
      caption.style.opacity = 0;
    }
    else {
      caption.style.opacity = 1;
    }
  }
}

let navTabs = document.getElementsByClassName('nav-tab');
let navOpenPos;
if (window.matchMedia('(hover: hover)').matches) {
  navOpenPos = [-105,-75,-45,-15,-15];
}
else {
  navOpenPos = [-130,-90,-50,-10,-10];
}
let navTabsWithPos = [];
for (let i = 0; i < navTabs.length; i++) {
  navTabsWithPos[i] = [];
  navTabsWithPos[i][0] = navTabs[i];
  navTabsWithPos[i][1] = navOpenPos[i];
}

function returnTransformYValue(element) {
  const matrix = window.getComputedStyle(element).transform;
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
  return parseInt(matrixValues[5]);
}

let archiveTab = document.getElementById('archive-tab');

function openArchive() {

  if (!archiveOpen) {
    archiveTab.style.transform="translateY(40px)";
    for (let i = 0; i < navTabs.length; i++) {
      if (i == currentKey) {
        continue;
      }
      let newTabY = returnTransformYValue(navTabs[i])-105;
      navTabs[i].style.transform=`translateY(${newTabY}px)`;
    }
    if (window.matchMedia('(hover: hover)').matches) {
      resetNavHeight(130);
    }
    else {
      resetNavHeight(155);
    }
    archiveOpen = true;
  }
}

function hideArchive(key) {

  if (archiveOpen) {
    if (window.matchMedia('(hover: hover)').matches) {

      archiveTab.style.transform="translateY(-10px)";
      resetNavHeight(40);
    }

    else {

      archiveTab.style.transform="translateY(-25px)";
      resetNavHeight(50);

    }

    for (let i = 0; i < navTabs.length; i++) {
      if (i == currentKey) {
        continue;
      }
      if (i != key) {
        let newTabY = returnTransformYValue(navTabs[i])+105;
        navTabs[i].style.transform=`translateY(${newTabY}px)`;
      }
    }

    archiveOpen = false;
  }
}

function openTab(key) {
  console.log("key: "+key);

    let newTabY = returnTransformYValue(navTabs[key])-window.innerHeight;
    navTabs[key].style.transform=`translateY(${newTabY}px)`;
    hideArchive(key);

    setTimeout(function() {
      navTabs[key].style.transition="none";
      navTabs[key].style.transform=`translateY(${navOpenPos[key]+105}px)`;

      if (key != homeKey) {

        let targetPage = getPageID(key);
        let targetContent = getContentID(key);

        document.getElementById(`${targetPage}`).style.display="flex";
        document.getElementById(`${targetPage}`).scrollTop=0;
        if (key == 1) {
          document.getElementById('ptpl-phone-text').scrollTop=0;
        }

        setTimeout(function() {
          document.getElementById(`${targetContent}`).style.opacity="1";
        },100);
      }

      if (currentKey != homeKey) {

        let oldPage = getPageID(currentKey);
        let oldContent = getContentID(currentKey);

        document.getElementById(`${oldPage}`).style.display="none";
        document.getElementById(`${oldContent}`).style.opacity="0";

      }

        windowResized();

        setTimeout(function() {
          navTabs[key].style.transition="transform 1s ease";
      },1000)

      document.getElementById(`${getTabID(key)}`).style.display="none";
      let reshowTab = document.getElementById(`${getTabID(currentKey)}`);
      reshowTab.style.display="flex";
      resetTabPos(key);

      pages[currentKey] = false;
      pages[key] = true;
      currentKey = key;

  },1000);

}

function resetTabPos(key) {
  for (let x = 0, i = 0;x < navTabs.length && i < navOpenPos.length; x++) {
    navTabsWithPos[x][1] = navOpenPos[i];
    if (x != key) {
      i++;
    }
  }
  for (let i = 0; i < navTabsWithPos.length; i++) {
    navTabs[i].style.transform=`translateY(${navTabsWithPos[i][1]+105}px)`;
  }
}

function getPageID(key) {
  switch (key) {
    case 0:
      return "distances-page";
      break;
    case 1:
      return "ptpl-page";
      break;
    case 2:
      return "film-page";
      break;
    case 3:
      return "info-page";
      break;
  }
}

function getContentID(key) {
  switch (key) {
    case 0:
      return "distances-content";
      break;
    case 1:
      return "ptpl-content";
      break;
    case 2:
      return "film-content";
      break;
    case 3:
      return "info-content";
      break;
  }
}

function getTabID(key) {
  switch (key) {
    case 0:
      return "distances-tab";
      break;
    case 1:
      return "ptpl-tab";
      break;
    case 2:
      return "film-tab";
      break;
    case 3:
      return "info-tab";
      break;
    case 4:
      return "home-tab";
      break;
  }
}

if (window.matchMedia('(hover: hover)').matches) {

  archiveTab.addEventListener("mouseover",function() {
    if (!archiveOpen) {
      archiveTab.style.transform=`translateY(-25px)`;
      resetNavHeight(50);
    }
  });

  archiveTab.addEventListener("mouseout",function() {
    if (!archiveOpen) {
      archiveTab.style.transform=`translateY(-10px)`;
      resetNavHeight(35);
    }
  });

}

else {
  archiveTab.style.transform=`translateY(-25px)`;

}

archiveTab.addEventListener("click",function() {
  openArchive();
});

for (let i = 0; i < navTabs.length; i++) {

  if (window.matchMedia('(hover: hover)').matches) {

    navTabs[i].addEventListener("mouseover",function() {
      if (archiveOpen) {
        navTabs[i].style.transform=`translateY(${navTabsWithPos[i][1]-15}px)`;
        if (i == 0) {
          resetNavHeight(145);
        }
      }
    });

    navTabs[i].addEventListener("mouseout",function() {
      if (archiveOpen) {
        navTabs[i].style.transform=`translateY(${navTabsWithPos[i][1]}px)`;
        resetNavHeight(130);
      }
    });

  }

  navTabs[i].addEventListener("click",function() {
    openTab(i);
  })
}

let circles = [];
let isResizing = false;
let navHeight;
if (window.matchMedia('(hover: hover)').matches) {
  navHeight = 35;
}
else {
  navHeight = 50;
}

function setup() {
  var movingCircles = createCanvas(windowWidth, windowHeight-navHeight);
  movingCircles.elt.addEventListener('click', function() { hideArchive(); }, false);
  circles.push(new Circle(width/8,height / 2,width / 8));
  circles.push(new Circle(width - width/8,height / 2,width / 8));
  movingCircles.parent("bounce-container");
}

function draw() {
  background('#f5f5f5');
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.update();
    c.display();
    c.checkBoundaryCollision();
    circles[0].checkCollision(circles[1]);
  }
}

function resetNavHeight(x) {
  navHeight=x;
  resizeCanvas(windowWidth, windowHeight-navHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-navHeight);
  for (let i = 0; i < circles.length; i++) {
    circles[i].updatePos(i);
    circles[i].r = 0;
  }
}

let bookSlider = document.getElementById('book-slider');
let ongoingSlider = document.getElementById('ongoing-slider');

bookSlider.addEventListener("input", function() {
  let newBook = "";
  switch (bookSlider.value) {
    case '1':
      newBook="technoskepticism.jpeg";
      break;
    case '2':
      newBook="whitenights.jpg";
      break;
    case '3':
      newBook="philosophyoftranslation.jpg";
      break;
    case '4':
      newBook="thecityanditsuncertainwalls.jpg";
      break;
  }
  document.getElementById('books-display').src=`assets/books/${newBook}`;
});

ongoingSlider.addEventListener("input", function() {
  let newProj = "";
  let newCaption = "";
  switch (ongoingSlider.value) {
    case '1':
      newProj="100k.png";
      newCaption="100K24H, a documented walk around NYC";
      break;
    case '2':
      newProj="symposium.png";
      newCaption="website for SYMPOSIUM PICTURES";
      break;
    case '3':
      newProj="cabinet.png";
      newCaption="cabinet for my new apartment";
      break;
    case '4':
      newProj="empanadas.png";
      newCaption="mastering empanada repulgues";
      break;
  }
  document.getElementById('ongoing-display').src=`assets/ongoing/${newProj}`;
  document.getElementById('ongoing-caption').textContent=newCaption;
});

let phoneButton = document.getElementById('ptpl-button');
let phoneBg = document.getElementById('ptpl-phone-bg');
let phoneImgRoot = "assets/ptpl/";
let phoneImgCount = 5;
let phoneImgIndex = 1;

phoneButton.addEventListener('click',function() {
  phoneButton.style.border="3px solid #000";
  setTimeout(function() {
    if (phoneImgIndex == phoneImgCount + 1) {
      phoneBg.style.backgroundImage = "none";
      phoneBg.style.backgroundColor = "#000000";
    }
    else {
      phoneBg.style.backgroundImage = `url('${phoneImgRoot}${phoneImgIndex}.jpg')`;
    }
    phoneButton.style.border="1px solid #000";
    if (phoneImgIndex == phoneImgCount + 1) {
      phoneImgIndex = 1;
    }
    else {
      phoneImgIndex++;
    }
  },250);
})

class Circle {
  constructor(x,y,r) {
    this.position = new p5.Vector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(3);
    this.maxR = r;
    this.r = 0;
    this.m = r * 0.1;
  }

  update() {
    this.maxR = windowWidth / 8;
    if (this.r <= this.maxR) {
      this.r++;
    }
    else {
    this.position.add(this.velocity);
    }
  }

  updatePos(x) {
    if (x == 1) {
      this.position.x = windowWidth / 8;
    }
    else {
      this.position.x = windowWidth - windowWidth / 8;
    }
  }

  checkBoundaryCollision() {
    if (this.position.x > width - this.r) {
      this.position.x = width - this.r;
      this.velocity.x *= -1;
    } else if (this.position.x < this.r) {
      this.position.x = this.r;
      this.velocity.x *= -1;
    } else if (this.position.y > height - this.r) {
      this.position.y = height - this.r;
      this.velocity.y *= -1;
    } else if (this.position.y < this.r) {
      this.position.y = this.r;
      this.velocity.y *= -1;
    }
  }

  checkCollision(other) {
    // Get distances between the balls components
    let distanceVect = p5.Vector.sub(other.position, this.position);

    // Calculate magnitude of the vector separating the balls
    let distanceVectMag = distanceVect.mag();

    // Minimum distance before they are touching
    let minDistance = this.r + other.r;

    if (distanceVectMag < minDistance) {
      let distanceCorrection = (minDistance - distanceVectMag) / 2.0;
      let d = distanceVect.copy();
      let correctionVector = d.normalize().mult(distanceCorrection);
      other.position.add(correctionVector);
      this.position.sub(correctionVector);

      // get angle of distanceVect
      let theta = distanceVect.heading();
      // precalculate trig values
      let sine = sin(theta);
      let cosine = cos(theta);

      /* bTemp will hold rotated ball this.positions. You
       just need to worry about bTemp[1] this.position*/
      let bTemp = [new p5.Vector(), new p5.Vector()];

      /* this ball's this.position is relative to the other
       so you can use the vector between them (bVect) as the
       reference point in the rotation expressions.
       bTemp[0].this.position.x and bTemp[0].this.position.y will initialize
       automatically to 0.0, which is what you want
       since b[1] will rotate around b[0] */
      bTemp[1].x = cosine * distanceVect.x + sine * distanceVect.y;
      bTemp[1].y = cosine * distanceVect.y - sine * distanceVect.x;

      // rotate Temporary velocities
      let vTemp = [new p5.Vector(), new p5.Vector()];

      vTemp[0].x = cosine * this.velocity.x + sine * this.velocity.y;
      vTemp[0].y = cosine * this.velocity.y - sine * this.velocity.x;
      vTemp[1].x = cosine * other.velocity.x + sine * other.velocity.y;
      vTemp[1].y = cosine * other.velocity.y - sine * other.velocity.x;

      /* Now that velocities are rotated, you can use 1D
       conservation of momentum equations to calculate
       the final this.velocity along the x-axis. */
      let vFinal = [new p5.Vector(), new p5.Vector()];

      // final rotated this.velocity for b[0]
      vFinal[0].x =
        ((this.m - other.m) * vTemp[0].x + 2 * other.m * vTemp[1].x) /
        (this.m + other.m);
      vFinal[0].y = vTemp[0].y;

      // final rotated this.velocity for b[0]
      vFinal[1].x =
        ((other.m - this.m) * vTemp[1].x + 2 * this.m * vTemp[0].x) /
        (this.m + other.m);
      vFinal[1].y = vTemp[1].y;

      // hack to avoid clumping
      bTemp[0].x += vFinal[0].x;
      bTemp[1].x += vFinal[1].x;

      /* Rotate ball this.positions and velocities back
       Reverse signs in trig expressions to rotate
       in the opposite direction */
      // rotate balls
      let bFinal = [new p5.Vector(), new p5.Vector()];

      bFinal[0].x = cosine * bTemp[0].x - sine * bTemp[0].y;
      bFinal[0].y = cosine * bTemp[0].y + sine * bTemp[0].x;
      bFinal[1].x = cosine * bTemp[1].x - sine * bTemp[1].y;
      bFinal[1].y = cosine * bTemp[1].y + sine * bTemp[1].x;

      // update balls to screen this.position
      other.position.x = this.position.x + bFinal[1].x;
      other.position.y = this.position.y + bFinal[1].y;

      this.position.add(bFinal[0]);

      // update velocities
      this.velocity.x = cosine * vFinal[0].x - sine * vFinal[0].y;
      this.velocity.y = cosine * vFinal[0].y + sine * vFinal[0].x;
      other.velocity.x = cosine * vFinal[1].x - sine * vFinal[1].y;
      other.velocity.y = cosine * vFinal[1].y + sine * vFinal[1].x;
    }
  }

  display() {
    noStroke();
    fill('#FF6803');
    ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
  }
}
