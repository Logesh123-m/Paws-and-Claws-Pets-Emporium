var btn_fish1=document.querySelector('#fish1_order');
var btn_fish2=document.querySelector('#fish2_order');
var btn_fish3=document.querySelector('#fish3_order');

var btn_food1=document.querySelector('#food1_order');
var btn_food2=document.querySelector('#food2_order');
var btn_food3=document.querySelector('#food3_order');

var btn_medicine1=document.querySelector('#medicine1_order');
var btn_medicine2=document.querySelector('#medicine2_order');
var btn_medicine3=document.querySelector('#medicine3_order'); 

btn_fish1.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#fish1").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#fish1_cost").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_fish2.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#fish2").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#fish2_cost").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_fish3.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#fish3").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#fish3_cost").innerHTML;
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
