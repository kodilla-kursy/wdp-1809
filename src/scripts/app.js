var ratingContainers = document.querySelectorAll('.stars');

ratingContainers.forEach(function (item) {
  for (var i = 0; i < item.children.length; i++) {
    item.children[i].addEventListener('mouseenter', eventMouseIn);
    item.children[i].addEventListener('mouseleave', eventMouseOut);
    item.children[i].addEventListener('click', function (e) {
      e.preventDefault();
      ratingOnClick(e.target);
      removeNextListeners(this);
      removePrevListeners(this);
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
  if (element.previousElementSibling) {
    clearSiblins(element.previousElementSibling);
  }
}

function ratingOnClick (element) {
  element.style.color = '#d58e32';
  if (element.previousElementSibling) {
    ratingOnClick(element.previousElementSibling);
  }
}

function removePrevListeners (element) {
  element.removeEventListener('mouseleave', eventMouseOut);
  element.removeEventListener('mouseenter', eventMouseIn);
  if (element.previousElementSibling) {
    removePrevListeners(element.previousElementSibling);
  }
}

function removeNextListeners (element) {
  element.removeEventListener('mouseleave', eventMouseOut);
  element.removeEventListener('mouseenter', eventMouseIn);
  if (element.nextElementSibling) {
    removeNextListeners(element.nextElementSibling);
  }
}

function eventMouseOut () {
  clearSiblins(this);
}

function eventMouseIn () {
  changeSiblings(this);
}
