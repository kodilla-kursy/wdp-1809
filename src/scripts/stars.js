const section = document.querySelector(".section--products");
const starBoxes = document.querySelectorAll(".stars");

section.addEventListener("mouseover", function(e) {
    for (i=0; i<=4; i++) {
        if (event.target.classList.contains(`s${i+1}`)) {
            selectStars(i);
        }
        else if (event.target.classList.contains('stars')) {
            deselectStars();
        }   
    }
});

section.addEventListener("click", function(e) {
    for (i=0; i<=4; i++) {
        if (event.target.classList.contains(`s${i+1}`)) {
            markStars(i);
        }
    }
});


// temporary selecting stars
function selectStars(num) {
    desactiveStars();
    for (i=0; i<=num; i++) {
        event.relatedTarget.children[i].classList.add("active")
    }
}

// deselecting stars
function deselectStars() {
    if (event.target.children[0].classList.contains("permanent")){}
    else {
        for (i=0; i<=1; i++) {
            event.target.children[i].classList.add("full");
        }
    }
    for (i=0; i<=4; i++) {
        event.target.children[i].classList.remove("active");
    }
}
// remove stars showing avg value
function desactiveStars() {
    for (i=0; i<=4; i++) {
        event.target.parentElement.children[i].classList.remove("full");
    }
}
// permanent selecting stars
function markStars(num) {
    desactiveStars();
    unmarkStars();
    for (i=0; i<=num; i++) {
        event.target.parentElement.children[i].classList.add("permanent");
    }
}
// unmarking stars (for changing vote)
function unmarkStars() {
    for (i=0; i<=4; i++) {
        event.target.parentElement.children[i].classList.remove("permanent");
    }
}