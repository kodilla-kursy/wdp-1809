let menu = '';

function detectmob () {
  if (window.innerHeight <= 600 && window.innerWidth <= 800) {
    const category = document.querySelectorAll('.dropdown');
    category.forEach(function (item) {
      const button = item.querySelector('a[data-toggle="dropdown"]');
      menu = item.querySelector('.dropdown-menu');
      button.addEventListener('click', MenuClick, true);
    });
  }
}

const MenuClick = function (event) {
  if (menu.className !== 'show') {
    menu.classList.toggle('show');
  }

  event.preventDefault();
  event.stopPropagation();
};

export default detectmob;
