const furnitureCategoryTabs = document.querySelectorAll('.category-tab-select');
const portMode = 'portrait';
const landMode = 'landscape';

furnitureCategoryTabs.forEach(function (tab) {
  tab.addEventListener('click', checkResolutionOfScreen);
});

function checkResolutionOfScreen (event) {
  const targetTab = event.currentTarget.getAttribute('href');
  const tabPanel = document.querySelector(targetTab);
  const tabPanelProductElements = tabPanel.children[0].children.length;
  const width = window.innerWidth;
  const height = window.innerHeight;
  let orientation;

  if (width > height) {
    orientation = landMode;
  } else if (width < height) {
    orientation = portMode;
  }

  detectScreenMode(orientation, width, tabPanelProductElements);
}

function detectScreenMode (orientation, width, tabPanelProductElements) {
  const landscapeLargeMode = orientation === landMode && width > 1024;
  const landscapeMiddleMode = orientation === landMode && (width > 995 && width < 1024);
  const landscapeSmallMode = orientation === landMode && (width > 568 && width < 768);
  const portraitSmallMode = orientation === portMode && (width > 320 && width < 568);
  const portraitMiddleMode = orientation === portMode && (width > 767 && width < 996);

  if (landscapeLargeMode) {
    createDots(tabPanelProductElements / 4);
  } else if (landscapeMiddleMode) {
    createDots(tabPanelProductElements / 3);
  } else if (landscapeSmallMode) {
    createDots(tabPanelProductElements / 2);
  } else if (portraitSmallMode) {
    createDots(tabPanelProductElements / 1);
  } else if (portraitMiddleMode) {
    createDots(tabPanelProductElements / 3);
  }
}

function createDots (number) {
  var dotMenu = document.querySelector('#dots-container');
  dotMenu.innerHTML = '';

  for (let i = 0; i < number; i++) {
    var liElement = document.createElement('li');
    var aElement = document.createElement('a');
    aElement.setAttribute('href', '#');
    liElement.appendChild(aElement);
    dotMenu.appendChild(liElement);
  }
}
