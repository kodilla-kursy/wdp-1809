export function starsAction () {
  const ratingContainers = document.querySelectorAll('.stars');
  const containerWithBool = Array.from(ratingContainers).map(stars => ({
    stars,
    toggle: true
  }));

  containerWithBool.forEach(function (item, index) {
    for (let i = 0; i < item.stars.children.length; i++) {
      addOnClickEvents(item.stars.children[i], index);
      item.stars.children[i].addEventListener('mouseenter', eventMouseIn);
      item.stars.children[i].addEventListener('mouseleave', eventMouseOut);
    }
  });

  function addOnClickEvents (element, index) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      element.style.color = '#d58e32';
      element.style.fontWeight = 900;
      onClick(element);
      containerWithBool[index].toggle = !containerWithBool[index].toggle;
      if (containerWithBool[index].toggle) {
        addEventsNext(this);
        addEventsPrev(this);
      }
    });
  }

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
