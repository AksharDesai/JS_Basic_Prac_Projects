const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const image = document.getElementById("img")
const name = document.getElementById("name")
const  job = document.getElementById("job")
const text = document.getElementById("review")

const prev_btn = document.querySelector("#prev-btn")
const next_btn = document.querySelector("#next-btn")
const random_btn = document.querySelector("#surprise-btn")


let currentReview = 0

window.addEventListener("DOMContentLoaded", function() {
    
    const item = reviews[currentReview]
    image.src = item.img
    name.textContent = item.name
    job.textContent = item.job
    text.textContent = item.text
    
    
});

next_btn.addEventListener("click",function(){
    
    currentReview++
    
    if (currentReview > reviews.length - 1) {
        currentReview = 0
    }

   
    showReviews(currentReview)

    
})

prev_btn.addEventListener("click",function(){
    currentReview--
    if (currentReview < 0) {
        currentReview = 3
    }
    showReviews(currentReview)
})


function showReviews(currentReview){
    const item = reviews[currentReview]
    image.src = item.img
    name.textContent = item.name
    job.textContent = item.job
    text.textContent = item.text

}

console.log(currentReview);

random_btn.addEventListener('click', function () {
    console.log('hello');
  
    currentReview = Math.floor(Math.random() * reviews.length);
    showReviews(currentReview);
  });