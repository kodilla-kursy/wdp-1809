import { tns } from 'tiny-slider/src/tiny-slider.js';

tns({
  container: '.blog-carousel-inner',
  navContainer: '.blog-dots-controls',
  controls: false,
  loop: true,
  responsive: {
    350: {
      items: 1
    },
    992: {
      items: 2
    },
    1199: {
      items: 3
    }
  },
  items: 3,
  slideBy: 'page',
  autoplay: true,
  autoplayButton: false,
  speed: 400,
  mouseDrag: true,
  nav: true,
  gutter: 20,
  swipeAngle: true
});
