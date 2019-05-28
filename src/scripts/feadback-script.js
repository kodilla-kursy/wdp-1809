/* jshint ignore:start */
/* --ignore-pattern Mustashe Flickity( */
/* --ignore-pattern '!mustache.js' */
import * as Mustache from 'mustache';
import Flickity from 'flickity';

const slajdData = [
  {
    id: 'carousel-cell1',
    image: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    customer: '<p>John Smith</p>',
    company: '<p>Furshshope Client</p>',
    description:
      '<p> Morbi scelerisque dignissim ipsum vel semper. Nullam vel felis ac elit ultrices consequat.\n' +
      '            Donec eu vulputate tortor, ultrices laoreet nulla. Cras tincidunt consectetur libero, vitae ultricies est molestie sed.\n' +
      '            </p>'
  },
  {
    id: 'carousel-cell2',
    image: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    customer: '<p>Ljan Terrasse</p>',
    company: '<p>Avideo Client</p>',
    description:
      '<p> Morbi scelerisque dignissim ipsum vel semper. Nullam vel felis ac elit ultrices consequat.\n' +
      '            Donec eu vulputate tortor, ultrices laoreet nulla. Cras tincidunt consectetur libero, vitae ultricies est molestie sed.\n' +
      '            </p>'
  },
  {
    id: 'carousel-cell3',
    image: 'https://randomuser.me/api/portraits/women/48.jpg',
    customer: '<p>Luisa Terrasse</p>',
    company: '<p>Avideo Client</p>',
    description:
      '<p> Morbi scelerisque dignissim ipsum vel semper. Nullam vel felis ac elit ultrices consequat.\n' +
      '            Donec eu vulputate tortor, ultrices laoreet nulla. Cras tincidunt consectetur libero, vitae ultricies est molestie sed.\n' +
      '            </p>'
  }
];

(function () {
  let templateList = document.getElementById('template-slaider-list').innerHTML;
  Mustache.parse(templateList);
  let listItems = '';
  let slajdDataCount = slajdData.length;

  for (let i = 0; i < slajdDataCount; i++) {
    listItems += Mustache.render(templateList, slajdData[i]);
  }

  let results = document.getElementById('results');
  results.insertAdjacentHTML('beforeend', listItems);

  let slajd = new Flickity('.main-carousel');

  slajd.option({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    hash: false,
    adaptiveHeight: true
  });

  let slaiders = document.querySelectorAll('#sliaders li');

  slaiders.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      for (let i = 0; i < slaiders.length; i++) {
        slaiders[i].classList.remove('active');
      }

      // item.classList.remove('active');
      this.classList.add('active');
      let slider = this.getAttribute('data-move');
      slajd.select(slider);
    });
  });

  let slidList = document.querySelectorAll('#sliaders');
  for (let i = 0; i < slidList.length; i++) {
    slidList[i].addEventListener('click', function (event) {
      event.stopPropagation();
    });
  }
})();
/* jshint ignore:end */
