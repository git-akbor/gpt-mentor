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


// contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const message = e.target.message.value;

  try {
    const response = await fetch('http://localhost:5500/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.error || 'Submission failed');
    }
  } catch (error) {
    console.error('Error submitting the form', error);
    alert('An error occurred while submitting the form');
  }
});


