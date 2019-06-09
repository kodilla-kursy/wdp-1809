import flickitySlider from './sliders';

flickitySlider('.brands-slider', {
  wrapAround: true,
  pageDots: false,
  groupCells: '100%',
  cellAlign: 'center',
  contain: true
});

flickitySlider('.blog-slider', { wrapAround: true });
// for new flickity use function flickitySlider( carousel-element, { flickity options })
