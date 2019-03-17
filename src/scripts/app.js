function Slider (
  carouselContainer,
  navContainer,
  controls,
  controlsContainer,
  autoplay
) {
  this.container = carouselContainer;
  this.autoplay = autoplay;
  this.controls = false;
  this.navContainer = navContainer;
  this.autoplayButtonOutput = false;
  this.controls = controls;
  this.controlsContainer = controlsContainer;
  this.autoplayTimeout = 3000;
}

var hotDealsSlider = new Slider(
  '.carousel-hot-deals',
  '.hot-deals-carousel-nav',
  false,
  false,
  true
);

var promotionalSlider = new Slider(
  '.promotional-slider',
  false,
  true,
  '.control-row',
  false
);

/*eslint-disable */
tns(hotDealsSlider);
tns(promotionalSlider);
/*eslint-disable */

const createCarousel = (carouselContainer, navContainer) => {
  const carouselOptions = {
    container: carouselContainer,
    mode: 'gallery',
    autoplay: false,
    controls: false,
    mouseDrag: true,
    items: 1,
    navContainer: navContainer,
    responsive: {
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    navAsThumbnails: false
  };

  // eslint-disable-next-line no-undef
  const carousel = tns(carouselOptions);
  const info = carousel.getInfo();

  prepareNavs(info.navItems, info.pages);
};

const prepareNavs = (navs, pageCount) => {
  for (let i = 0; i < navs.length; i++) {
    const element = navs[i];
    if (i >= pageCount) element.style = 'display: none';
  }
};

createCarousel('.carousel-furniture', '.furniture-carousel-nav');
