const slides = document.querySelectorAll(".slides")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

console.log(slides.length);


// setting all the slides in one row
slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`

});

let counter = 0

prev.addEventListener("click",function(){
    console.log("before minus > ",counter);
    counter--;
    console.log("before if after minus  > ",counter);
    if (counter < 0) {
    counter = slides.length-1
    
    }
        slideImage(counter)
        console.log("prev>",counter);
})
next.addEventListener("click",function(){
    counter++;
    if (counter > slides.length-1) {
        counter = 0
    }
    slideImage(counter)
    console.log("next>",counter);
})


const slideImage = (counter)=>{
   slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter*100}%)`
   });
}