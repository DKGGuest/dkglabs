// Create animated particles
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(particle);
  }
}

// Scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navigation background on scroll
function handleNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(15, 15, 35, 0.98)';
  } else {
    nav.style.background = 'rgba(15, 15, 35, 0.95)';
  }
}

// Responsive particle count
function updateParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  const currentCount = container.children.length;
  const targetCount = Math.min(50, Math.floor(window.innerWidth / 20));

  if (currentCount !== targetCount) {
    container.innerHTML = '';
    createParticles();
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  handleScrollAnimations();
  validateCompanyInput(); // Initialize company validation

  // Auto-trigger scroll animations for thank you page
  setTimeout(() => {
    handleScrollAnimations();
  }, 500);
});

window.addEventListener('scroll', () => {
  handleScrollAnimations();
  handleNavScroll();
});

window.addEventListener('resize', () => {
  updateParticles();
});

// Company input validation
function validateCompanyInput() {
  const companyInput = document.getElementById('company');
  if (!companyInput) return;

  // Real-time validation on input
  companyInput.addEventListener('input', function(e) {
    const value = e.target.value;
    const alphabetOnlyRegex = /^[A-Za-z\s]*$/;

    // Remove any non-alphabetic characters (except spaces)
    if (!alphabetOnlyRegex.test(value)) {
      e.target.value = value.replace(/[^A-Za-z\s]/g, '');
    }

    // Check minimum length and show validation message
    const isValid = e.target.value.length >= 4 && alphabetOnlyRegex.test(e.target.value);

    // Remove existing validation message
    const existingMessage = e.target.parentNode.querySelector('.validation-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Add validation styling and message
    if (e.target.value.length > 0 && !isValid) {
      e.target.style.borderColor = '#ff4444';

      if (e.target.value.length < 4) {
        const message = document.createElement('div');
        message.className = 'validation-message';
        message.style.color = '#ff4444';
        message.style.fontSize = '12px';
        message.style.marginTop = '4px';
        message.textContent = 'Company name must be at least 4 characters long';
        e.target.parentNode.appendChild(message);
      }
    } else if (isValid) {
      e.target.style.borderColor = '#22c55e';
    } else {
      e.target.style.borderColor = '';
    }
  });

  // Validation on blur
  companyInput.addEventListener('blur', function(e) {
    const value = e.target.value.trim();
    const alphabetOnlyRegex = /^[A-Za-z\s]{4,}$/;

    // Remove existing validation message
    const existingMessage = e.target.parentNode.querySelector('.validation-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    if (value && !alphabetOnlyRegex.test(value)) {
      e.target.style.borderColor = '#ff4444';
      const message = document.createElement('div');
      message.className = 'validation-message';
      message.style.color = '#ff4444';
      message.style.fontSize = '12px';
      message.style.marginTop = '4px';

      if (value.length < 4) {
        message.textContent = 'Company name must be at least 4 characters long';
      } else {
        message.textContent = 'Company name must contain only letters and spaces';
      }

      e.target.parentNode.appendChild(message);
    } else if (value) {
      e.target.style.borderColor = '#22c55e';
    }
  });
}

// Enhanced Form submission with loading states and redirect
const quickForm = document.getElementById("quickForm");
if (quickForm) {
  quickForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate company field before submission
    const companyInput = document.getElementById('company');
    const companyValue = companyInput.value.trim();
    const alphabetOnlyRegex = /^[A-Za-z\s]{4,}$/;

    if (!alphabetOnlyRegex.test(companyValue)) {
      // Show error message
      const existingMessage = companyInput.parentNode.querySelector('.validation-message');
      if (existingMessage) {
        existingMessage.remove();
      }

      const message = document.createElement('div');
      message.className = 'validation-message';
      message.style.color = '#ff4444';
      message.style.fontSize = '12px';
      message.style.marginTop = '4px';

      if (companyValue.length < 4) {
        message.textContent = 'Company name must be at least 4 characters long';
      } else {
        message.textContent = 'Company name must contain only letters and spaces';
      }

      companyInput.parentNode.appendChild(message);
      companyInput.style.borderColor = '#ff4444';
      companyInput.focus();
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = document.getElementById('submitBtn');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';

    const scriptURL = "https://script.google.com/macros/s/AKfycbwdpHT7xYkXrUsVd31zEy2DKwFl-pwWm7vCCoWuwTHoH-0vm5F2wS-vqqSuk1zl-WY_xQ/exec";

    fetch(scriptURL, {
      method: "POST",
      body: formData
    })
      .then((response) => {
        // Success - redirect to thank you page
        window.location.href = "/landing/Thanks.html";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Submission failed. Please try again.");
        
        // Reset button state on error
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
      });
  });
}

// Add smooth transitions and micro-interactions
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to benefit items
  const benefitItems = document.querySelectorAll('.benefit-item');
  benefitItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(8px)';
      item.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
    });
  });

  // Add focus states for form inputs
  const formInputs = document.querySelectorAll('.quick-form input, .quick-form select');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.02)';
      input.parentElement.style.transition = 'all 0.2s ease';
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
    });
  });

  // Add floating animation to success icon on thank you page
  const successIcon = document.querySelector('.success-icon');
  if (successIcon) {
    let floatDirection = 1;
    setInterval(() => {
      const currentTransform = successIcon.style.transform || 'translateY(0px)';
      const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)\)/)?.[1] || '0');
      const newY = currentY + (floatDirection * 2);
      
      if (Math.abs(newY) > 10) {
        floatDirection *= -1;
      }
      
      successIcon.style.transform = `translateY(${newY}px)`;
      successIcon.style.transition = 'transform 0.5s ease-in-out';
    }, 100);
  }

  // Add progressive enhancement for stats animation on thank you page
  const statNumbers = document.querySelectorAll('.stat-number');
  const animateStats = () => {
    statNumbers.forEach(stat => {
      const finalValue = stat.textContent;
      const isPercentage = finalValue.includes('%');
      const numericValue = parseInt(finalValue.replace(/\D/g, ''));
      
      if (numericValue && numericValue > 0) {
        let currentValue = 0;
        const increment = Math.ceil(numericValue / 30);
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= numericValue) {
            currentValue = numericValue;
            clearInterval(timer);
          }
          stat.textContent = currentValue + (isPercentage ? '%' : '+');
        }, 50);
      }
    });
  };

  // Trigger stats animation when elements come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.classList.contains('stats-grid')) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  });

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    observer.observe(statsGrid);
  }
});