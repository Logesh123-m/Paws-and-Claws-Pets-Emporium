if(localStorage.getItem('uploadedImage2') != null){
    window.addEventListener('load', function() {
        // First action listener
        // console.log('Action listener 1');
        var row = document.querySelector('.row1');
        var div=document.createElement("div");
        div.className="col-md-3"
    
    
        var div1=document.createElement("div");
        div1.className="prod-top" ;
        var pic=document.createElement("img");
        pic.setAttribute('src', localStorage.getItem('uploadedImage2'));
        pic.setAttribute('height',250);
    
    
        div1.appendChild(pic);
    
        var div2=document.createElement("div");
        div2.className="prod-bot text-center";
    
        var ic1=document.createElement("i");
        ic1.className="fa fa-star";
        var ic2=document.createElement("i");
        ic2.className="fa fa-star";
        var ic3=document.createElement("i");
        ic3.className="fa fa-star";
        var ic4=document.createElement("i");
        ic4.className="fa fa-star";
        var ic5=document.createElement("i");
        ic5.className="fa fa-star-half-o";
    
        var h3=document.createElement("h3");
        h3.appendChild(document.createTextNode('Fish'));
        var h5=document.createElement("h5");
        h5.appendChild(document.createTextNode('RS:750'));
        var anhor=document.createElement("a");
        anhor.setAttribute("href","/purchase")
        var image=document.createElement("img");
        image.setAttribute("src","https://logesh.s3.us-south.cloud-object-storage.appdomain.cloud/shop_now_dog.png");
        image.setAttribute("width","100px");
        image.setAttribute("height","70px");
        anhor.appendChild(image);
    
       
        div2.appendChild(ic1);
        div2.appendChild(ic2);
        div2.appendChild(ic3);
        div2.appendChild(ic4);
        div2.appendChild(ic5);
        div2.appendChild(ic1);
        div2.appendChild(h3);
        div2.appendChild(h5);
        div2.appendChild(anhor);
    
        div.appendChild(div1);
        div.appendChild(div2);
    
        row.appendChild(div);
    });
}

