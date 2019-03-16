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
  this.mouseDrag = true;
  this.items = 1;
  this.navContainer = navContainer;
  this.autoplayButtonOutput = false;
  this.controls = controls;
  this.controlsContainer = controlsContainer;
  this.edgePadding = 0;
  this.gutter = 0;
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
  '.slider-row',
  false
);

/*eslint-disable */
tns(hotDealsSlider);
tns(promotionalSlider);
/*eslint-disable */
