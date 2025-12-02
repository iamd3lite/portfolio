  window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // smooth fade out
  });


    // Typing animation with fixed min-height container
        const texts = [
            'Full Stack Developer crafting beautiful, functional web experiences',
            'Building innovative solutions with modern technologies',
            'Turning ideas into elegant digital experiences'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            const typingElement = document.getElementById('typing-text');

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        type();

        // Premium Hamburger Menu
        var hamburger = document.getElementById('hamburger');
        var mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        var closeMenu = document.getElementById('closeMenu');
        var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        var body = document.body;

        hamburger.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            body.style.overflow = '';
        });

        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        });

        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Scroll Animations
        var fadeInSections = document.querySelectorAll('.fade-in-section');
        
        var observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);
        
        fadeInSections.forEach(function(section) {
            observer.observe(section);
        });

        // Contact Form
        var contactForm = document.getElementById('contactForm');
        var successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            if (name && email && message) {
                successMessage.classList.add('show');
                contactForm.reset();

                setTimeout(function() {
                    successMessage.classList.remove('show');
                }, 5000);

                console.log('Form submitted:', { name: name, email: email, message: message });
            }
        });

        // Scroll to Top
        var scrollToTopBtn = document.getElementById('scrollToTop');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Theme Toggle - Desktop & Mobile
        var themeToggle = document.getElementById('themeToggle');
        var mobileThemeToggle = document.getElementById('mobileThemeToggle');
        var mobileThemeText = document.getElementById('mobileThemeText');

        var currentTheme = localStorage.getItem('theme') || 'dark';

        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            updateThemeIcon(false);
            updateMobileThemeText(false);
        } else {
            updateThemeIcon(true);
            updateMobileThemeText(true);
        }

        function toggleTheme() {
            body.classList.toggle('light-mode');
            var isDark = !body.classList.contains('light-mode');
            updateThemeIcon(isDark);
            updateMobileThemeText(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        themeToggle.addEventListener('click', toggleTheme);
        mobileThemeToggle.addEventListener('click', toggleTheme);

        function updateThemeIcon(isDark) {
            var icon = themeToggle.querySelector('svg');
            if (isDark) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
            }
        }

        function updateMobileThemeText(isDark) {
            var icon = mobileThemeToggle.querySelector('svg');
            if (isDark) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
                mobileThemeText.textContent = 'Light Mode';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.6469.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
                mobileThemeText.textContent = 'Dark Mode';
                }
            }
