import { tns } from 'tiny-slider/src/tiny-slider.js';

tns({
  container: '.carousel-item',
  controlsContainer: '.slider-controls',
  loop: true,
  items: 2,
  slideBy: 'page',
  autoplay: true,
  autoplayButton: false,
  speed: 400,
  mouseDrag: true,
  nav: false,
  gutter: 10,
  swipeAngle: true,
  responsive: {
    768: {
      items: 2
    },
    992: {
      items: 4
    },
    1199: {
      items: 6
    }
  }
});
