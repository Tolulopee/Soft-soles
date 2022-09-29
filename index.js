// for the image slideshow on the header page

let  slideIndex  = 0
carousel()

function carousel(){

    let x = document.getElementsByClassName("mySlides")
    for(i = 0; i< x.length; i++){
        x[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > x.length){
        slideIndex=1
    }
    x[slideIndex -1]. style.display = "block"
    setTimeout(carousel, 1500)
}


// To generate random color on the shop page
 const colours= document.querySelectorAll(".colours");
const randomColor =() =>{
    const getRandom = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByClassName("colours").style.backgroundColor=getRandom;
    colours.innerHTML =getRandom;
    
}

colours.addEventListener("click",randomColor);
randomColor()
