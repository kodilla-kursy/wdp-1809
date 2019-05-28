import './carousels';
console.log('hello');

// toggle-menu on mobile

var toggleSidebar = function() {
  var menuMobile = document.querySelector('#toggle-menu');
  menuMobile.classList.toggle('active');
};

var hamburgerMobile = document.querySelector('#hamburger-on-mobile');
var hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerMobile.addEventListener('click', toggleSidebar);
hamburgerToggle.addEventListener('click', toggleSidebar);

// Enable carousel
document.addEventListener('DOMContentLoaded', initCarousel);

function initCarousel() {
  let groupCells = 1;

  if (window.matchMedia('(min-width:767px) and (max-width: 992px)').matches) {
    groupCells = 2;
  } else if (window.matchMedia('(min-width: 993px) and (max-width: 1199px)').matches) {
    groupCells = 3;
  } else if (window.matchMedia('(min-width: 1200px)').matches) {
    groupCells = 4;
  }

  var flkty = new Flickity('.main-carousel', {
    groupCells: groupCells
  });
}
//  star

document.querySelectorAll('.stars').forEach(productRating => {
  productRating.querySelectorAll('.star').forEach(el => {
    el.addEventListener('click', e => {
      if (!e.target.matches('.star')) return;
      e.preventDefault();

      const starID = parseInt(e.target.getAttribute('data-star'));
      productRating.setAttribute('data-rated', starID);
      removeBlackStars(productRating);
    });
    el.addEventListener('mouseover', e => {
      if (!e.target.matches('.star')) return;
      const starID = parseInt(e.target.getAttribute('data-star'));
      setActiveStars(productRating, starID || 0);
    });
    el.addEventListener('mouseleave', e => {
      const rate = productRating.getAttribute('data-rated');
      setActiveStars(productRating, rate || 0);
    });
  });
});

const setActiveStars = (starsNode, rate) => {
  const starsInContainer = starsNode.querySelectorAll('.star');
  const stars = Array.prototype.slice.call(starsInContainer);
  for (let i = 0; i < stars.length; i++) {
    if (i < rate) {
      stars[i].classList.add('is-active');
    } else {
      stars[i].classList.remove('is-active');
    }
  }
};

const removeBlackStars = starsNode => {
  const blackStars = starsNode.querySelectorAll('.full');
  for (let i = 0; i < blackStars.length; i++) {
    blackStars[i].classList.remove('full');
  }
};
