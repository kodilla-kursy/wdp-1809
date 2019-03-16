'use strict';

const tabPanelMenuList = document.querySelectorAll('.tab-list-element');

const exposeSelectedMenuElement = function() {
  for (var i = 0; i < tabPanelMenuList.length; i++) {
    if (tabPanelMenuList[i].classList.contains('active')) {
      tabPanelMenuList[i].classList.remove('active');
    }
  }
  this.classList.toggle('active');
};

tabPanelMenuList.forEach(function(tabPanelMenuElement) {
  tabPanelMenuElement.onclick = exposeSelectedMenuElement;
});
