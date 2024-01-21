var btn_food1=document.querySelector('#food1_order');
var btn_food2=document.querySelector('#food2_order');
var btn_food3=document.querySelector('#food3_order');

var btn_dog1=document.querySelector('#dog1_order');
var btn_dog2=document.querySelector('#dog2_order');
var btn_dog3=document.querySelector('#dog3_order');


var btn_toy1=document.querySelector('#toy1_order');
var btn_toy2=document.querySelector('#toy2_order');
var btn_toy3=document.querySelector('#toy3_order');

var btn_cloth1=document.querySelector('#cloth1_order'); 
var btn_cloth2=document.querySelector('#cloth2_order'); 
var btn_cloth3=document.querySelector('#cloth3_order'); 

var btn_medicine1=document.querySelector('#medicine1_order');
var btn_medicine2=document.querySelector('#medicine2_order');
var btn_medicine3=document.querySelector('#medicine3_order'); 


btn_dog1.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#dog1").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#dog1_cost").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})


btn_dog2.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#dog2").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#dog2_cost").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_dog3.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#dog3").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#dog3_cost").innerHTML;
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

btn_toy1.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#toy1").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#toy_cost1").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_toy2.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#toy2").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#toy_cost2").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})


btn_toy3.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#toy3").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#toy_cost3").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_cloth1.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#cloth1").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#cloth_cost1").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})

btn_cloth2.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#cloth2").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#cloth_cost2").innerHTML;
        // console.log("Heading Content: " + headingContent);
        localStorage.setItem('food_cost',food_cost);

})


btn_cloth3.addEventListener('click',()=>{
    // Get the src attribute value of the img tag
        var imageSrc = document.querySelector("#cloth3").getAttribute("src");
        // console.log("Image Src: " + imageSrc);
        localStorage.setItem('food1',imageSrc)

        // Get the inner HTML content of the h3 tag
        var food_cost = document.querySelector("#cloth_cost3").innerHTML;
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









function conf() {
    var txt;
    if (confirm("Do you want to complete your purchase?")) {
        end();
    }
}

function end() {
    alert("It will be in our store in 3-5 days. Come and take it!");
}

function priv() {
    alert("We won't try to steal your data.");
}

function sorry() {
    alert("This part is still under construction.");
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}