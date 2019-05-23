var ratingContainers = document.querySelectorAll('.stars');

ratingContainers.forEach(function (item) {
  for (var i = 0; i < item.children.length; i++) {
    item.children[i].addEventListener('mouseenter', function (e) {
      e.preventDefault();
      changeSiblings(e.target);
    });
    item.children[i].addEventListener('mouseleave', function (e) {
      e.preventDefault();
      clearSiblins(e.target);
    });
    item.children[i].addEventListener('click', function (e) {
      e.preventDefault();
      ratingOnClick(e.target);
    });
  }
});

function changeSiblings (element) {
  element.style.color = '#d58e32';
  element.style.fontWeight = 900;
  if (element.previousElementSibling) {
    changeSiblings(element.previousElementSibling);
  }
}

function clearSiblins (element) {
  if (element.classList.contains('full')) {
    element.style.color = '#2a2a2a';
    element.style.fontWeight = 900;
  } else {
    element.style.color = '';
    element.style.fontWeight = 400;
  }
  if (element.classList.contains('active')) {
    element.style.fontWeight = 900;
  }
  if (element.previousElementSibling) {
    clearSiblins(element.previousElementSibling);
  }
}

function ratingOnClick (element) {
  element.classList.toggle('active');
  if (element.previousElementSibling) {
    ratingOnClick(element.previousElementSibling);
  }
}
