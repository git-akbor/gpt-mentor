// Crate clikable link
document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;
  const navLink = document.querySelector(`#${bodyId}-link`);
  if (navLink) {
    navLink.classList.add("active");
  }
});
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    event.target.classList.add("active");
  });
});

// crate go to top btn
const scrollToTopButton = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const message = {};
  formData.forEach((value, key) => {
    message[key] = value;
  });
  console.log(message);
});
