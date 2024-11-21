// Toggling navigation visibility on small screens
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links'); // To control the nav menu visibility

navToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Get all the navigation links for active class toggle
const navLinks = document.querySelectorAll('.nav-links a'); // Selecting the individual links

// Add event listeners to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add the active class to the clicked link
    this.classList.add('active');
  });
});