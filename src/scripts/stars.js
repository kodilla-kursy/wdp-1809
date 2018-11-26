const section = document.querySelector(".section--products")
const starBoxes = document.querySelectorAll(".stars");
const starBoxesId = [];
const stars = document.querySelectorAll(".star");

for (i=0; i<starBoxes.length; i++) {
    starBoxesId.push(`rate${i+1}`);
}


section.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('s1')) {
        desactiveStars();
        selectStars(0);
    }
    else if (event.target.classList.contains('s2')) {
        desactiveStars();
        selectStars(1);
    }
    else if (event.target.classList.contains('s3')) {
        desactiveStars();
        selectStars(2);
    }
    else if (event.target.classList.contains('s4')) {
        desactiveStars();
        selectStars(3);
    }
    else if (event.target.classList.contains('s5')) {
        desactiveStars();
        selectStars(4);
    }
    else if (event.target.classList.contains('stars')) {
        console.log('out')
        deselectStars();
    }   
});



// temporary selecting stars
function selectStars(num) {
    for (i=0; i<=num; i++) {
        event.relatedTarget.children[i].classList.add("active")
    }
}

// deselecting stars
function deselectStars() {
    for (i=0; i<=1; i++) {
        event.target.children[i].classList.add("full");
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