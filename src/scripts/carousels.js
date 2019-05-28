import Flickity from 'flickity';
// promoted
const carouselCells = document.querySelectorAll('.images');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

const leftCarousel = new Flickity('.hot-deals-carousel', {
  pageDots: true,
  wrapAround: true,
  autoPlay: true,
  prevNextButtons: false,
  draggable: false
});

let rightCarousel = new Flickity('.products-carousel', {
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  draggable: window.innerWidth < 992
});

const pointsBox = document.querySelectorAll('.section--promoted .hot-deals li');

pointsBox.forEach(el => {
  el.addEventListener('mouseleave', () => {
    leftCarousel.playPlayer();
  });
});

carouselCells.forEach(cell =>
  cell.addEventListener('mouseleave', () => {
    leftCarousel.playPlayer();
  })
);

leftArrow.addEventListener('click', () => rightCarousel.previous());

rightArrow.addEventListener('click', () => rightCarousel.next());

window.addEventListener('resize', () => {
  rightCarousel.options.draggable = window.innerWidth < 992;
  rightCarousel.updateDraggable();
});

// brands
const brandsContainer = document.querySelector('.brands-carousel');
const brandsCarousel = new Flickity(brandsContainer, {
  pageDots: false,
  wrapAround: true,
  groupCells: true
});
brandsCarousel.playPlayer();
