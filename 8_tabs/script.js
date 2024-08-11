const aboutSection = document.querySelector(".right")
const btns = document.querySelectorAll(".btn")
const content = document.querySelectorAll(".content")


aboutSection.addEventListener("click",function(e){

        const id = e.target.dataset.btn

    
        
        console.log(id);
        
        if(id){
                btns.forEach(btn => {
                        btn.classList.remove("active-btn")
                });
                
                e.target.classList.add("active-btn")
        }

        
        content.forEach(text => {
                text.classList.add("hidden")
        });
        
        const selectedContent = document.getElementById(id)
        selectedContent.classList.remove("hidden")







        
        
        



})


