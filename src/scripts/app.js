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