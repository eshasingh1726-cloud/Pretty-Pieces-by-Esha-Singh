
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      const status = document.getElementById('formStatus');

      btn.textContent = 'Sending...';
      btn.disabled = true;

      emailjs.sendForm(
        'service_ms6pbr4',   // Replace with your EmailJS Service ID
        'template_a6b0pzk',  // Replace with your EmailJS Template ID
        this
      ).then(() => {
        status.textContent = '✓ Message sent! I\'ll get back to you within 24–48 hours.';
        status.className = 'form-status success';
        btn.textContent = 'Send Message';
        btn.disabled = false;
        this.reset();
      }, (error) => {
        status.textContent = '✕ Something went wrong. Please try again or email me directly.';
        status.className = 'form-status error';
        btn.textContent = 'Send Message';
        btn.disabled = false;
      });
    });