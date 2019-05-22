const features = document.querySelectorAll('.feature-box');

console.log(features);
features[0].classList.add('active');

features.forEach(function (item) {
  let link = createElement('a', '#');
  for (let i = 1; i <= 2; i++) {
    appendChild(link, item.childNodes[i]);
  }
  appendChild(item, link);

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

function createElement (itemName, tag) {
  let link = document.createElement(itemName);
  link.href = tag;
  return link;
}

function appendChild (parentNode, childNode) {
  return parentNode.appendChild(childNode);
}
