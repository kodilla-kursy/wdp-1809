function buttonsOutlineClickCallback (event) {
  event.currentTarget.classList.toggle('btn-outline-active');
}
var buttonsOutline = document.querySelectorAll('.btn-outline');
for (var i = 0; i < buttonsOutline.length; i++) {
  buttonsOutline[i].addEventListener('click', buttonsOutlineClickCallback, false);
}
