'use strict';

const shoppingCartCounter = document.querySelector('.cart-counter');

// Opcja z ingerencją w style CSS, określająca max. wskaźnik
if (shoppingCartCounter.innerText > 99999) {
  shoppingCartCounter.innerHTML = 99999;
}

/* Opcja w pełni JS, bez ingerencji w style CSS
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
*/
