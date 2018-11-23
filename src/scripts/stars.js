const section = document.querySelector(".section--products")
const starBoxes = document.querySelectorAll(".stars");
const starBoxesId = [];

for (i=0; i<starBoxes.length; i++) {
    starBoxesId.push(`#rate${i+1}`);
}

section.addEventListener("mouseover", selectStars(e))

console.log(section);

function selectStars(e) {
    console.log(e.target);
}



/*for (i=0; i<starBoxesId.length; i++) {
    const starBox = document.querySelector("#"+starBoxesId[i]);
    starBox.addEventListener("mouseover", function() {

        console.log([starBox])
    })
}*/

  