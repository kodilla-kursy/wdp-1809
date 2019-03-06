const furnitureCategoryTabs = document.querySelectorAll('.category-tab-select');

furnitureCategoryTabs.forEach(function (tab) {
  tab.addEventListener('click', checkResolutionOfScreen);
});

function checkResolutionOfScreen (event) {
  const targetTab = event.currentTarget.getAttribute('href');
  const tabPanelId = targetTab.substring(1, targetTab.length);
  const tabPanel = document.getElementById(tabPanelId);
  const tabPanelProductElements = tabPanel.children[0].children.length;
  const width = window.innerWidth;
  const height = window.innerHeight;
  let orientation;

  if (width > height) {
    orientation = 'landscape';
  } else if (width < height) {
    orientation = 'portrait';
  }

  detectScreenMode(orientation, width, tabPanelProductElements);
}

function detectScreenMode (orientation, width, tabPanelProductElements) {
  const landscapeLargeMode = orientation === 'landscape' && width > 1024;
  const landscapeMiddleMode = orientation === 'landscape' && width > 995 < 1024;
  const landscapeSmallMode = orientation === 'landscape' && width > 568 < 768;
  const portraitSmallMode = orientation === 'portrait' && width > 320 < 568;
  const portraitMiddleMode = orientation === 'portrait' && width > 767 < 996;

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
  console.log(number);
  while (dotMenu.firstChild) {
    dotMenu.innerHTML = '';
  }

  for (let i = 0; i < number; i++) {
    var liElement = document.createElement('li');
    var aElement = document.createElement('a');
    aElement.setAttribute('href', '#');
    liElement.appendChild(aElement);
    dotMenu.appendChild(liElement);
  }
}
