'use strict';

// MENU-BAR small screen dropdown
(function(){ 
var showBtn = document.querySelector('.category-list-show');
var dropdownList = document.getElementById('menu-dropdown');

showBtn.addEventListener('click', function() {
    dropdownList.classList.toggle('drop');
    showBtn.classList.toggle('active');
});
})();  