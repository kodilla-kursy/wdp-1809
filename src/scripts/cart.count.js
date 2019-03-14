'use strict';

const shoppingCartCounter = document.querySelector('.cart-counter');

if (shoppingCartCounter.innerText > 99999) {
  shoppingCartCounter.innerHTML = 99999;
}
