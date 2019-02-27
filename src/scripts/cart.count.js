'use strict';

const shoppingCartCounter = document.querySelector('.cart-counter');

function adjustCartCounterDisplay () {
  let shoppingCartItemsCount = shoppingCartCounter.innerText.length;

  if (shoppingCartItemsCount < 4) {
    shoppingCartCounter.style.fontSize = '13px';
  } else if (shoppingCartItemsCount > 3 && shoppingCartItemsCount < 5) {
    shoppingCartCounter.style.fontSize = '9px';
    shoppingCartCounter.style.paddingTop = '3px';
  } else if (shoppingCartItemsCount === 5) {
    shoppingCartCounter.style.fontSize = '8px';
    shoppingCartCounter.style.paddingTop = '4px';
  } else if (shoppingCartItemsCount > 5) {
    shoppingCartCounter.innerHTML = '...';
    shoppingCartCounter.style.paddingBottom = '3px';
    shoppingCartCounter.style.color = 'rgb(187, 0, 0)';
  }
}

shoppingCartCounter.addEventListener('change', adjustCartCounterDisplay());
