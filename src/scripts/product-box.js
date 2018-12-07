(function () {
    const boxes = document.querySelectorAll('[class*="js-productsBox"]');
    const dots = document.querySelectorAll('[class*="js-productsDots"]');
    const links = document.querySelectorAll('.js-productsLink');

    function currentActiveLink() {
        for (var item = 0; item < links.length; item++)
            if (links[item].classList.contains('active'))
                return item;
    }

    function clickLink() {
        if (!this.classList.contains('active')) {
            let previousPosition = currentActiveLink();

            links[previousPosition].classList.remove('active');
            this.classList.add('active');

            setTimeout(() => {
                boxes[previousPosition].classList.replace("js-productsBox--hide", "js-productsBox--disable");
                dots[previousPosition].classList.replace("js-productsDots--hide", "js-productsDots--disable");

                boxes[currentActiveLink()].classList.replace("js-productsBox--disable", "js-productsBox--show");
                dots[currentActiveLink()].classList.replace("js-productsDots--disable", "js-productsDots--show");
            }, 250);

            boxes[previousPosition].classList.replace("js-productsBox--show", "js-productsBox--hide");
            dots[previousPosition].classList.replace("js-productsDots--show", "js-productsDots--hide");
        }
    }

    for (var item = 0; item < links.length; item++) {
        links[item].addEventListener('click', clickLink, false);
    }

})();