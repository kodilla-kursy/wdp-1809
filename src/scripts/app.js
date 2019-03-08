import { tns } from 'tiny-slider';

const myOptions = {
  container: '.carousel-furniture',
  items: 1,
  autoplay: false
};

const slider = tns(myOptions);

console.log(slider.isOn);
