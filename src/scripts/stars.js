const section = document.querySelector(".section--products")
const starBoxes = document.querySelectorAll(".stars");

section.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('s1')) {
        selectStars(0);
    }
    else if (event.target.classList.contains('s2')) {
        selectStars(1);
    }
    else if (event.target.classList.contains('s3')) {
        selectStars(2);
    }
    else if (event.target.classList.contains('s4')) {
        selectStars(3);
    }
    else if (event.target.classList.contains('s5')) {
        selectStars(4);
    }
    else if (event.target.classList.contains('stars')) {
        deselectStars();
    }   
});

section.addEventListener("click", function(e) {
    if (event.target.classList.contains('s1')) {
        markStars(0);
    }
    else if (event.target.classList.contains('s2')) {
        markStars(1);
    }
    else if (event.target.classList.contains('s3')) {
        markStars(2);
    }
    else if (event.target.classList.contains('s4')) {
        markStars(3);
    }
    else if (event.target.classList.contains('s5')) {
        markStars(4);
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
function unmarkStars(num) {
    for (i=0; i<=4; i++) {
        event.target.parentElement.children[i].classList.remove("permanent");
    }
}