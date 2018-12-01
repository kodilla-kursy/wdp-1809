// PRODUCT SECTION RATING STAR MECHANISM -- WDP181103-19

const productsSection = document.querySelector(".section--products");
const starBoxes = document.querySelectorAll(".stars");

productsSection.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.relatedTarget.children);
        let index = arr.indexOf(event.target);
        deactivateStars();
        setStarsClass(index, "relatedTarget", "active");
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
        unsetStarsClass(4, "parentElement", "permanent");
        setStarsClass(index,"parentElement","permanent");
    }
});

// deselecting stars
function deselectStars() {
    if (! event.target.children[0].classList.contains("permanent")){
        setStarsClass(1, "target", "full");
    }
    unsetStarsClass (4, "target", "active");
}
// remove stars showing avg value
function deactivateStars() {
    unsetStarsClass (4, "parentElement", "full");
}

// helper functions

function setStarsClass(limit, elem, className) {
    if (elem=="relatedTarget") {
        for (i=0; i<=limit; i++) {
            event.relatedTarget.children[i].classList.add(className);
        }
    }
    else if (elem=="target") {
        for (i=0; i<=limit; i++) {
            event.target.children[i].classList.add(className);
        }
    }
    else if (elem=="parentElement") {
        for (i=0; i<=limit; i++) {
            event.target.parentElement.children[i].classList.add(className);
        }
    }
}

function unsetStarsClass(limit, elem, className) {
    if (elem=="target") {
        for (i=0; i<=limit; i++) {
            event.target.children[i].classList.remove(className);
        }
    }
    else if (elem=="parentElement") {
        for (i=0; i<=limit; i++) {
            event.target.parentElement.children[i].classList.remove(className);
        }
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
