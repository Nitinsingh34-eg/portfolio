// Anti-Gravity Portfolio Scripts

document.addEventListener('DOMContentLoaded', () => {

  // Typewriter effect
  const typeTarget = document.getElementById('typewriter');
  if (typeTarget) {
    const text = "B.Tech CSE | Cloud & DevOps Enthusiast";
    let index = 0;
    typeTarget.innerHTML = '';
    
    function typeWriter() {
      if (index < text.length) {
        typeTarget.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Speed of typing
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 800);
  }

  // Reveal elements on scroll using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Note: we haven't added the "fade-in-section" class to elements yet, that comes in the next step
  const revealElements = document.querySelectorAll('.section');
  revealElements.forEach(el => observer.observe(el));

  // Dynamic Mouse Move for Orbs (Parallax effect)
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    
    if (orb1) {
      orb1.style.transform = `translate(${mouseX * -50}px, ${mouseY * -50}px)`;
    }
    if (orb2) {
      orb2.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        document.querySelector('.nav-links').style.display = 'none';
      }
    });
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(5, 5, 15, 0.95)';
        navLinks.style.padding = '2rem 0';
        navLinks.style.backdropFilter = 'blur(15px)';
        navLinks.style.borderBottom = '1px solid var(--glass-border)';
      }
    });
  }

  // Contact Form Submission Mock
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Transmitting... <i class="fas fa-spinner fa-spin"></i>';
      
      setTimeout(() => {
        btn.innerHTML = 'Transmission Sent <i class="fas fa-check"></i>';
        btn.classList.remove('btn-primary');
        btn.style.background = 'var(--primary-glow)';
        btn.style.color = '#000';
        contactForm.reset();
        
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.add('btn-primary');
          btn.style.background = 'transparent';
          btn.style.color = 'var(--primary-glow)';
        }, 3000);
      }, 1500);
    });
  }

});
