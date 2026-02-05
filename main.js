// EXPO Website - Main JavaScript
// Handles navigation, forms, animations, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // Mobile Navigation Toggle
    // ===========================
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===========================
    // FAQ Accordion
    // ===========================
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const wasActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // If it wasn't active, open it
                if (!wasActive) {
                    item.classList.add('active');
                }
            });
        }
    });
    
    // ===========================
    // Contact Form Handling
    // ===========================
    
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Here you would normally send the data to a server
            // For now, we'll just simulate a successful submission
            console.log('Form data:', Object.fromEntries(formData));
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
    
    // Reset form function
    window.resetForm = function() {
        if (contactForm && formSuccess) {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    // ===========================
    // Newsletter Form Handling
    // ===========================
    
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would normally send to email service
            console.log('Newsletter signup:', email);
            
            // Show success message
            alert('Thanks for subscribing! Check your email for confirmation.');
            this.reset();
        });
    }
    
    // ===========================
    // Intersection Observer for Animations
    // ===========================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    document.querySelectorAll('.problem-card, .pillar, .serve-card, .value-card, .offering-card').forEach(el => {
        observer.observe(el);
    });
    
    // ===========================
    // Active Navigation State on Scroll
    // ===========================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    function setActiveNavOnScroll() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavOnScroll);
    
    // ===========================
    // Pre-fill Contact Form from URL Parameters
    // ===========================
    
    if (contactForm) {
        const urlParams = new URLSearchParams(window.location.search);
        
        // Pre-select service if specified
        const service = urlParams.get('service');
        if (service) {
            const checkbox = contactForm.querySelector(`input[name="services"][value="${service}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        }
        
        // Pre-fill interest field
        const interest = urlParams.get('interest');
        if (interest === 'pilot') {
            const messageField = contactForm.querySelector('#message');
            if (messageField && !messageField.value) {
                messageField.value = 'I\'m interested in learning more about the EXPO pilot program.';
            }
        }
        
        // Pre-fill resource request
        const resource = urlParams.get('resource');
        if (resource) {
            const messageField = contactForm.querySelector('#message');
            if (messageField && !messageField.value) {
                messageField.value = `I'd like to request the ${resource} template.`;
            }
        }
    }
    
    // ===========================
    // Scroll Progress Indicator (Optional)
    // ===========================
    
    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // You can use this for a progress bar if desired
        // For now, just logging for potential future use
        return scrolled;
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // ===========================
    // Enhanced Hover Effects for Cards
    // ===========================
    
    const cards = document.querySelectorAll('.problem-card, .pillar, .serve-card, .offering-card, .value-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
    
    // ===========================
    // Add Loading State to Buttons
    // ===========================
    
    const formButtons = document.querySelectorAll('button[type="submit"]');
    
    formButtons.forEach(button => {
        const form = button.closest('form');
        if (form) {
            form.addEventListener('submit', function() {
                button.disabled = true;
                const originalText = button.textContent;
                button.textContent = 'Sending...';
                
                // Re-enable after 2 seconds (in real app, do this after actual submission)
                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = originalText;
                }, 2000);
            });
        }
    });
    
    // ===========================
    // Keyboard Navigation for FAQ
    // ===========================
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.setAttribute('tabindex', '0');
            
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextItem = faqItems[index + 1];
                    if (nextItem) {
                        nextItem.querySelector('.faq-question').focus();
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevItem = faqItems[index - 1];
                    if (prevItem) {
                        prevItem.querySelector('.faq-question').focus();
                    }
                }
            });
        }
    });
    
    // ===========================
    // Form Validation Enhancement
    // ===========================
    
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.style.borderColor = 'var(--color-red)';
                } else {
                    this.style.borderColor = 'var(--color-black)';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = 'var(--color-black)';
                }
            });
        });
    });
    
    // ===========================
    // Console Easter Egg
    // ===========================
    
    console.log('%c EXPO ', 'background: #D64545; color: #F5F1E8; font-size: 24px; font-weight: bold; padding: 10px;');
    console.log('%c Strategic Ops Studio for Hospitality ', 'background: #1a1a1a; color: #F5F1E8; font-size: 14px; padding: 5px;');
    console.log('%c\nInterested in how we built this? We\'d love to talk. hello@expo-consulting.co', 'color: #6a6a6a; font-size: 12px;');
    
    // ===========================
    // Performance Optimization
    // ===========================
    
    // Lazy load images (if implemented)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===========================
    // Analytics Event Tracking (Placeholder)
    // ===========================
    
    function trackEvent(category, action, label) {
        // Placeholder for analytics integration
        console.log('Event tracked:', { category, action, label });
        
        // Example: Google Analytics 4
        // gtag('event', action, {
        //     'event_category': category,
        //     'event_label': label
        // });
    }
    
    // Track CTA clicks
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.textContent.trim();
            trackEvent('CTA', 'click', text);
        });
    });
    
    // Track external links
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Contact', 'email_click', this.getAttribute('href'));
        });
    });
    
    // Track navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Navigation', 'click', this.textContent.trim());
        });
    });
    
});

// ===========================
// Utility Functions
// ===========================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
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
    };
}

// Format phone numbers (if needed)
function formatPhoneNumber(value) {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return value;
}

// Export functions for potential external use
window.EXPO = {
    trackEvent: trackEvent,
    debounce: debounce,
    throttle: throttle,
    formatPhoneNumber: formatPhoneNumber
};
