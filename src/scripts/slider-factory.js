function sliderFactory(sliderType, sliderSelector, extraOpts = null) {
  if (typeof sliderType !== 'string') throw new Error('Slider type must be a string!');
  if (document.querySelector(sliderSelector) === null) throw new Error('Slider container not found!');
  
  switch (sliderType) {
    case 'products-slider':
      return new ProductsSlider(sliderSelector, extraOpts.sliderNavSelector);

    case 'posts-slider':
      return new PostsSlider(sliderSelector, extraOpts.sliderNavSelector); 

    default:
        throw new Error('Slider type not found!');
  }
}

class Slider {
  constructor(opts) {
    this.tns = tns(opts);
  }
}

class SliderWithNav extends Slider {
  constructor(opts, sliderNavSelector) {
    super(opts);
    if (typeof sliderNavSelector === 'undefined') throw new Error('Missing slider nav selector!');
    this.navContainer = document.querySelector(sliderNavSelector);
    if (this.navContainer === null) throw new Error('Slider nav container not found!');
    this.tns.events.on('indexChanged', () => this.updateNav());
    this.tns.events.on('newBreakpointEnd', () => this.renderNav());
    this.renderNav();
  }

  renderNav() {
    const tnsInfo = this.tns.getInfo(),
          itemsPerSlide = tnsInfo.items,
          itemsTotal = tnsInfo.slideCount,
          docFragment = document.createDocumentFragment();
    while (this.navContainer.firstChild) {
      this.navContainer.firstChild.removeEventListener('click', (ev) => this.tns.goTo(ev.target.getAttribute('data-index')));
      this.navContainer.removeChild(this.navContainer.firstChild);
    }
    for (let i = 0; i < itemsTotal; i++) {
      if (i%itemsPerSlide === 0) {
        const navItem = document.createElement('li');
        navItem.setAttribute('data-index', i);
        navItem.addEventListener('click', (ev) => this.tns.goTo(ev.target.getAttribute('data-index')));
        docFragment.appendChild(navItem);
      }
    }
    this.navContainer.appendChild(docFragment);
    this.updateNav();
  }

  updateNav() {
    const tnsInfo = this.tns.getInfo(),
          tnsIndex = tnsInfo.index,
          itemsPerSlide = tnsInfo.items,
          navIndex = tnsIndex - tnsIndex%itemsPerSlide;
    if (this.navContainer.querySelector('.active')) 
      this.navContainer.querySelector('.active').classList.remove('active');
    this.navContainer.querySelector(`[data-index="${navIndex}"]`).classList.add('active');
  }
}
class ProductsSlider extends SliderWithNav {
  constructor(sliderSelector, sliderNavSelector) {
    const opts = {
      container: sliderSelector,
      nav: false,
      controls: false,
      autoplay: false,
      loop: false,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: 90,
      gutter: 30,
      responsive: {
        576: {items: 2},
        992: {items: 3},
        1200: {items: 4}
      },
    };
    super(opts, sliderNavSelector);
  }
}

class PostsSlider extends SliderWithNav {
  constructor(sliderSelector, sliderNavSelector) {
    const opts = {
      container: sliderSelector,
      nav: false,
      controls: false,
      autoplay: false,
      loop: false,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: 90,
      gutter: 30,
      responsive: {
        768: {items: 2},
        1200: {items: 3}
      },
    };
    super(opts, sliderNavSelector);
  }
}