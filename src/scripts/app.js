import flickitySlider from './sliders';
import { starsAction } from '/scripts/starsAction';

console.log('hello');

flickitySlider('.blog-slider', { wrapAround: true });
// for new flickity use function flickitySlider( carousel-element, { flickity options })
starsAction();
