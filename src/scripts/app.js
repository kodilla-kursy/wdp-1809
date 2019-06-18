import detectmob from './scripts';

import flickitySlider from './sliders';
import $ from 'jquery';
import './bootstrap.min.js';
import { starsAction } from '/scripts/starsAction';
detectmob();

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

flickitySlider('.brands-slider', {
  wrapAround: true,
  pageDots: false,
  groupCells: '100%',
  cellAlign: 'center',
  contain: true
});

flickitySlider('.blog-slider', { wrapAround: true });

starsAction();

// Product section sliders in tabs

const bedSlider = flickitySlider('#bed', { wrapAround: true });
const chairSlider = flickitySlider('#chair', { wrapAround: true });
const sofaSlider = flickitySlider('#sofa', { wrapAround: true });
const tableSlider = flickitySlider('#table', { wrapAround: true });
const diningSlider = flickitySlider('#dining', { wrapAround: true });

$(document).ready(function () {
  $('.nav-tabs a').click(function () {
    $(this).tab('show');
  });
  $('.nav-tabs a').on('shown.bs.tab', function (e) {
    const slider = e.target.dataset.slider;
    switch (slider) {
      case 'bedSlider':
        bedSlider.resize();
        break;
      case 'chairSlider':
        chairSlider.resize();
        break;
      case 'sofaSlider':
        sofaSlider.resize();
        break;
      case 'tableSlider':
        tableSlider.resize();
        break;
      case 'diningSlider':
        diningSlider.resize();
    }
  });
});
