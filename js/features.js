

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Navigation
  initializeNavigation();

  // Initialize Charts
  initializeCharts();

  // Initialize Smooth Scrolling (if not already initialized elsewhere)
  initializeSmoothScroll();
});

/**
 * Function to initialize navigation toggling and active link management
 */
function initializeNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Toggle navigation visibility on small screens
  navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    navToggle.classList.toggle('active'); // Optional: Animate the toggle button
  });

  // Add active class to the clicked navigation link and remove from others
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      // Optionally close the nav menu after clicking (useful for mobile)
      if (navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
}

/**
 * Function to initialize all charts using Chart.js
 */
function initializeCharts() {
  // Define chart configurations
  const chartsConfig = [
    {
      elementId: 'energyChart',
      type: 'pie',
      data: {
        labels: ['Lighting', 'Heating', 'Appliances'],
        datasets: [{
          label: 'Energy Consumption',
          data: [40, 30, 30],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 20,
              padding: 15
            }
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed;
                const total = context.chart._metasets[context.datasetIndex].total;
                const percentage = ((value / total) * 100).toFixed(2) + '%';
                return `${label}: ${value} (${percentage})`;
              }
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    },
    {
      elementId: 'petChart',
      type: 'bar',
      data: {
        labels: ['Food', 'Activity', 'Health'],
        datasets: [{
          label: 'Pet Care Insights',
          data: [50, 25, 25],
          backgroundColor: ['#4CAF50', '#FFC107', '#00BCD4'],
          borderColor: ['#388E3C', '#FFA000', '#0097A7'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    },
    {
      elementId: 'taskChart',
      type: 'line',
      data: {
        labels: ['Morning', 'Afternoon', 'Evening'],
        datasets: [{
          label: 'Tasks Completed',
          data: [10, 15, 20],
          fill: true,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: '#9966FF',
          borderWidth: 2,
          tension: 0.4, // Smooth curves
          pointBackgroundColor: '#9966FF',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#9966FF'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeInOutQuad'
        }
      }
    },
    {
      elementId: 'waterChart',
      type: 'doughnut',
      data: {
        labels: ['Consumed', 'Remaining'],
        datasets: [{
          label: 'Water Levels',
          data: [70, 30],
          backgroundColor: ['#0074D9', '#FF4136'],
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 20,
              padding: 15
            }
          },
          tooltip: {
            enabled: true
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    },
    {
      elementId: 'elderChart',
      type: 'radar',
      data: {
        labels: ['Health', 'Safety', 'Activity'],
        datasets: [{
          label: 'Elder Care Insights',
          data: [90, 80, 70],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: '#FF6384',
          borderWidth: 2,
          pointBackgroundColor: '#FF6384',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#FF6384'
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 50,
            suggestedMax: 100,
            ticks: {
              stepSize: 10
            },
            pointLabels: {
              font: {
                size: 14
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutElastic'
        }
      }
    },
    // New Chart: Fire Safety Monitor
    {
      elementId: 'fireSafetyChart',
      type: 'bar',
      data: {
        labels: ['Smoke Detectors', 'Fire Extinguishers', 'Emergency Exits', 'Alarm Systems'],
        datasets: [{
          label: 'Fire Safety Components',
          data: [95, 85, 90, 80],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      }
    },
    // New Chart: Smart Lighting Control
    {
      elementId: 'smartLightingChart',
      type: 'line',
      data: {
        labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
        datasets: [{
          label: 'Lighting Usage Hours',
          data: [5, 3, 4, 2],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: '#36A2EB',
          borderWidth: 2,
          tension: 0.4, // Smooth curves
          pointBackgroundColor: '#36A2EB',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#36A2EB'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeInOutQuad'
        }
      }
    },
    // New Chart: Security Monitoring
    {
      elementId: 'securityMonitoringChart',
      type: 'pie',
      data: {
        labels: ['Cameras', 'Motion Sensors', 'Access Control', 'Alerts'],
        datasets: [{
          label: 'Security Monitoring Components',
          data: [60, 25, 10, 5],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 20,
              padding: 15
            }
          },
          tooltip: {
            enabled: true
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ];

  // Initialize each chart
  chartsConfig.forEach(config => {
    const ctx = document.getElementById(config.elementId).getContext('2d');
    new Chart(ctx, {
      type: config.type,
      data: config.data,
      options: config.options
    });
  });
}

/**
 * Function to initialize smooth scrolling for anchor links
 * Optional: If not implemented elsewhere
 */
function initializeSmoothScroll() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
  });
}
