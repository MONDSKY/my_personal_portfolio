document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => alert('Message sent successfully!'))
    .catch((error) => alert('Failed to send message: ' + JSON.stringify(error)));
});
