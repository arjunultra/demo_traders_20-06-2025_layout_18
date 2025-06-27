document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM fully loaded");

  const tiles = document.querySelectorAll("[data-tilt]");
  console.log("🎯 Tilt elements found:", tiles.length);

  if (tiles.length === 0) {
    console.warn("⚠️ No elements with [data-tilt] found. Check your HTML or timing.");
  }

  tiles.forEach(tile => {
    console.log("🧱 Tilt setup for tile:", tile);

    tile.addEventListener("mousemove", (e) => {
      const rect = tile.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50;

      tile.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.03)`;

      console.log(`🎯 Mousemove on tile | x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`);
    });

    tile.addEventListener("mouseleave", () => {
      tile.style.transform = "rotateX(0) rotateY(0) scale(1)";
      console.log("👋 Mouse left tile — reset transform");
    });
  });
});
// index counnter
// Simple counter animation on scroll into view
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".home-counter .counter-box");
    const options = {
      threshold: 0.5
    };

    const startCounting = (entry) => {
      const box = entry.target;
      const target = parseInt(box.getAttribute("data-target"));
      const numberEl = box.querySelector(".counter-number");
      let current = 0;
      const duration = 2000;
      const increment = Math.ceil(target / (duration / 16));
      const counterInterval = setInterval(() => {
        current += increment;
        if (current >= target) {
          numberEl.textContent = target + "+";
          clearInterval(counterInterval);
        } else {
          numberEl.textContent = current;
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting(entry);
          obs.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach(counter => observer.observe(counter));
  });
  // index swiper
  // Vertical Swiper with Fade and Slide Animation
document.addEventListener('DOMContentLoaded', function() {
    const verticalSwiper = function() {
        const container = document.querySelector('.vertical-swiper-container');
        const wrapper = document.querySelector('.vertical-swiper-wrapper');
        const slides = document.querySelectorAll('.vertical-swiper-slide');
        
        if (!container || slides.length === 0) return;

        let currentIndex = 0;
        let startY = 0;
        let isDragging = false;
        let isAnimating = false;
        let interval = null;
        const duration = 5000;
        const swipeThreshold = 50;

        // Initialize
        function init() {
            slides[currentIndex].classList.add('active');
            startAutoplay();
            setupTouchEvents();
            adjustWrapperHeight();
            window.addEventListener('resize', adjustWrapperHeight);
        }

        function adjustWrapperHeight() {
            if (slides.length > 0) {
                // wrapper.style.height = slides[0].offsetHeight + 'px';
            }
        }

        function setupTouchEvents() {
            container.addEventListener('touchstart', handleTouchStart, { passive: true });
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            container.addEventListener('touchend', handleTouchEnd);
            container.addEventListener('mousedown', handleMouseDown);
        }

        function handleTouchStart(e) {
            startY = e.touches[0].clientY;
            isDragging = true;
            pauseAutoplay();
        }

        function handleTouchMove(e) {
            if (!isDragging || isAnimating) return;
            e.preventDefault();
        }

        function handleTouchEnd(e) {
            if (!isDragging || isAnimating) return;
            
            const endY = e.changedTouches[0].clientY;
            const diffY = startY - endY;
            
            if (Math.abs(diffY) > swipeThreshold) {
                if (diffY > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            
            isDragging = false;
            startAutoplay();
        }

        function handleMouseDown(e) {
            startY = e.clientY;
            isDragging = true;
            pauseAutoplay();
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        function handleMouseMove(e) {
            if (!isDragging || isAnimating) return;
            e.preventDefault();
        }

        function handleMouseUp(e) {
            if (!isDragging || isAnimating) return;
            
            const endY = e.clientY;
            const diffY = startY - endY;
            
            if (Math.abs(diffY) > swipeThreshold) {
                if (diffY > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            
            isDragging = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            startAutoplay();
        }

        function startAutoplay() {
            pauseAutoplay();
            interval = setInterval(nextSlide, duration);
        }

        function pauseAutoplay() {
            clearInterval(interval);
        }

        function nextSlide() {
            if (isAnimating) return;
            isAnimating = true;
            
            const currentSlide = slides[currentIndex];
            currentSlide.classList.remove('active');
            currentSlide.classList.add('fade-out');
            
            currentIndex = (currentIndex + 1) % slides.length;
            
            setTimeout(() => {
                resetSlides();
                slides[currentIndex].classList.add('active');
                isAnimating = false;
            }, 800);
        }

        function prevSlide() {
            if (isAnimating) return;
            isAnimating = true;
            
            const currentSlide = slides[currentIndex];
            currentSlide.classList.remove('active');
            currentSlide.classList.add('fade-out');
            
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            
            setTimeout(() => {
                resetSlides();
                slides[currentIndex].classList.add('active');
                isAnimating = false;
            }, 800);
        }

        function resetSlides() {
            slides.forEach(slide => {
                slide.classList.remove('fade-out');
                slide.classList.remove('active');
            });
        }

        init();
    };

    verticalSwiper();
});
// Fireworks Guide Section Interaction
document.addEventListener('DOMContentLoaded', function() {
    const guideSection = document.querySelector('.fireworks-guide-section');
    if (!guideSection) return;

    // Tab Switching Functionality
    const tabs = guideSection.querySelectorAll('.guide-section-tab');
    const tableRows = guideSection.querySelectorAll('.guide-section-table-row');
    const productCards = guideSection.querySelectorAll('.guide-section-product-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Get selected level
            const level = this.dataset.level;

            // Update table rows
            tableRows.forEach(row => {
                row.classList.remove('active');
                if (row.dataset.category === level) {
                    row.classList.add('active');
                }
            });

            // Update product cards
            productCards.forEach(card => {
                card.classList.remove('active');
                if (card.dataset.category === level) {
                    card.classList.add('active');
                }
            });

            // Animate the switch
            animateTabSwitch(level);
        });
    });

    // Tab switch animation
    function animateTabSwitch(level) {
        const activeProducts = guideSection.querySelectorAll(`.guide-section-product-card[data-category="${level}"].active`);
        
        activeProducts.forEach((product, index) => {
            product.style.opacity = '0';
            product.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                product.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                product.style.opacity = '1';
                product.style.transform = 'translateY(0)';
                
                // Remove inline styles after animation
                setTimeout(() => {
                    product.style.transition = '';
                    product.style.opacity = '';
                    product.style.transform = '';
                }, 400);
            }, index * 100);
        });
    }

    // Product card hover effects
    productCards.forEach(card => {
        const product = card.querySelector('.guide-section-product');
        
        card.addEventListener('mouseenter', function() {
            if (!card.classList.contains('active')) return;
            
            const icon = product.querySelector('.guide-section-product-icon');
            icon.style.transform = 'scale(1.1)';
            
            // Add pulse animation
            icon.style.animation = 'productIconPulse 1.5s infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = product.querySelector('.guide-section-product-icon');
            icon.style.transform = '';
            icon.style.animation = '';
        });
    });

    // Add pulse animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes productIconPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});
// about intro section
// Fireworks Guide Section Interaction
document.addEventListener('DOMContentLoaded', function() {
    const guideSection = document.querySelector('.fireworks-guide-section');
    if (!guideSection) return;

    // Tab Switching Functionality
    const tabs = guideSection.querySelectorAll('.guide-section-tab');
    const tableRows = guideSection.querySelectorAll('.guide-section-table-row');
    const productCards = guideSection.querySelectorAll('.guide-section-product-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Get selected level
            const level = this.dataset.level;

            // Update table rows
            tableRows.forEach(row => {
                row.classList.remove('active');
                if (row.dataset.category === level) {
                    row.classList.add('active');
                }
            });

            // Update product cards
            productCards.forEach(card => {
                card.classList.remove('active');
                if (card.dataset.category === level) {
                    card.classList.add('active');
                }
            });

            // Animate the switch
            animateTabSwitch(level);
        });
    });

    // Tab switch animation
    function animateTabSwitch(level) {
        const activeProducts = guideSection.querySelectorAll(`.guide-section-product-card[data-category="${level}"].active`);
        
        activeProducts.forEach((product, index) => {
            product.style.opacity = '0';
            product.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                product.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                product.style.opacity = '1';
                product.style.transform = 'translateY(0)';
                
                // Remove inline styles after animation
                setTimeout(() => {
                    product.style.transition = '';
                    product.style.opacity = '';
                    product.style.transform = '';
                }, 400);
            }, index * 100);
        });
    }

    // Product card hover effects
    productCards.forEach(card => {
        const product = card.querySelector('.guide-section-product');
        
        card.addEventListener('mouseenter', function() {
            if (!card.classList.contains('active')) return;
            
            const icon = product.querySelector('.guide-section-product-icon');
            icon.style.transform = 'scale(1.1)';
            
            // Add pulse animation
            icon.style.animation = 'productIconPulse 1.5s infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = product.querySelector('.guide-section-product-icon');
            icon.style.transform = '';
            icon.style.animation = '';
        });
    });

    // Add pulse animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes productIconPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});
// about page intro section
// const aboutSection = document.querySelector('.about-us-section');
// if (!aboutSection) return;
// Initialize WOW.js animations
new WOW().init();

// Add interactive hover effects for service cards

document.querySelectorAll('.about-us-section .service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click animation to commitment CTA button
document.querySelector('.about-us-section .commitment-cta').addEventListener('click', function(e) {
    // e.preventDefault();
    
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Add your navigation logic here
    // window.location.href = 'products.php';
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for triggering animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add staggered animation for service cards
            if (entry.target.classList.contains('service-card')) {
                const cards = document.querySelectorAll('.about-us-section .service-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                    }, index * 150);
                });
            }
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.about-us-section .service-card, .about-us-section .vision-card').forEach(el => {
    observer.observe(el);
});

// Add floating particles effect
function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'var(--color1)';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.6';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 10;
    const endY = -10;
    const duration = 3000 + Math.random() * 2000;
    
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    
    document.querySelector('.about-us-section').appendChild(particle);
    
    particle.animate([
        { transform: 'translateY(0px)', opacity: 0 },
        { transform: 'translateY(-20px)', opacity: 0.6 },
        { transform: `translateY(${endY - startY}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => {
        particle.remove();
    };
}

// Create floating particles periodically
setInterval(createFloatingParticle, 800);

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const aboutSection = document.querySelector('.about-us-section');
    const rect = aboutSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        const parallaxElement = aboutSection.querySelector('::before');
        if (parallaxElement) {
            aboutSection.style.setProperty('--scroll-offset', scrolled * 0.5 + 'px');
        }
    }
});

// Add smooth reveal animation for highlight items
document.querySelectorAll('.about-us-section .highlight-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.6s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, 1000 + (index * 200));
});

// Add dynamic text typing effect for story title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Trigger typing effect when story section comes into view
const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const titleElement = entry.target.querySelector('.story-title');
            const originalText = titleElement.textContent;
            typeWriter(titleElement, originalText, 80);
            storyObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const storyContent = document.querySelector('.about-us-section .story-content');
if (storyContent) {
    storyObserver.observe(storyContent);
}

//about brands section
// Initialize WOW.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize WOW.js only if it exists
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Check if Swiper is loaded before initialization
    if (typeof Swiper === 'function') {
        const brandsSwiper = new Swiper('.brands-swiper-container', {
            // Basic settings
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            watchSlidesProgress: true,
            keyboard: true,
            allowTouchMove: true,
            grabCursor: true,
            loop: true,
             freeMode: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 2000,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            
            
           
            
            // Responsive breakpoints
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                }
            },
            
            // Navigation
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // Pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            // Accessibility
            a11y: {
                prevSlideMessage: 'Previous brand',
                nextSlideMessage: 'Next brand',
                paginationBulletMessage: 'Go to brand {{index}}'
            }
        });

        // Pause autoplay on hover
        const swiperContainer = document.querySelector('.brands-swiper-container');
        if (swiperContainer) {
            swiperContainer.addEventListener('mouseenter', () => {
                brandsSwiper.autoplay.stop();
            });

            swiperContainer.addEventListener('mouseleave', () => {
                brandsSwiper.autoplay.start();
            });
        }

        // Add click effect to brand cards
        document.querySelectorAll('.brand-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Prevent triggering if clicking on a link inside the card
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });

        // Enhanced navigation button effects
        document.querySelectorAll('.swiper-button-prev, .swiper-button-next').forEach(button => {
            button.addEventListener('click', function() {
                // Add temporary active class
                this.classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                }, 300);
            });
        });
    } else {
        console.error('Swiper library is not loaded');
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        /* Swiper navigation button animations */
        .swiper-button-prev.active i,
        .swiper-button-next.active i {
            animation: navButtonClick 0.3s ease;
        }
        
        @keyframes navButtonClick {
            0% { transform: scale(1); }
            50% { transform: scale(0.7); }
            100% { transform: scale(1); }
        }
        
        /* Brand card hover effects */
        .brand-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .brand-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        
        .brand-logo i {
            transition: transform 0.3s ease, color 0.3s ease;
        }
        
        .brand-card:hover .brand-logo i {
            transform: scale(1.2);
            color: var(--color4) !important;
        }
        
        /* Rating stars animation */
        .brand-card:hover .brand-rating i {
            animation: starPulse 0.6s ease infinite alternate;
        }
        
        .brand-card:hover .brand-rating i:nth-child(2) {
            animation-delay: 0.1s;
        }
        
        .brand-card:hover .brand-rating i:nth-child(3) {
            animation-delay: 0.2s;
        }
        
        .brand-card:hover .brand-rating i:nth-child(4) {
            animation-delay: 0.3s;
        }
        
        .brand-card:hover .brand-rating i:nth-child(5) {
            animation-delay: 0.4s;
        }
        
        @keyframes starPulse {
            0% { transform: scale(1); color: var(--color1); }
            100% { transform: scale(1.2); color: var(--color4); }
        }
    `;
    document.head.appendChild(style);
});
// about why choose section
document.addEventListener('DOMContentLoaded', function() {
    // Set initial icon colors
    document.querySelectorAll('.why-choose-card').forEach(card => {
        const color = card.getAttribute('data-color');
        const icon = card.querySelector('.why-choose-icon i');
        
        switch(color) {
            case 'color1':
                icon.style.color = 'var(--color3)';
                break;
            case 'color2':
                icon.style.color = 'var(--color2)';
                break;
            case 'color3':
                icon.style.color = 'var(--color3)';
                break;
            case 'color4':
                icon.style.color = 'var(--color4)';
                break;
        }
    });

    // Mobile click toggle
    if (window.innerWidth <= 767) {
        document.querySelectorAll('.why-choose-card').forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }
});