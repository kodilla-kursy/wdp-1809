export function starsAction () {
  var ratingContainers = document.querySelectorAll('.stars');

  var containerWithBool = [];
  for (var i = 0; i < ratingContainers.length; i++) {
    var currentContainer = ratingContainers[i];
    containerWithBool.push(
      Object.assign(
        {},
        {
          stars: currentContainer,
          toggle: true
        }
      )
    );
  }

  containerWithBool.forEach(function (item, index) {
    for (var i = 0; i < item.stars.children.length; i++) {
      item.stars.children[i].addEventListener('click', function (e) {
        e.preventDefault();
        var self = this;
        self.style.color = '#d58e32';
        self.style.fontWeight = 900;
        onClick(this);
        containerWithBool[index].toggle = !containerWithBool[index].toggle;
        if (containerWithBool[index].toggle) {
          addEventsNext(self);
          addEventsPrev(self);
        }
      });
      item.stars.children[i].addEventListener('mouseenter', eventMouseIn);
      item.stars.children[i].addEventListener('mouseleave', eventMouseOut);
    }
  });

  function onClick (element) {
    ratingOnClick(element);
    removeNextListeners(element);
    removePrevListeners(element);
  }

  function changeSiblings (element) {
    element.style.color = '#d58e32';
    element.style.fontWeight = 900;
    if (element.previousElementSibling) {
      changeSiblings(element.previousElementSibling);
    }
  }

  function clearSiblins (element) {
    if (element.classList.contains('full')) {
      element.style.color = '#2a2a2a';
      element.style.fontWeight = 900;
    } else {
      element.style.color = '';
      element.style.fontWeight = 400;
    }
    if (element.previousElementSibling) {
      clearSiblins(element.previousElementSibling);
    }
  }

  function ratingOnClick (element) {
    element.style.color = '#d58e32';
    if (element.previousElementSibling) {
      ratingOnClick(element.previousElementSibling);
    }
  }

  function removeNextListeners (element) {
    element.removeEventListener('mouseleave', eventMouseOut);
    element.removeEventListener('mouseenter', eventMouseIn);
    if (element.nextElementSibling) {
      removeNextListeners(element.nextElementSibling);
    }
  }

  function removePrevListeners (element) {
    element.removeEventListener('mouseleave', eventMouseOut);
    element.removeEventListener('mouseenter', eventMouseIn);
    if (element.previousElementSibling) {
      removePrevListeners(element.previousElementSibling);
    }
  }

  function addEventsPrev (element) {
    element.addEventListener('mouseenter', eventMouseIn);
    element.addEventListener('mouseleave', eventMouseOut);
    if (element.previousElementSibling) {
      addEventsPrev(element.previousElementSibling);
    }
  }

  function addEventsNext (element) {
    element.addEventListener('mouseenter', eventMouseIn);
    element.addEventListener('mouseleave', eventMouseOut);
    if (element.nextElementSibling) {
      addEventsNext(element.nextElementSibling);
    }
  }

  function eventMouseOut () {
    clearSiblins(this);
  }

  function eventMouseIn () {
    changeSiblings(this);
  }
}
