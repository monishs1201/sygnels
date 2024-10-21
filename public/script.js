

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

//days to go...


    // Set the symposium date (November 6)
    const symposiumDate = new Date('November 6, 2024').getTime();

    // Function to calculate the number of days left
    function calculateDaysLeft() {
        const today = new Date().getTime();  // Get current date and time
        const timeDifference = symposiumDate - today;  // Calculate time difference
        return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));  // Convert to days
    }

    // Function to update content based on the date
    function updateContent() {
        const daysLeft = calculateDaysLeft();
        const span = document.getElementById('daysLeft');
        const dateText = document.querySelector('.date');

        // If today is November 6 or later, change the text and clear the span
        if (daysLeft <= 0) {
            span.style.display = "none"; // Hide the span element
            dateText.textContent = "THE GREAT WAR BEGINS"; // Update the content
        } else {
            animateCount(0, daysLeft, 1200);  // Animate from 0 to the actual daysLeft
        }
    }

    // Function for the animated number count
    function animateCount(start, end, duration) {
        const span = document.getElementById('daysLeft');
        let startTime = null;

        // Step function for the animation
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const currentCount = Math.min(Math.floor((progress / duration) * (end - start) + start), end);

            span.textContent = currentCount;

            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }

        // Start the animation
        requestAnimationFrame(step);
    }

    // Call the function to update content when the page loads
    updateContent();
