// Example: Simple form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Message sent successfully!");
        // You can integrate email sending here using back-end services (e.g., Node.js, PHP, etc.)
    } else {
        alert("Please fill all fields.");
    }
});
