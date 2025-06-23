const mySwiper = new Swiper('.my-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    // Custom Swiper animation
    on: {
        init: function () {
            const slides = this.slides;
            slides.forEach(slide => {
                slide.style.transform = 'scale(0.8)';
                slide.style.transition = 'transform 0.5s';
            });
            slides[this.activeIndex].style.transform = 'scale(1)';
        },
        slideChange: function () {
            const slides = this.slides;
            slides.forEach(slide => {
                slide.style.transform = 'scale(0.8)';
            });
            slides[this.activeIndex].style.transform = 'scale(1)';
        }
    }
});
// index stats 5 odometer counters
// Updated JavaScript to use data-count attributes
document.addEventListener('DOMContentLoaded', function() {
  // Initialize odometers first
  const counters = document.querySelectorAll('.odometer');
  counters.forEach(counter => {
    new Odometer({
      el: counter,
      value: 0,
      format: '(,ddd)',
      duration: 2000
    });
  });

  // Animate when section comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count'));
          counter.innerHTML = target;
        });
      }
    });
  }, {threshold: 0.5});

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
// brands swiper
// Initialize Swiper after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  const brandSwiper = new Swiper('.brand-swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.brand-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.brand-swiper-button-next',
      prevEl: '.brand-swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 }
    },
    on: {
      init: function() {
        // Add initial animations
        this.slides.forEach((slide, index) => {
          slide.style.animation = `slideIn 0.6s ease ${index * 0.1}s forwards`;
        });
      },
      slideChange: function() {
        // Add pulse animation to active slide
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.style.animation = 'pulse 0.6s ease';
        
        // Reset animation after completion
        setTimeout(() => {
          activeSlide.style.animation = '';
        }, 600);
      }
    }
  });
  
  // Custom hover effects
  document.querySelectorAll('.brand-slide').forEach(slide => {
    slide.addEventListener('mouseenter', function() {
      if (!this.classList.contains('swiper-slide-active')) {
        this.style.transform = 'scale(1.02)';
      }
    });
    
    slide.addEventListener('mouseleave', function() {
      if (!this.classList.contains('swiper-slide-active')) {
        this.style.transform = 'scale(1)';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // index page scrollbtn
  const scrollbtn = document.getElementById("scroll-btn");

  if (scrollbtn) {
    scrollbtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor jump

      const target = document.getElementById("index-products");
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }
});
// about page process section
// Process Step Interaction
document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.about-process-step');
  const visualItems = document.querySelectorAll('.about-process-visual-item');
  
  steps.forEach((step, index) => {
    step.addEventListener('mouseenter', function() {
      // Remove active class from all
      visualItems.forEach(item => item.classList.remove('active'));
      // Add to corresponding item
      visualItems[index].classList.add('active');
    });
  });
});