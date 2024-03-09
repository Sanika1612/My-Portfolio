document.addEventListener('DOMContentLoaded', function() {
    // If a link has a dropdown, add sub menu toggle.
    var linksWithDropdown = document.querySelectorAll('nav ul li a:not(:only-child)');
    linksWithDropdown.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var siblingDropdown = this.nextElementSibling;
        if (siblingDropdown) {
          siblingDropdown.style.display = siblingDropdown.style.display === 'block' ? 'none' : 'block';
          // Close one dropdown when selecting another
          var allDropdowns = document.querySelectorAll('.nav-dropdown');
          allDropdowns.forEach(function(dropdown) {
            if (dropdown !== siblingDropdown) {
              dropdown.style.display = 'none';
            }
          });
          e.stopPropagation();
        }
      });
    });
  
    // Clicking away from dropdown will remove the dropdown class
    document.addEventListener('click', function() {
      var allDropdowns = document.querySelectorAll('.nav-dropdown');
      allDropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';
      });
    });
  
    // Toggle open and close nav styles on click
    var navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
      navToggle.addEventListener('click', function() {
        var navUl = document.querySelector('nav ul');
        if (navUl) {
          navUl.style.display = navUl.style.display === 'block' ? 'none' : 'block';
        }
      });
  
      // Hamburger to X toggle
      navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }
  });
  
var typed=new Typed(".text", {
    strings: ["Programmer", "Developer", "Learner"],
    typeSpeed:100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
})
// JavaScript function to toggle the dropdown menu

