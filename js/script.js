document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMsg = document.getElementById('form-response');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual submission
  
      responseMsg.textContent = "Thank you! Viral Jain will get back to you soon.";
      responseMsg.style.display = "block";
  
      form.reset(); // Optional: reset the form fields
    });
  });
  