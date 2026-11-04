// Function to switch between sections
function navigateTo(sectionId) {
    // 1. Hide all page sections
    var sections = document.querySelectorAll(".page-section");
    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    // 2. Show the target section
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    // 3. Remove the "active" highlight from all navigation links
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });
    
    // 4. Add the "active" highlight to the link that was just clicked
    var activeLink = document.getElementById("link-" + sectionId);
    if (activeLink) {
        activeLink.classList.add("active");
    }

    // 5. Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", function() {
    // By default, ensure the About section is showing when the page loads
    navigateTo('about');
});