// Dark Mode Toggle Function
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved theme in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll Animations
const scrollElements = document.querySelectorAll('.scroll-element');

const scrollAnimation = () => {
    const windowHeight = window.innerHeight;
    scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);
scrollAnimation();

// Form Validation for Contact Form
const contactForm = document.querySelector('.contact-form');
const contactFormInputs = contactForm.querySelectorAll('input, textarea');
const submitButton = contactForm.querySelector('button');

// Form validation function
const validateForm = () => {
    let valid = true;
    contactFormInputs.forEach(input => {
        if (input.type === 'text' && input.value.trim() === '') {
            valid = false;
            input.classList.add('error');
            input.setAttribute('placeholder', 'This field is required');
        } else if (input.type === 'email' && !input.value.includes('@')) {
            valid = false;
            input.classList.add('error');
            input.setAttribute('placeholder', 'Please enter a valid email');
        } else {
            input.classList.remove('error');
        }
    });
    return valid;
};

// Submit button event listener
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

// Reset error styles when user starts typing
contactFormInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.classList.remove('error');
        }
    });
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Gallery Hover Effect
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover');
    });
});

// Animate activities on hover
const activities = document.querySelectorAll('.activity');

activities.forEach(activity => {
    activity.addEventListener('mouseenter', () => {
        activity.querySelector('.activity-image').style.transform = 'scale(1.1)';
    });

    activity.addEventListener('mouseleave', () => {
        activity.querySelector('.activity-image').style.transform = 'scale(1)';
    });
});

// Fade in elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        const windowHeight = window.innerHeight;
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 150) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Trigger immediately on load for initial fade-in
});

// Lazy load images for performance
const lazyImages = document.querySelectorAll('img.lazy');

const lazyLoad = () => {
    const windowHeight = window.innerHeight;
    lazyImages.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
        if (imgTop < windowHeight && !img.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        }
    });
};

window.addEventListener('scroll', lazyLoad);
lazyLoad(); // Trigger on load

// Smooth Scroll Navigation
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section');
const sectionOffsets = [];

sections.forEach(section => {
    sectionOffsets.push(section.offsetTop);
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i] - 60) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[i].classList.add('active');
            break;
        }
    }
});
