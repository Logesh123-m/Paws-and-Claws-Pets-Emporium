var btn_bird1=document.querySelector('#bird1_order');
var btn_bird2=document.querySelector('#bird2_order');
var btn_bird3=document.querySelector('#bird3_order');

var btn_food1=document.querySelector('#food1_order');
var btn_food2=document.querySelector('#food2_order');
var btn_food3=document.querySelector('#food3_order');

var btn_medicine1=document.querySelector('#medicine1_order');
var btn_medicine2=document.querySelector('#medicine2_order');
var btn_medicine3=document.querySelector('#medicine3_order'); 

btn_bird1.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#bird1").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#bird1_cost").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_bird2.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#bird2").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#bird2_cost").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_bird3.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#bird3").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#bird3_cost").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_food1.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#food1").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#food_cost1").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_food2.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#food2").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#food_cost2").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_food3.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#food3").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#food_cost3").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})


btn_medicine1.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#medicine1").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#medicine_cost1").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})


btn_medicine2.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#medicine2").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#medicine_cost2").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_medicine3.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#medicine3").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#medicine_cost3").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})
