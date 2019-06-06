import flickitySlider from './sliders';
console.log('hello');

const hotDealsSlider = flickitySlider('.hot-deals-slider', {
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  draggable: false,
  autoPlay: true
});

const hotDealsDots = document.querySelectorAll('.hot-deals__dot');

for (let i = 0; i < hotDealsDots.length; i++) {
  hotDealsDots[i].addEventListener('click', () => hotDealsSlider.select(i));
}

hotDealsSlider.on('change', index => {
  clearDots(hotDealsDots);
  hotDealsDots[index].classList.add('active');
});

function clearDots (dots) {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('active')) dots[i].classList.remove('active');
  }
}

const distinguishSlider = flickitySlider('.distinguish-slider', {
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true
});

const distinguishSliderNav = document.querySelectorAll('.distinguish__buttons');
const distinguishSliderNavPrev = distinguishSliderNav[1];
const distinguishSliderNavNext = distinguishSliderNav[0];

distinguishSliderNavPrev.addEventListener('click', () =>
  distinguishSlider.previous(true)
);

distinguishSliderNavNext.addEventListener('click', () => distinguishSlider.next(true));
