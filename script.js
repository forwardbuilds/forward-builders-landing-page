// Simple mailto handler with toast feedback (no backend needed)
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const phone = (data.get('phone') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();
  const message = (data.get('message') || '').toString().trim();

  const subject = encodeURIComponent('New Contact Form Submission');
  const bodyLines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Message: ${message}`
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));

  // Update this to your actual inbox if needed
  window.location.href = `mailto:forwardbuilds@gmail.com?subject=${subject}&body=${body}`;

  toast.style.display = 'block';
  toast.textContent = "Thanks! We'll get back to you shortly.";
  setTimeout(() => { toast.style.display = 'none'; }, 4000);

  form.reset();
});
