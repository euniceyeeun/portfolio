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
