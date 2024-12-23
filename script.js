// Function to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  };
  
  // Check if dark mode is enabled from previous session
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  
  // Event listener for the dark mode toggle button
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Form validation for the contact form
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      let valid = true;
  
      // Check if name is empty
      const name = document.getElementById("name");
      if (!name.value.trim()) {
        valid = false;
        name.classList.add("error");
      } else {
        name.classList.remove("error");
      }
  
      // Check if email is valid
      const email = document.getElementById("email");
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!email.value.match(emailPattern)) {
        valid = false;
        email.classList.add("error");
      } else {
        email.classList.remove("error");
      }
  
      // Check if message is empty
      const message = document.getElementById("message");
      if (!message.value.trim()) {
        valid = false;
        message.classList.add("error");
      } else {
        message.classList.remove("error");
      }
  
      // Prevent form submission if not valid
      if (!valid) {
        e.preventDefault();
      }
    });
  }
  