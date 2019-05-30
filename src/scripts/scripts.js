function detectmob () {
  if (window.innerWidth <= 800 && window.innerHeight <= 600) {
    const category = document.querySelectorAll('.dropdown');
    category.forEach(function (el) {
      let button = el.querySelector('a[data-toggle="dropdown"]');

      let menu = el.querySelector('.dropdown-menu');
      button.addEventListener('click', function (event) {
        if (menu.className !== 'show') {
          menu.classList.toggle('show');
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
  }
}

detectmob();
