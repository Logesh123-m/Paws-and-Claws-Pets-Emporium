window.addEventListener('load',()=>{

  var items= document.querySelector('.items');
  var food1=localStorage.getItem('food1')
  var food_cost=localStorage.getItem('food_cost')

  var pic=document.createElement("img");
  pic.setAttribute('src',food1 );
  pic.setAttribute('width',"250px");

  // pic.setAttribute('height',250);
  items.appendChild(pic);

  var cost=document.createElement("h2");
  cost.appendChild(document.createTextNode('Cost :'+food_cost));
  items.appendChild(cost);


  var imageUrl=document.getElementById('imageurl');
  var cost=document.getElementById('cost');

  imageUrl.value=food1;
  cost.value=food_cost;

 
})






$(document).ready(function() {
  $("#showFormButton").click(function() {
    $("#customerForm").slideDown();
  });

  
});

    // Get form
