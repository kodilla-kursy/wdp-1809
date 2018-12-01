'use strict';

// MENU-BAR small screen dropdown
(function(){ 
    var showBtn = document.querySelector('.category-list-show');
    var dropdownList = document.getElementById('menu-dropdown');

    showBtn.addEventListener('click', function() {
        dropdownList.classList.toggle('drop');
        showBtn.classList.toggle('active');
    });
})();  

//TINY-SLIDER - NEW FURNITURE

(function(){
    var productsSlider = tns({
        container: '.products-slider',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: false,
        navContainer: '.products-carousel-indicators',
        responsive: {
            768: {
            items: 2,
            slideBy: 2,
            },
            992: {
            items: 3,
            slideBy: 3,
            },
            1200: {
            items: 4,
            slideBy: 4,
            }
          }
    });
})();  