const carouselItems = document.querySelectorAll(".carousel-item")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let current = 0

rightBtn.addEventListener("click",function(){
    current++;
    console.log("right clicked");
    console.log("right value" ,current);
    if (current > 2) {
        current = 0
    }
    
    
    carouselItems.forEach(item => {
        item.classList.remove("active")
    });
    
    carouselItems[current].classList.add("active")
    
})



leftBtn.addEventListener("click",function(){
    
    current--;
    if (current < 0) {
        current = 2
    }

    console.log("left clicked");

    
    carouselItems.forEach(item => {
        item.classList.remove("active")
    });


    carouselItems[current].classList.add("active")
    

})