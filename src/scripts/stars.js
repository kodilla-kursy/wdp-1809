const section = document.querySelector(".section--products")
const starBoxes = document.querySelectorAll(".stars");
const starClasses = ['s1', 's2', 's3', 's4', 's5']
const starBoxesId = [];

for (i=0; i<starBoxes.length; i++) {
    starBoxesId.push(`rate${i+1}`);
}

section.addEventListener("mouseover", function(e) {
    for (i=0; i<starBoxesId.length; i++) {
        if (event.target.classList.contains('s3')) {
            let num = 3;
            selectStars();
        }
        else {}
    }   
});

function selectStars() {
    event.target.parentElement.children[1].classList.add("active");
    event.target.parentElement.children[2].classList.add("active");
}