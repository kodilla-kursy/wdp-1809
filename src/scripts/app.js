console.log('hello');

/* Resising cart counter font  if  text overflows div element */

function isOverflown (element) {
  return element.scrollWidth > element.clientWidth;
}

let cartCounter = document.querySelector('.cart-counter');
cartCounter.style.fontSize = '14px';

let cartFontSize = parseInt(cartCounter.style.fontSize);
console.log(cartFontSize);
for (let i = cartFontSize; i >= 0; i--) {
  let counterOverflown = isOverflown(cartCounter);
  if (!counterOverflown) {
    console.log('no overflow');
  } else {
    cartFontSize--;
    console.log(cartFontSize);
    cartCounter.style.fontSize = cartFontSize + 'px';
    cartCounter.style.paddingLeft = '2px';
  }
}
