document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded. Ready to add functionality!');

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        this.reset(); // Reset the form fields
    });
});
