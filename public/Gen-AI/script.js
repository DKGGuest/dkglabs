// Navigation scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
    
    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        if (currentScroll > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// Form handling with enhanced validation
const leadForm = document.getElementById('leadForm');
const successModal = document.getElementById('successModal');

// Track form engagement
let formInteractionStart = null;
let formFieldsInteracted = new Set();

if (leadForm) {
    // Track when user starts interacting with form
    const formInputs = leadForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (!formInteractionStart) {
                formInteractionStart = Date.now();
            }
            formFieldsInteracted.add(input.name || input.id);
        });
        
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
    
    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            // Scroll to first error
            const firstError = leadForm.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            interest: document.getElementById('interest').value,
            message: document.getElementById('message').value.trim(),
            newsletter: (document.getElementById('newsletter')?.checked) || false,
            timestamp: new Date().toISOString(),
            timeSpent: formInteractionStart ? Math.round((Date.now() - formInteractionStart) / 1000) : 0,
            fieldsInteracted: Array.from(formFieldsInteracted)
        };
        
        // Show loading state
        const submitButton = leadForm.querySelector('button[type="submit"]');
        const btnText = submitButton.querySelector('.btn-text');
        const btnLoader = submitButton.querySelector('.btn-loader');
        const originalText = btnText.textContent;
        
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        
        try {
            // Simulate API call (replace with actual endpoint)
            await simulateFormSubmission(formData);
            
            // Track successful submission
            trackEvent('form_submission', {
                service: formData.interest,
                timeSpent: formData.timeSpent
            });
            
            // Show success modal
            showModal();
            
            // Reset form
            leadForm.reset();
            formInteractionStart = null;
            formFieldsInteracted.clear();
            
            // Log form data (in production, send to your backend/CRM)
            console.log('Lead captured:', formData);
            
            // Here you would typically send data to your backend:
            // await fetch('/api/leads', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error submitting your form. Please try again or contact us directly.');
            trackEvent('form_error', { error: error.message });
        } finally {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
        }
    });
}

// Enhanced field validation
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove previous error
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation (flexible format)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        const digitsOnly = value.replace(/\D/g, '');
        if (!phoneRegex.test(value) || (digitsOnly.length < 10 && digitsOnly.length > 0)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Name validation (minimum 2 characters)
    if (field.id === 'name' && value && value.length < 2) {
        isValid = false;
        errorMessage = 'Please enter your full name';
    }
    
    // Company validation
    if (field.id === 'company' && value && value.length < 2) {
        isValid = false;
        errorMessage = 'Please enter a valid company name';
    }
    
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        field.parentElement.appendChild(errorDiv);
    }
    
    return isValid;
}

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
}

// Modal functions
function showModal() {
    if (successModal) {
        successModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (successModal) {
        successModal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside or pressing ESC
if (successModal) {
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeModal();
        }
    });
    
    const modalClose = successModal.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Track section views for analytics
            const sectionId = entry.target.id || entry.target.closest('section')?.id;
            if (sectionId) {
                trackEvent('section_view', { section: sectionId });
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.feature-card, .solution-card, .testimonial-card, .service-card, .about-feature'
    );
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    const isPercentage = element.textContent.includes('%');
    const suffix = isPercentage ? '%' : '+';
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Animate stats when hero section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number[data-target]');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (target) {
                        stat.textContent = '0' + (stat.textContent.includes('%') ? '%' : '+');
                        animateCounter(stat, target, 2000);
                    }
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    statsObserver.observe(heroSection);
}

// Engagement tracking to reduce bounce rate
let pageLoadTime = Date.now();
let scrollDepth = 0;
let timeOnPage = 0;
let ctaClicks = 0;

// Track scroll depth
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
    
    if (scrollPercentage > scrollDepth) {
        scrollDepth = scrollPercentage;
        // Track milestones
        if (scrollDepth >= 25 && scrollDepth < 30) {
            trackEvent('scroll_depth', { depth: 25 });
        } else if (scrollDepth >= 50 && scrollDepth < 55) {
            trackEvent('scroll_depth', { depth: 50 });
        } else if (scrollDepth >= 75 && scrollDepth < 80) {
            trackEvent('scroll_depth', { depth: 75 });
        } else if (scrollDepth >= 90) {
            trackEvent('scroll_depth', { depth: 90 });
        }
    }
});

// Track time on page
setInterval(() => {
    timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
    
    // Track time milestones
    if (timeOnPage === 30) {
        trackEvent('time_on_page', { seconds: 30 });
    } else if (timeOnPage === 60) {
        trackEvent('time_on_page', { seconds: 60 });
    } else if (timeOnPage === 120) {
        trackEvent('time_on_page', { seconds: 120 });
    }
}, 1000);

// Track CTA clicks
document.querySelectorAll('a[href="#contact"], .btn-primary, .btn-secondary').forEach(cta => {
    cta.addEventListener('click', () => {
        ctaClicks++;
        const ctaText = cta.textContent.trim();
        trackEvent('cta_click', {
            text: ctaText,
            location: cta.closest('section')?.id || 'unknown'
        });
    });
});

// Track service/solution link clicks
document.querySelectorAll('.service-link, .solution-card .btn').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('content_click', {
            type: link.classList.contains('service-link') ? 'service' : 'solution',
            text: link.textContent.trim()
        });
    });
});

// Exit intent detection (reduce bounce rate)
let exitIntentTriggered = false;
document.addEventListener('mouseout', (e) => {
    if (!e.toElement && !e.relatedTarget && !exitIntentTriggered) {
        exitIntentTriggered = true;
        // Could show exit intent popup here
        trackEvent('exit_intent', {
            timeOnPage: timeOnPage,
            scrollDepth: scrollDepth
        });
    }
});

// Track page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        trackEvent('page_hidden', {
            timeOnPage: timeOnPage,
            scrollDepth: scrollDepth
        });
    } else {
        trackEvent('page_visible', {
            timeOnPage: timeOnPage
        });
    }
});

// Analytics tracking function (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {
    // Add default data
    const data = {
        ...eventData,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
    };
    
    console.log(`[Analytics] ${eventName}:`, data);
    
    // Integrate with your analytics service here
    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, data);
    // }
    
    // Example: Custom API
    // fetch('/api/analytics', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ event: eventName, data })
    // }).catch(err => console.error('Analytics error:', err));
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .feature-card,
    .solution-card,
    .testimonial-card,
    .service-card,
    .about-feature {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.animate-in,
    .solution-card.animate-in,
    .testimonial-card.animate-in,
    .service-card.animate-in,
    .about-feature.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 2rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        gap: 1rem;
        z-index: 1000;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (min-width: 969px) {
        .nav-menu.active {
            display: flex;
            flex-direction: row;
            position: static;
            background: transparent;
            padding: 0;
            box-shadow: none;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero background
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero-background');
            if (heroBackground) {
                heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Add hover effect to CTA buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Hero chips rotation + typed text effect (lightweight)
(function initHeroShowcase() {
    const chipsContainer = document.getElementById('heroChips');
    if (!chipsContainer) return;
    const chips = Array.from(chipsContainer.querySelectorAll('.chip'));
    let active = 0;

    function rotateChips() {
        chips.forEach((c, i) => c.classList.toggle('glow', i === active));
        active = (active + 1) % chips.length;
    }
    setInterval(rotateChips, 2000);

    // Typed prompt/result (simple replace loop)
    const prompts = [
        'Generate outreach emails for new leads...',
        'Summarize 50-page report in key bullets...',
        'Create product descriptions from specs...',
        'Build SOPs from call transcripts...'
    ];
    const results = [
        '3 tailored emails with subject lines and CTAs',
        'Executive summary + action items in 8 bullets',
        'SEO-ready descriptions for 12 SKUs',
        'Clean SOP draft with steps and checklist'
    ];
    const promptEl = document.getElementById('typedPrompt');
    const resultEl = document.getElementById('typedResult');
    let idx = 0;

    function cycleText() {
        idx = (idx + 1) % prompts.length;
        promptEl.textContent = prompts[idx];
        resultEl.textContent = results[idx];
    }
    setInterval(cycleText, 3500);
})();

// Services-style carousels (support multiple instances on page)
document.querySelectorAll('.services-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.services-track');
    const slides = Array.from(track.querySelectorAll('.service-card'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    let autoplayTimer = null;
    const AUTOPLAY_MS = 5000;

    function setSlideWidths() {
        const cs = getComputedStyle(carousel);
        const innerWidth = carousel.clientWidth - parseFloat(cs.paddingLeft || 0) - parseFloat(cs.paddingRight || 0);
        const exact = Math.floor(innerWidth);
        slides.forEach(s => {
            s.style.width = `${exact}px`;
            s.style.minWidth = `${exact}px`;
            s.style.maxWidth = `${exact}px`;
        });
        track.style.width = `${exact * slides.length}px`;
        return exact;
    }

    function updateCarousel() {
        const slideWidth = setSlideWidths();
        const offset = currentIndex * slideWidth;
        track.style.transform = `translate3d(-${offset}px, 0, 0)`;
        slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
        // Infinite loop: arrows always enabled
        if (prevBtn) { prevBtn.disabled = false; prevBtn.setAttribute('aria-disabled', 'false'); }
        if (nextBtn) { nextBtn.disabled = false; nextBtn.setAttribute('aria-disabled', 'false'); }
    }

    function goPrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
        restartAutoplay();
    }
    function goNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
        restartAutoplay();
    }

    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);

    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goPrev();
        if (e.key === 'ArrowRight') goNext();
    });

    window.addEventListener('resize', () => updateCarousel());

    // Autoplay controls
    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(goNext, AUTOPLAY_MS);
    }
    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }
    function restartAutoplay() {
        startAutoplay();
    }
    // Pause on hover/focus; resume after
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);
    // Pause when tab hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopAutoplay(); else startAutoplay();
    });

    updateCarousel();
    startAutoplay();
});

// Testimonials carousel
const tCarousel = document.querySelector('.testimonials-carousel');
if (tCarousel) {
    const tTrack = tCarousel.querySelector('.testimonials-track');
    const tSlides = Array.from(tTrack.querySelectorAll('.testimonial-card'));
    const tPrev = tCarousel.querySelector('.carousel-btn.t-prev');
    const tNext = tCarousel.querySelector('.carousel-btn.t-next');
    let tIndex = 0;

    function setTWidths() {
        const cs = getComputedStyle(tCarousel);
        const innerWidth = tCarousel.clientWidth - parseFloat(cs.paddingLeft || 0) - parseFloat(cs.paddingRight || 0);
        const exact = Math.floor(innerWidth);
        tSlides.forEach(s => {
            s.style.width = `${exact}px`;
            s.style.minWidth = `${exact}px`;
            s.style.maxWidth = `${exact}px`;
        });
        tTrack.style.width = `${exact * tSlides.length}px`;
        return exact;
    }

    function updateT() {
        const w = setTWidths();
        const offset = tIndex * w;
        tTrack.style.transform = `translate3d(-${offset}px,0,0)`;
        tPrev.disabled = tIndex === 0;
        tNext.disabled = tIndex === tSlides.length - 1;
        tPrev.setAttribute('aria-disabled', tPrev.disabled);
        tNext.setAttribute('aria-disabled', tNext.disabled);
    }
    function goTP() { if (tIndex > 0) { tIndex--; updateT(); } }
    function goTN() { if (tIndex < tSlides.length - 1) { tIndex++; updateT(); } }

    tPrev.addEventListener('click', goTP);
    tNext.addEventListener('click', goTN);
    tCarousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goTP();
        if (e.key === 'ArrowRight') goTN();
    });
    window.addEventListener('resize', updateT);
    updateT();
}

// Lazy load images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console message for developers
console.log('%c🚀 DK Group Labs Landing Page', 'color: #10b981; font-size: 20px; font-weight: bold;');
console.log('%cOptimized for lead generation and engagement', 'color: #6b7280; font-size: 12px;');

// Track page load
trackEvent('page_view', {
    loadTime: Date.now() - pageLoadTime
});

// Lazy-load Google Form iframe src to avoid blocking render
document.addEventListener('DOMContentLoaded', () => {
    const gForm = document.getElementById('googleFormIframe');
    if (gForm && gForm.dataset && gForm.dataset.src) {
        gForm.src = gForm.dataset.src;
    }
});


// google sheet  form data store 
// ✅ Your Google Apps Script Web App URL
// const scriptURL = 'https://script.google.com/macros/s/AKfycby26lF-3nfWaBznmgaOXsA7lISO3sr8fkLRbCkCwRbQ3fFucNeRNV4eHd6DHyTN-zAy/exec';

// // Get the form
// const form = document.getElementById('leadForm');

// // Get button elements
// const btnText = form.querySelector('.btn-text');
// const btnLoader = form.querySelector('.btn-loader');

// // Create a message div below form
// const messageDiv = document.createElement('div');
// messageDiv.id = 'formMessage';
// messageDiv.style.display = 'none';
// form.appendChild(messageDiv);

// // Handle form submission
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Show loader
//   btnText.style.display = 'none';
//   btnLoader.style.display = 'inline-block';

//   // Collect form data
//   const formData = {
//     name: form.name.value.trim(),
//     email: form.email.value.trim(),
//     company: form.company.value.trim(),
//     phone: form.phone.value.trim(),
//     interest: form.interest.value.trim(),
//     message: form.message.value.trim()
//   };

//   // Send data to Google Apps Script
//  fetch(scriptURL, {
//   method: 'POST',
//   mode: 'no-cors', // <— this skips CORS restrictions
//   body: new FormData(form)
// })
//   .then(() => {
//     messageDiv.innerHTML = `
//       <p style="color: #4CAF50; text-align: center; margin-top: 15px;">
//         ✅ Thank you! Your consultation request has been received.
//       </p>`;
//     form.reset();
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//     messageDiv.innerHTML = `
//       <p style="color: #f44336; text-align: center; margin-top: 15px;">
//         ❌ Something went wrong. Please try again later.
//       </p>`;
//   })
//   .finally(() => {
//     btnText.style.display = 'inline-block';
//     btnLoader.style.display = 'none';
//     messageDiv.style.display = 'block';
//   });

// });

const scriptURL = "https://script.google.com/macros/s/AKfycby26lF-3nfWaBznmgaOXsA7lISO3sr8fkLRbCkCwRbQ3fFucNeRNV4eHd6DHyTN-zAy/exec"; // Paste from Apps Script deployment
const form = document.getElementById("leadForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const btnText = form.querySelector(".btn-text");
  const btnLoader = form.querySelector(".btn-loader");
  btnText.style.display = "none";
  btnLoader.style.display = "inline-block";

  const formData = {
    name: form.name.value,
    email: form.email.value,
    company: form.company.value,
    phone: form.phone.value,
    interest: form.interest.value,
    message: form.message.value,
  };

  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then(() => {
      alert("✅ Thank you! Your response has been recorded.");
      form.reset();
    })
    .catch((error) => {
      alert("❌ Something went wrong. Please try again.");
      console.error("Error!", error.message);
    })
    .finally(() => {
      btnText.style.display = "inline-block";
      btnLoader.style.display = "none";
    });
});
