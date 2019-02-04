console.log('hello');

/* Resising cart counter font size when text is overflowing */
let cartCounter = document.querySelector('.cart-counter');
cartCounter.style.fontSize = '14px';
let cartFontSize = parseInt(cartCounter.style.fontSize);

function isOverflown (element) {
  if (!(element.scrollWidth > element.clientWidth)) {
    return 0;
  } else {
    // Decrease font size
    cartFontSize--;
    console.log(cartFontSize);
    cartCounter.style.fontSize = cartFontSize + 'px';
    cartCounter.style.paddingLeft = '3px';
    setTimeout(isOverflown(element), 5000);
  }
}
isOverflown(cartCounter);
