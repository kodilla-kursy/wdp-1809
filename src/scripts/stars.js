const section = document.querySelector(".section--products")
const starBoxes = document.querySelectorAll(".stars");
const starBoxesId = [];
const stars = document.querySelectorAll(".star");

for (i=0; i<starBoxes.length; i++) {
    starBoxesId.push(`rate${i+1}`);
}

section.addEventListener("mouseover", function(e) {
    //for (i=0; i<starBoxesId.length; i++) {
        if (event.target.classList.contains('s1')) {
            event.target.parentElement.children[0].classList.add("active");
            console.log(event.relatedTarget)
        }
        else if (event.target.classList.contains('s2')) {
            event.relatedTarget.children[0].classList.add("active");
            event.relatedTarget.children[1].classList.add("active");
        }
        else if (event.target.classList.contains('s3')) {
            event.relatedTarget.children[0].classList.add("active");
            event.relatedTarget.children[1].classList.add("active");
            event.relatedTarget.children[2].classList.add("active");
        }
        else if (event.target.classList.contains('s4')) {
            event.relatedTarget.children[0].classList.add("active");
            event.relatedTarget.children[1].classList.add("active");
            event.relatedTarget.children[2].classList.add("active");
            event.relatedTarget.children[3].classList.add("active");
        }
        else if (event.target.classList.contains('s5')) {
            event.relatedTarget.children[0].classList.add("active");
            event.relatedTarget.children[1].classList.add("active");
            event.relatedTarget.children[2].classList.add("active");
            event.relatedTarget.children[3].classList.add("active");
            event.relatedTarget.children[4].classList.add("active");
        }
    }   
//}
);
