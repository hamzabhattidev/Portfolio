    // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        // Check if user previously set a theme preference
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        
        themeToggle.addEventListener('click', () => {
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
        
        // Mobile Menu Toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
            mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            });
        });
        
        // Scroll to top button
        const scrollTopBtn = document.querySelector('.scroll-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Header hide/show on scroll
        let lastScrollTop = 0;
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Animate elements on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill progress bars when they become visible
                    if (entry.target.classList.contains('skill-card')) {
                        const progressBar = entry.target.querySelector('.skill-progress');
                        if (progressBar) {
                            // Trigger the width transition
                            progressBar.style.width = progressBar.style.width;
                        }
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements to animate
        document.querySelectorAll('.section-title, .about-content, .skills-content, .skill-category, .services-content, .service-card, .projects-content, .contact-content, .skill-card, .testimonials-content, .view-more-btn').forEach(element => {
            observer.observe(element);
        });
        
        // Create floating particles for hero section
        const createParticles = () => {
            const particles = document.querySelector('.particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('span');
                particle.classList.add('particle');
                
                // Random size between 10px and 40px
                const size = Math.random() * 30 + 10;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random animation duration and delay
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                particles.appendChild(particle);
            }
        };
        
        // Create background particles
        const createBgParticles = () => {
            const bgParticles = document.getElementById('bgParticles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('span');
                particle.classList.add('bg-particle');
                
                // Random size between 2px and 6px
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random animation duration and delay
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 10;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.3 + 0.1;
                
                bgParticles.appendChild(particle);
            }
        };
        
        // Create cursor following particles
        const createCursorParticles = () => {
            document.addEventListener('mousemove', (e) => {
                const cursorParticle = document.createElement('span');
                cursorParticle.classList.add('cursor-particle');
                
                // Position at cursor
                cursorParticle.style.left = `${e.clientX - 4}px`;
                cursorParticle.style.top = `${e.clientY - 4}px`;
                
                // Random size between 4px and 10px
                const size = Math.random() * 6 + 4;
                cursorParticle.style.width = `${size}px`;
                cursorParticle.style.height = `${size}px`;
                
                // Random color variation
                const hue = Math.random() * 60 + 200; // Blue to purple range
                cursorParticle.style.background = `hsl(${hue}, 100%, 70%)`;
                
                document.body.appendChild(cursorParticle);
                
                // Remove after animation completes
                setTimeout(() => {
                    cursorParticle.remove();
                }, 1000);
            });
        };
        
        // Create particles
        createParticles();
        createBgParticles();
        createCursorParticles();
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would normally add your form submission logic
            // This is just a placeholder for demonstration
            
            alert('Form submitted! In a real application, this would send an email or store the data.');
            contactForm.reset();
        });
        
        // Page loader
        window.addEventListener('load', () => {
            const pageLoader = document.querySelector('.page-loader');
            setTimeout(() => {
                pageLoader.classList.add('loaded');
            }, 500);
        });

        // Projects filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        const viewMoreBtn = document.querySelector('.view-more-btn');
        let allProjects = Array.from(projectCards);
        let visibleProjects = 3;

        function filterProjects(filter) {
            allProjects.forEach((card, index) => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    if (index >= 3) {
                        card.classList.add('hidden');
                    }
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Reset view more button
            visibleProjects = 3;
            updateViewMoreButton();
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;
                filterProjects(filter);
            });
        });

        // View more projects functionality
        viewMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const hiddenProjects = document.querySelectorAll('.project-card.hidden');
            const projectsToShow = Math.min(3, hiddenProjects.length);
            
            for (let i = 0; i < projectsToShow; i++) {
                hiddenProjects[i].classList.remove('hidden');
                visibleProjects++;
            }
            
            updateViewMoreButton();
            
            // Smooth scroll to newly shown projects
            if (projectsToShow > 0) {
                hiddenProjects[projectsToShow - 1].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        });

        function updateViewMoreButton() {
            const hiddenProjects = document.querySelectorAll('.project-card.hidden');
            if (hiddenProjects.length === 0) {
                viewMoreBtn.style.display = 'none';
            } else {
                viewMoreBtn.style.display = 'block';
            }
        }

        // Initialize projects
        filterProjects('all');

        // Testimonial slider functionality
        const testimonialTrack = document.querySelector('.testimonial-track');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
            
            // Update active dot
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            testimonialDots[index].classList.add('active');
            
            currentTestimonial = index;
        }

        // Click event for dots
        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                showTestimonial(parseInt(dot.dataset.index));
            });
        });

        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
            showTestimonial(currentTestimonial);
        }, 5000);

        // Pause carousel animation on hover for skills
        const carouselContainers = document.querySelectorAll('.carousel-container');
        
        carouselContainers.forEach(container => {
            container.addEventListener('mouseenter', () => {
                container.style.animationPlayState = 'paused';
            });
            
            container.addEventListener('mouseleave', () => {
                container.style.animationPlayState = 'running';
            });
        });