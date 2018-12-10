// PRODUCT SECTION RATING STAR MECHANISM -- WDP181103-19

const productsSection = document.querySelector(".section--products");
const starBoxes = document.querySelectorAll(".stars");

productsSection.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.relatedTarget.children);
        let index = arr.indexOf(event.target);
        deactivateStars();
        setStarsClass(index, event.relatedTarget, "active");
    }
    else if (event.target.classList.contains('stars')) {
        deselectStars();
    }   
});

productsSection.addEventListener("click", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.target.parentElement.children);
        let index = arr.indexOf(event.target);
        event.preventDefault();
        deactivateStars();
        unsetStarsClass(4, event.target.parentElement, "permanent");
        setStarsClass(index, event.target.parentElement,"permanent");
    }
});

// deselecting stars
function deselectStars() {
    if (! event.target.children[0].classList.contains("permanent")){
        setStarsClass(1, event.target, "full");
    }
    unsetStarsClass (4, event.target, "active");
}
// remove stars showing avg value
function deactivateStars() {
    unsetStarsClass (4, event.target.parentElement, "full");
}

// helper functions

function setStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.add(className);
        }
}

function unsetStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.remove(className);
        }
}


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
    var indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    var productsSlider = tns({
        container: '.products-slider',
        items: 1,
        slideBy: 'page',
        mouseDrag: true,
        controls: false,
        navContainer: '.products-carousel-indicators',
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
          }
    });

    var feedbackSlider = tns({
        container: '.feedback-wrapper',
        autoWidth: true,
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        navContainer: '.feedback-indicators',
    });

    const brandsSlider = tns({
        container: '.brands-slider',
        loop: true,
        items: 1,
        slideBy: 'page',
        nav: false,    
        autoplay: true,
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: ".brands-carousel-controls",
        responsive: {
            450: {
                items: 2,
            },
            640: {
                items: 3,
            },
            768: {
                items: 4,
            },
            995: {
                items: 6,
            }
        }
      });

})();  