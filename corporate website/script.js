
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting ELS1!");

    this.reset();
});
