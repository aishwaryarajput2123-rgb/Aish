// Aishwarya Singh | Portfolio interactions
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  const menuButton = document.querySelector(".menu");
  const isOpen = navbar.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "×" : "☰";
}

// Close the mobile navigation after selecting a section.
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    const menuButton = document.querySelector(".menu");
    navbar.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

// Display the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the navigation link for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navbar a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => observer.observe(section));

console.log("Welcome to Aishwarya Singh's Portfolio!");
