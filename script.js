// let ham=document.querySelector(".hamburger img")

// let navbar=document.querySelector(".links")

// ham.addEventListener("click",()=>{
//     navbar.classList.toggle("active")
//     ham.classList.toggle("rotate")
// })

let ham = document.querySelector(".hamburger img");
let navbar = document.querySelector(".links");

// Toggle navbar on hamburger click
ham.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
  ham.classList.toggle("rotate");
  e.stopPropagation(); // Prevent event bubbling
});

// Close the navbar when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !ham.contains(e.target)) {
    // Check if the click is outside the navbar and hamburger
    navbar.classList.remove("active");
    ham.classList.remove("rotate");
  }
});
