'use strict'

function Stars() {

    function toggleStar(event) {
        var child = event.target;
        var parent = child.parentNode;
        var starCounter = 0;
        // sprawdź czy element ma klasę ".star"
        if (child.classList.contains('star')) {
            // policz liczbę gwiazdek, która mają być zaznaczone
            while ((child = child.previousElementSibling) != null) starCounter++;
            //zaznacz gwiazdki  
            for (var a = 0; a <= starCounter; a++) {
                parent.children[a].classList.toggle('markedStar');
            }
        }
    };

    function clearAllStars(event) {
        var child = event.target;
        var parent = child.parentNode;
        var children = parent.children;
        // sprawdź czy element ma klasę ".star"
        if (child.classList.contains('star')) {
            // usuń klasy .markedStar i .full na wszystkich gwiazdkach
            for (var i = 0; i < children.length; i++) {
                children[i].classList.remove('markedStar','full');
            }
        }
    };

    function starMouseOverAndOut(event) {
        if (event.target.parentElement.classList.contains('highlightedStars')) {
            return;
        } else if (event.target.parentElement.classList.contains('stars')) {
            toggleStar(event);
        } else return;
    };

    document.addEventListener('mouseover', function (event) {
        starMouseOverAndOut(event);
    }, false);

    document.addEventListener('mouseout', function (event) {
        starMouseOverAndOut(event);
    }, false);

    document.addEventListener('click', function (event) {
        clearAllStars(event)
        toggleStar(event);
        event.target.parentElement.classList.add('highlightedStars');
    }, false);

}

Stars();