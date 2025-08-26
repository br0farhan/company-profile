// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for components to load first
    document.addEventListener('componentsLoaded', function() {
        // Initialize all components after they're loaded
        initializeNavigation();
        initializeLoading();
        initializeScrollEffects();
        loadDynamicContent();
        initializeContactForm();
        initializeProjectFilters();
        initializeAnimations();
    });
});

// Navigation
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Prevent menu from closing when clicking inside menu
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Active navigation on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
        
        // Navbar background on scroll dengan class
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Loading Screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Scroll Effects
function initializeScrollEffects() {
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
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Load Dynamic Content
async function loadDynamicContent() {
    try {
        // Load profile data
        const profileData = await ProfileAPI.getProfile();
        updateProfileContent(profileData);
        
        // Load skills data
        const skillsData = await SkillsAPI.getSkills();
        updateSkillsContent(skillsData);
        
        // Load projects data
        const projectsData = await ProjectsAPI.getProjects();
        updateProjectsContent(projectsData);
        
    } catch (error) {
        console.error('Error loading dynamic content:', error);
    }
}

// Update Profile Content
function updateProfileContent(data) {
    // Hero section
    const heroName = document.getElementById('hero-name');
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    const heroImage = document.getElementById('hero-image');
    
    if (heroName) heroName.textContent = data.name;
    if (heroTitle) heroTitle.textContent = data.title;
    if (heroDescription) heroDescription.textContent = data.description;
    if (heroImage) heroImage.src = data.images?.profile || 'assets/images/profile.jpg';
    
    // About section dengan fallback values
    const aboutTitle = document.getElementById('about-title');
    const aboutDescription = document.getElementById('about-description');
    const aboutImage = document.getElementById('about-image');
    const experienceYears = document.getElementById('experience-years');
    const projectsCompleted = document.getElementById('projects-completed');
    const technologiesUsed = document.getElementById('technologies-used');
    
    if (aboutTitle) aboutTitle.textContent = data.about_title || 'Full Stack Developer';
    if (aboutDescription) aboutDescription.textContent = data.about_description || 'Passionate developer...';
    if (aboutImage) aboutImage.src = data.images?.about || 'assets/images/about.jpg';
    
    // Pastikan ada fallback values untuk statistik
    if (experienceYears) experienceYears.textContent = data.experience_years || '2+';
    if (projectsCompleted) projectsCompleted.textContent = data.projects_completed || '15+';
    if (technologiesUsed) technologiesUsed.textContent = data.technologies_used || '10+';
    
    // Contact section
    const contactEmail = document.getElementById('contact-email');
    const contactPhone = document.getElementById('contact-phone');
    const contactLocation = document.getElementById('contact-location');
    
    if (contactEmail) contactEmail.textContent = data.email;
    if (contactPhone) contactPhone.textContent = data.phone;
    if (contactLocation) contactLocation.textContent = data.location;
    
    // Social links
    const githubLink = document.getElementById('github-link');
    const linkedinLink = document.getElementById('linkedin-link');
    const twitterLink = document.getElementById('twitter-link');
    const instagramLink = document.getElementById('instagram-link');
    
    if (githubLink && data.social_links?.github) githubLink.href = data.social_links.github;
    if (linkedinLink && data.social_links?.linkedin) linkedinLink.href = data.social_links.linkedin;
    if (twitterLink && data.social_links?.twitter) twitterLink.href = data.social_links.twitter;
    if (instagramLink && data.social_links?.instagram) instagramLink.href = data.social_links.instagram;
}

// Update Skills Content
function updateSkillsContent(data) {
    const skillsContainer = document.getElementById('skills-container');
    
    if (!skillsContainer || !data.categories) {
        console.warn('Skills container not found or no categories data');
        return;
    }
    
    skillsContainer.innerHTML = data.categories.map(category => `
        <div class="skill-category">
            <div class="skill-category-header">
                <div class="skill-category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3 class="skill-category-title">${category.name}</h3>
            </div>
            <div class="skills-list">
                ${category.skills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Update Projects Content
function updateProjectsContent(data) {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer || !data.projects) return;
    
    projectsContainer.innerHTML = '';
    
    data.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = `project-card ${project.category}`;
        
        projectElement.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo_url}" class="project-link link-demo" target="_blank">Live Demo</a>
                    <a href="${project.code_url}" class="project-link link-code" target="_blank">View Code</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
}

// Project Filters
function initializeProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            
            // Add active class to clicked button
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filter projects with animation
            projectCards.forEach(card => {
                card.style.transition = 'all 0.3s ease';
                
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            try {
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                const response = await ContactAPI.sendMessage(data);
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
                
            } catch (error) {
                console.error('Error sending message:', error);
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
            }
        });
    }
}

// Animations
function initializeAnimations() {
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1500);
    }
    
    // Counter animation for stats
    const stats = document.querySelectorAll('.stat h4');
    const observerOptions = {
        threshold: 0.5
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Counter Animation
function animateCounter(element) {
    // Pastikan element memiliki textContent yang valid
    if (!element || !element.textContent) {
        return;
    }
    
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    
    // Jika target adalah NaN, skip animasi
    if (isNaN(target)) {
        return;
    }
    
    const suffix = element.textContent.replace(/\d/g, '');
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 50);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = '#10b981';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
    } else {
        notification.style.background = '#6366f1';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility Functions
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

// Performance optimization
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations can be added here
}, 10));