// Carolina Quality Sales - Main JavaScript File

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeFormValidation();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Active navigation link highlighting
    highlightActiveNavLink();
}

function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Animation functionality with enhanced micro-interactions
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .section-header, .vehicle-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Counter animation for statistics
    animateCounters();
    
    // Add enhanced micro-interactions
    initializeMicroInteractions();
}

// Enhanced micro-interactions
function initializeMicroInteractions() {
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.feature-card, .vehicle-card, .service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 120ms cubic-bezier(0.2, 0.0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Button interaction enhancements
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-1px) scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Search input expansion effect
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 200ms cubic-bezier(0.2, 0.0, 0.2, 1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Filter chip animations
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(37, 84, 184, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 400ms ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 400);
        });
    });
}

function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

function animateNumber(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlusSign = target.includes('+');
    const number = parseInt(target.replace(/[^\d]/g, ''));
    
    let current = 0;
    const increment = number / 50; // Animation duration
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = number + (isPercentage ? '%' : '') + (isPlusSign ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (isPercentage ? '%' : '') + (isPlusSign ? '+' : '');
        }
    }, 40);
}

// Form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    removeErrorMessage(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    // Email validation
    else if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    // Phone validation
    else if (type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    if (!isValid) {
        field.classList.add('error');
        showErrorMessage(field, errorMessage);
    }

    return isValid;
}

function showErrorMessage(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function removeErrorMessage(field) {
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Smooth scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    }
}

// Vehicle inventory functionality (for inventory page)
function initializeInventoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vehicles = document.querySelectorAll('.vehicle-card');
    const searchInput = document.getElementById('vehicle-search');
    const sortSelect = document.getElementById('sort-select');

    // Filter functionality
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter vehicles
                filterVehicles(filter);
            });
        });
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            searchVehicles(this.value);
        }, 300));
    }

    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortVehicles(this.value);
        });
    }
}

function filterVehicles(category) {
    const vehicles = document.querySelectorAll('.vehicle-card');
    
    vehicles.forEach(vehicle => {
        const vehicleCategory = vehicle.getAttribute('data-category');
        
        if (category === 'all' || vehicleCategory === category) {
            vehicle.style.display = 'block';
            vehicle.classList.add('fade-in');
        } else {
            vehicle.style.display = 'none';
        }
    });
}

function searchVehicles(searchTerm) {
    const vehicles = document.querySelectorAll('.vehicle-card');
    const term = searchTerm.toLowerCase();
    
    vehicles.forEach(vehicle => {
        const text = vehicle.textContent.toLowerCase();
        
        if (text.includes(term)) {
            vehicle.style.display = 'block';
        } else {
            vehicle.style.display = 'none';
        }
    });
}

function sortVehicles(sortBy) {
    const container = document.querySelector('.vehicles-grid');
    const vehicles = Array.from(document.querySelectorAll('.vehicle-card'));
    
    vehicles.sort((a, b) => {
        let aValue, bValue;
        
        switch (sortBy) {
            case 'price-low':
                aValue = parseInt(a.getAttribute('data-price') || '0');
                bValue = parseInt(b.getAttribute('data-price') || '0');
                return aValue - bValue;
            case 'price-high':
                aValue = parseInt(a.getAttribute('data-price') || '0');
                bValue = parseInt(b.getAttribute('data-price') || '0');
                return bValue - aValue;
            case 'year-new':
                aValue = parseInt(a.getAttribute('data-year') || '0');
                bValue = parseInt(b.getAttribute('data-year') || '0');
                return bValue - aValue;
            case 'year-old':
                aValue = parseInt(a.getAttribute('data-year') || '0');
                bValue = parseInt(b.getAttribute('data-year') || '0');
                return aValue - bValue;
            default:
                return 0;
        }
    });
    
    // Re-append sorted vehicles
    vehicles.forEach(vehicle => container.appendChild(vehicle));
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // Simulate form submission
                showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
            }
        });
    }
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        background-color: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 6px;
        margin-bottom: 1rem;
        border: 1px solid #c3e6cb;
    `;
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(successDiv, form);
    
    setTimeout(() => successDiv.remove(), 5000);
}

// Initialize page-specific functionality
function initializePageSpecific() {
    const page = window.location.pathname.split('/').pop();
    
    switch (page) {
        case 'inventory.html':
            initializeInventoryFilters();
            break;
        case 'contact.html':
            initializeContactForm();
            break;
    }
}

// Call page-specific initialization
document.addEventListener('DOMContentLoaded', initializePageSpecific);
