const createCarousel = (carouselContainer, navContainer) => {
  const carouselOptions = {
    container: carouselContainer,
    mode: 'gallery',
    autoplay: false,
    controls: false,
    items: 1,
    navContainer: navContainer,

    navAsThumbnails: false
  };

  // eslint-disable-next-line no-undef
  const carousel = tns(carouselOptions);
  const info = carousel.getInfo();

  hideInactiveNavs(info.navItems, info.pages);
};

const hideInactiveNavs = (navs, pageCount) => {
  for (let i = 0; i < navs.length; i++) {
    const element = navs[i];
    if (i >= pageCount) element.style = 'display: none';
  }
};

createCarousel('.carousel-hot-deals', '.hot-deals-carousel-nav');
