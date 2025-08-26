'use strict';

// Global variables
let currentLanguage = 'id';
const languageToggle = document.getElementById('language-toggle');
const navbar = document.getElementById('navbar');
const loadingScreen = document.getElementById('loading-screen');

// Translations object
const translations = {
    id: {
        nav_home: 'Beranda',
        nav_about: 'Tentang',
        nav_skills: 'Keahlian',
        nav_projects: 'Proyek',
        nav_contact: 'Kontak',

        hero_title: 'Hai, Saya Farhan',
        hero_subtitle: 'Frontend Developer & White Hat',
        hero_description: 'Halo! Nama saya Farhan dan saya seorang penggemar Flutter. Ketertarikan saya pada pengembangan aplikasi seluler dimulai pada tahun 2021 ketika saya mempelajari Flutter di tahun terakhir kuliah dan memutuskan untuk fokus di sana untuk memulai karier saya sebagai pengembang aplikasi seluler. Selain itu, saya sedang mempelajari keamanan siber dan telah melakukan beberapa pemeriksaan di beberapa situs web yang memiliki celah/bug.',
        hero_cta: 'Lihat Karya Saya',

        about_title: 'Tentang Saya',
        about_subtitle: 'Mengenal saya lebih dekat',
        about_name: 'Hai, Saya Farhan',
        about_subtitle_role: 'Frontend Developer & White Hat',
        about_description: 'Halo! Nama saya Farhan dan saya seorang penggemar Flutter. Ketertarikan saya pada pengembangan aplikasi seluler dimulai pada tahun 2021 ketika saya mempelajari Flutter di tahun terakhir kuliah dan memutuskan untuk fokus di sana untuk memulai karier saya sebagai pengembang aplikasi seluler. Selain itu, saya sedang mempelajari keamanan siber dan telah melakukan beberapa pemeriksaan di beberapa situs web yang memiliki celah/bug.',
        about_description: 'Halo! Nama saya Farhan dan saya seorang penggemar Flutter. Ketertarikan saya pada pengembangan aplikasi seluler dimulai pada tahun 2021 ketika saya mempelajari Flutter di tahun terakhir kuliah dan memutuskan untuk fokus di sana untuk memulai karier saya sebagai pengembang aplikasi seluler. Selain itu, saya sedang mempelajari keamanan siber dan telah melakukan beberapa pemeriksaan di beberapa situs web yang memiliki celah/bug.',
        stats_experience: 'Tahun Pengalaman',
        stats_projects: 'Proyek Selesai',
        stats_technologies: 'Teknologi',

        skills_title: 'Keahlian',
        skills_subtitle: 'Teknologi yang saya kuasai',

        projects_title: 'Proyek',
        projects_subtitle: 'Karya-karya terbaik saya',
        filter_all: 'Semua',
        filter_web: 'Web',
        filter_mobile: 'Mobile',
        filter_marketing: 'Digital Marketing',
        filter_security: 'Cybersecurity',

        contact_title: 'Kontak',
        contact_subtitle: 'Mari berkolaborasi',
        contact_intro_title: 'Mari Terhubung',
        contact_intro_text: 'Saya selalu terbuka untuk mendiskusikan proyek baru, peluang kreatif, atau sekadar mengobrol tentang teknologi.',
        contact_email_label: 'Email',
        contact_phone_label: 'Telepon',
        contact_location_label: 'Lokasi',
        contact_form_title: 'Kirim Pesan',
        contact_form_subtitle: 'Ceritakan tentang proyek Anda dan mari kita wujudkan bersama',
        form_name_label: 'Nama Lengkap',
        form_email_label: 'Email',
        form_subject_label: 'Subjek',
        form_message_label: 'Pesan',
        form_submit_btn: 'Kirim Pesan',
        form_name_placeholder: 'Masukkan nama Anda',
        form_email_placeholder: 'nama@email.com',
        form_subject_placeholder: 'Subjek pesan Anda',
        form_message_placeholder: 'Tulis pesan Anda di sini...'
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_projects: 'Projects',
        nav_contact: 'Contact',

        hero_title: 'Hi, I\'m Farhan',
        hero_subtitle: 'Frontend Developer & White Hat',
        hero_description: 'Hello! My name is Farhan and I am a Flutter enthusiast. My interest in mobile app development started in 2021 when I studied Flutter in my final year of college and decided to focus there to start my career as a mobile app developer. Apart from that, I am studying cyber security and have conducted several checks on several websites that have loopholes/bugs.',
        hero_cta: 'View My Work',

        about_title: 'About Me',
        about_subtitle: 'Get to know me better',
        about_name: 'Hi, I\'m Farhan',
        about_subtitle_role: 'Frontend Developer & White Hat',
        about_description: 'Hello! My name is Farhan and I am a Flutter enthusiast. My interest in mobile app development started in 2021 when I studied Flutter in my final year of college and decided to focus there to start my career as a mobile app developer. Apart from that, I am studying cyber security and have conducted several checks on several websites that have loopholes/bugs.',
        stats_experience: 'Years Experience',
        stats_projects: 'Projects Completed',
        stats_technologies: 'Technologies',

        skills_title: 'Skills',
        skills_subtitle: 'Technologies I master',

        projects_title: 'Projects',
        projects_subtitle: 'My best works',
        filter_all: 'All',
        filter_web: 'Web',
        filter_mobile: 'Mobile',
        filter_marketing: 'Digital Marketing',
        filter_security: 'Cybersecurity',

        contact_title: 'Contact',
        contact_subtitle: 'Let\'s collaborate',
        contact_intro_title: 'Let\'s Connect',
        contact_intro_text: 'I\'m always open to discussing new projects, creative opportunities, or just chatting about technology.',
        contact_email_label: 'Email',
        contact_phone_label: 'Phone',
        contact_location_label: 'Location',
        contact_form_title: 'Send Message',
        contact_form_subtitle: 'Tell me about your project and let\'s make it happen together',
        form_name_label: 'Full Name',
        form_email_label: 'Email',
        form_subject_label: 'Subject',
        form_message_label: 'Message',
        form_submit_btn: 'Send Message',
        form_name_placeholder: 'Enter your name',
        form_email_placeholder: 'name@email.com',
        form_subject_placeholder: 'Your message subject',
        form_message_placeholder: 'Write your message here...'
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Hide loading screen
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1000);

    // Initialize components
    setupMobileNavigation();
    setupLanguageToggle();
    updateLanguage();
    setupProjectFilters();
    setupSmoothScrolling();
    setupNavbarScroll();
    setupSkillsAnimation();
    setupContactForm();
});

// Setup Mobile Navigation
function setupMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Setup Language Toggle
function setupLanguageToggle() {
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        // Set initial button text - diperbaiki logikanya
        languageToggle.textContent = currentLanguage === 'id' ? 'ID' : 'EN';
    }
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
    updateLanguage();
    // Diperbaiki logikanya - button menampilkan bahasa yang sedang aktif
    languageToggle.textContent = currentLanguage === 'id' ? 'ID' : 'EN';
}

// Update language content
function updateLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Setup Project Filters
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
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
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Setup skills animation
function setupSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.getAttribute('data-width');
                progress.style.width = width + '%';
            }
        });
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || 'Pesan dari Website';
    const message = formData.get('message');

    // Format message for WhatsApp
    const whatsappMessage = `*Pesan Baru dari Website* 🌟\n\n` +
        `*Nama:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Subjek:* ${subject}\n\n` +
        `*Pesan:*\n${message}\n\n` +
        `---\n` +
        `Dikirim melalui website portfolio`;

    // Replace with your WhatsApp number (format: country code + number without +)
    const whatsappNumber = '+6285591133335'; // Ganti dengan nomor WhatsApp Anda
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show confirmation message
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk mengirim pesan.');

    // Reset form
    e.target.reset();
}

// Add required styles
const style = document.createElement('style');
style.textContent = `
    #loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f7fafc;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .loader {
        width: 50px;
        height: 50px;
        border: 3px solid #e2e8f0;
        border-top: 3px solid #4299e1;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);