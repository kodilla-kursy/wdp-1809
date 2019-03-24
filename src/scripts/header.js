function toggleMenu (visible) {
  document.querySelector('.dropdown-menu').classList.toggle('show', visible);
}

document.querySelector('.menu-button-dropdown').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
