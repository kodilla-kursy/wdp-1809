import flickitySlider from './sliders';
import $ from 'jquery';
import './bootstrap.min.js';
import { starsAction } from '/scripts/starsAction';

flickitySlider('.blog-slider', { wrapAround: true });
// for new flickity use function flickitySlider( carousel-element, { flickity options })
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
