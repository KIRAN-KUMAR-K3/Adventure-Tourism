// Function to toggle dark mode
const toggleDarkMode = () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");

    // Save the dark mode state in localStorage (true or false)
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
};

// Check if dark mode was previously enabled in localStorage, otherwise enable dark mode by default
if (localStorage.getItem("darkMode") === "true" || (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("dark-mode");  // Apply dark mode if previously set or default to system preference
}

// Event listener for dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        // Scroll to the element with the corresponding id with smooth behavior
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Form validation for the contact form
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        let valid = true;  // Flag to track the form validity

        // Validate 'Name' field
        const name = document.getElementById("name");
        if (!name.value.trim()) {
            valid = false;
            name.classList.add("error");  // Add 'error' class if invalid
        } else {
            name.classList.remove("error");  // Remove 'error' class if valid
        }

        // Validate 'Email' field with a regular expression
        const email = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.value.match(emailPattern)) {
            valid = false;
            email.classList.add("error");  // Add 'error' class if invalid
        } else {
            email.classList.remove("error");  // Remove 'error' class if valid
        }

        // Validate 'Message' field
        const message = document.getElementById("message");
        if (!message.value.trim()) {
            valid = false;
            message.classList.add("error");  // Add 'error' class if invalid
        } else {
            message.classList.remove("error");  // Remove 'error' class if valid
        }

        // Prevent form submission if there are errors
        if (!valid) {
            e.preventDefault();
        }
    });
}
