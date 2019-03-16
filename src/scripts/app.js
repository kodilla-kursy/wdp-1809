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
