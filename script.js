document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_yi1orks', 'template_v0ibur7', this)
    .then(() => alert('Message sent successfully!'))
    .catch((error) => alert('Failed to send message: ' + JSON.stringify(error)));
});
