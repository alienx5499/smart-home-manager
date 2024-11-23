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

// Energy Chart
const ctxEnergy = document.getElementById('energyChart').getContext('2d');
new Chart(ctxEnergy, {
  type: 'pie',
  data: {
    labels: ['Lighting', 'Heating', 'Appliances'],
    datasets: [{
      label: 'Energy Consumption',
      data: [40, 30, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  }
});

// Pet Care Chart
const ctxPet = document.getElementById('petChart').getContext('2d');
new Chart(ctxPet, {
  type: 'bar',
  data: {
    labels: ['Food', 'Activity', 'Health'],
    datasets: [{
      label: 'Pet Care Insights',
      data: [50, 25, 25],
      backgroundColor: ['#4CAF50', '#FFC107', '#00BCD4']
    }]
  }
});

// Household Task Chart
const ctxTask = document.getElementById('taskChart').getContext('2d');
new Chart(ctxTask, {
  type: 'line',
  data: {
    labels: ['Morning', 'Afternoon', 'Evening'],
    datasets: [{
      label: 'Tasks Completed',
      data: [10, 15, 20],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
    }]
  }
});

// Water Chart
const ctxWater = document.getElementById('waterChart').getContext('2d');
new Chart(ctxWater, {
  type: 'doughnut',
  data: {
    labels: ['Consumed', 'Remaining'],
    datasets: [{
      label: 'Water Levels',
      data: [70, 30],
      backgroundColor: ['#0074D9', '#FF4136']
    }]
  }
});

// Elder Care Chart
const ctxElder = document.getElementById('elderChart').getContext('2d');
new Chart(ctxElder, {
  type: 'radar',
  data: {
    labels: ['Health', 'Safety', 'Activity'],
    datasets: [{
      label: 'Elder Care Insights',
      data: [90, 80, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  }
});