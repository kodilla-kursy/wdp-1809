
console.log('hello');



let list1 = document.querySelector("#bed");
 
let list2 = document.querySelector("#chair");
 
let list3 = document.querySelector("#sofa");

let list4 = document.querySelector("#table");
 
let list5 = document.querySelector("#dining");
 
let lists = document.querySelectorAll(".list");

let page = document.querySelectorAll('.page');

let menu = document.querySelector('.menu');

let first = document.querySelector('#first');
let second =  document.querySelector('#second');


list1.addEventListener("click", function()
  {
  	
  	updatePage(first);
    updateActiveStatus(list1);
  }
);

list2.addEventListener("click", function()
  {
  	
  	updatePage(second);
    updateActiveStatus(list2);
  }
);

list3.addEventListener("click", function()
  {
  	
  	updatePage(first);
    updateActiveStatus(list3);
  }
);

list4.addEventListener("click", function()
  {
  	
  	updatePage(second);
    updateActiveStatus(list4);
  }
);

list5.addEventListener("click", function()
  {
 	
 	updatePage(first);
    updateActiveStatus(list5);
  }
);
 
function updateActiveStatus(active_item){
  lists.forEach(function(list_item)
  {
    if(list_item != active_item){
      list_item.classList.remove("active");
      menu.classList.add('animation');
    }
    else{
      list_item.classList.add("active");
      menu.classList.add('animation');
    }
  })
}

function updatePage(active_item){
  page.forEach(function(list_item)
  {
    if(list_item != active_item){
      list_item.classList.add("temp");
   
    }
    else{
      list_item.classList.remove("temp");
 
    }
  })
}

// Ocena w Gwiazdkach

// Referencje do html-u

const allStars = document.querySelectorAll('.stars');

// Nasłuchiwacze

allStars.forEach(function (item) {
  const stars = item.querySelectorAll('.star');
  stars.forEach(function (el) {
    el.addEventListener('click', rating);
    el.addEventListener('mouseover', hoverEffect);
    el.addEventListener('mouseout', hoverEffect);
  });

  // Funkcja zmiany gwiazdki na kliknięcie

  function rating (event) {
    const choice = event.target;
    let active = false;
    stars.forEach(function (star) {
      if (active) {
        star.classList.remove('active');
        star.classList.remove('full');
      } else if (!active) {
        star.classList.add('active');
      }
      if (star === choice) {
        active = true;
      }
    });
  }

  // Funkcja zmiany gwiazdki na Hover

  function hoverEffect (event) {
    const choice = event.target;
    let active = false;
    stars.forEach(function (star) {
      if (!active) {
        star.classList.toggle('hoverEffect');
      }
      if (star === choice) {
        active = !active;
      }
    });
  }
});

