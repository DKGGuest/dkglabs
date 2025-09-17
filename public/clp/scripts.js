// Create animated particles
function createParticles() {
  const container = document.getElementById('particles');
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

// Initialize sidebar functionality
function initializeSidebar() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  const closeBtn = document.querySelector('.close-btn');

  if (hamburgerMenu && sidebar) {
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      sidebar.classList.toggle('active');
      sidebarOverlay.classList.toggle('active');
      document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
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
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(15, 15, 35, 0.98)';
  } else {
    nav.style.background = 'rgba(15, 15, 35, 0.95)';
  }
}

// Responsive particle count
function updateParticles() {
  const container = document.getElementById('particles');
  const currentCount = container.children.length;
  const targetCount = Math.min(50, Math.floor(window.innerWidth / 20));

  if (currentCount !== targetCount) {
    container.innerHTML = '';
    createParticles();
  }
}

// Initialize registration form
function initializeRegistrationForm() {
  const form = document.querySelector('.registration-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitBtn = form.querySelector('.register-btn');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
      
      try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        submitBtn.textContent = 'Submitted Successfully!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset form
        form.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
        
      } catch (error) {
        submitBtn.textContent = 'Error - Try Again';
        submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      }
    });
  }
}

// Smooth scroll functionality
function initializeSmoothScroll() {
  const ctaButton = document.querySelector('.cta-button');
  const splitSection = document.querySelector('.split-section');
  
  if (ctaButton && splitSection) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      splitSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

// Initialize fade-in animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Initialize particle animation
function initializeParticles() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'hero-particles';
  heroSection.appendChild(particlesContainer);

  // Create particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 3 + 's';
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeSidebar();
  initializeRegistrationForm();
  initializeSmoothScroll();
  initializeAnimations();
  initializeParticles();
});

window.addEventListener('scroll', () => {
  handleScrollAnimations();
  handleNavScroll();
});

window.addEventListener('resize', () => {
  updateParticles();
});

