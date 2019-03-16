const galleryPanelSliders = document.querySelectorAll('.main-carousel');
const tabPanelCategoryButtons = document.querySelectorAll('.tab-category-button');
const galleryFlickities = [];
const tabPanelMenuList = document.querySelectorAll('.tab-list-element');

for (let i = 0; i < galleryPanelSliders.length; i++) {
  let galleryElem = galleryPanelSliders[i];
  let flkty = new Flickity(galleryElem, {
    cellAlign: 'left',
    contain: true,
    draggable: true,
    groupCells: 6,
    pageDots: false,
    lazyLoad: true
  });
  galleryFlickities.push(flkty);
}

const tabPanelShowOn = function() {
  setInterval(function() {
    galleryFlickities.forEach(function(flkty) {
      flkty.resize();
    });
  }, 0);
};

tabPanelCategoryButtons.forEach(function(tabCategoryButton) {
  tabCategoryButton.onclick = tabPanelShowOn;
});

galleryFlickities.forEach(function(fl) {
  fl.on('staticClick', function(event, pointer, cellElement, cellIndex) {
    if (!cellElement) {
      return;
    }
    var prevClickedCell;
    for (let i = 0; i < galleryPanelSliders.length; i++) {
      if (galleryPanelSliders[i].querySelector('.is-clicked')) {
        prevClickedCell = galleryPanelSliders[i].querySelector('.is-clicked');
      }
    }

    if (prevClickedCell) {
      prevClickedCell.classList.remove('is-clicked');
    }

    cellElement.classList.add('is-clicked');
    var imgSrc = cellElement.children[0].src;
    var imgContainer = document.querySelector('.tab-pane.active .img-box');
    imgContainer.style.backgroundImage = `url("${imgSrc}")`;
  });
});

const exposeSelectedMenuElement = function() {
  for (let i = 0; i < tabPanelMenuList.length; i++) {
    if (tabPanelMenuList[i].classList.contains('active')) {
      tabPanelMenuList[i].classList.remove('active');
    }
  }
  this.classList.toggle('active');
};

tabPanelMenuList.forEach(function(tabPanelMenuElement) {
  tabPanelMenuElement.onclick = exposeSelectedMenuElement;
});
