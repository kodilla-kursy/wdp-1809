const features = document.querySelectorAll('.feature-box');

console.log(features);
features[0].classList.add('active');

features.forEach(function (item) {
  let link = document.createElement('a');
  console.log(link);
  link.href = '#';
  link.insertAdjacentElement('afterbegin', item.childNodes[1]);
  link.appendChild(item.childNodes[2]);
  item.appendChild(link);
  item.addEventListener('mouseover', function (event) {
    event.preventDefault();
    features[0].classList.remove('active');
    this.classList.add('active');
  });

  item.addEventListener('mouseout', function (event) {
    event.preventDefault();
    for (let i = 1; i < features.length - 1; i++) {
      item.classList.remove('active');
    }
    features[0].classList.add('active');
  });
});
