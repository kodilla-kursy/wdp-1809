var onresize = function() {
  var width = document.body.clientWidth;
  var groups;

  if (width < 576) {
    groups = 1;
  } else if (width >= 576 && width <= 767) {
    groups = 2;
  } else if (width >= 768 && width < 992) {
    groups = 3;
  } else if (width >= 992) {
    groups = 4;
  }

  var elem = document.querySelector('.products-carousel');
  var productsCarousel = new Flickity(elem, {
    setGallerySize: false,
    groupCells: groups,
    cellAlign: 'left'
  });
};

onresize();
window.addEventListener('resize', onresize);
