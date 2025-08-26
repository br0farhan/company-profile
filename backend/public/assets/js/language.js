// Language Configuration
const LANGUAGES = {
    id: {
        // Navigation
        nav_home: 'Beranda',
        nav_about: 'Tentang',
        nav_skills: 'Keahlian', 
        nav_projects: 'Proyek',
        nav_contact: 'Kontak',
        
        // Hero Section
        hero_title: 'Hai, Saya Farhan',
        hero_subtitle: 'Full Stack Developer',
        hero_description: 'Developer yang bersemangat dengan keahlian dalam teknologi web modern. Saya menciptakan aplikasi yang indah, fungsional, dan user-friendly.',
        btn_view_work: 'Lihat Karya Saya',
        btn_get_in_touch: 'Hubungi Saya',
        
        // About Section
        about_title: 'Tentang Saya',
        about_subtitle: 'Full Stack Developer & Problem Solver',
        about_description: 'Saya adalah seorang full stack developer yang bersemangat dengan fondasi yang kuat dalam teknologi frontend dan backend. Saya suka menciptakan solusi digital yang membuat perbedaan dan terus belajar teknologi baru untuk tetap mengikuti tren industri.',
        stats_experience: 'Tahun Pengalaman',
        stats_projects: 'Proyek Selesai',
        stats_technologies: 'Teknologi',
        btn_download_cv: 'Unduh CV',
        
        // Skills Section
        skills_title: 'Keahlian & Teknologi',
        skills_subtitle: 'Teknologi yang saya kuasai',
        
        // Projects Section
        projects_title: 'Proyek Unggulan',
        projects_subtitle: 'Beberapa karya terbaru saya',
        filter_all: 'Semua',
        filter_web: 'Aplikasi Web',
        filter_mobile: 'Mobile',
        filter_api: 'API',
        
        // Contact Section
        contact_title: 'Hubungi Saya',
        contact_subtitle: 'Mari bekerja sama',
        contact_email: 'Email',
        contact_phone: 'Telepon',
        contact_location: 'Lokasi',
        form_name: 'Nama Anda',
        form_email: 'Email Anda',
        form_subject: 'Subjek',
        form_message: 'Pesan Anda',
        btn_send: 'Kirim Pesan'
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_projects: 'Projects', 
        nav_contact: 'Contact',
        
        // Hero Section
        hero_title: 'Hi, I\'m Farhan',
        hero_subtitle: 'Full Stack Developer',
        hero_description: 'Passionate developer with expertise in modern web technologies. I create beautiful, functional, and user-friendly applications.',
        btn_view_work: 'View My Work',
        btn_get_in_touch: 'Get In Touch',
        
        // About Section
        about_title: 'About Me',
        about_subtitle: 'Full Stack Developer & Problem Solver',
        about_description: 'I\'m a passionate full stack developer with a strong foundation in both frontend and backend technologies. I love creating digital solutions that make a difference and constantly learning new technologies to stay current with industry trends.',
        stats_experience: 'Years Experience',
        stats_projects: 'Projects Completed',
        stats_technologies: 'Technologies',
        btn_download_cv: 'Download CV',
        
        // Skills Section
        skills_title: 'Skills & Technologies',
        skills_subtitle: 'Technologies I work with',
        
        // Projects Section
        projects_title: 'Featured Projects',
        projects_subtitle: 'Some of my recent work',
        filter_all: 'All',
        filter_web: 'Web Apps',
        filter_mobile: 'Mobile',
        filter_api: 'API',
        
        // Contact Section
        contact_title: 'Get In Touch',
        contact_subtitle: 'Let\'s work together',
        contact_email: 'Email',
        contact_phone: 'Phone',
        contact_location: 'Location',
        form_name: 'Your Name',
        form_email: 'Your Email',
        form_subject: 'Subject',
        form_message: 'Your Message',
        btn_send: 'Send Message'
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'id';
        this.init();
    }
    
    init() {
        // Wait for components to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeLanguageToggle();
                this.updateContent();
            });
        } else {
            // DOM already loaded
            setTimeout(() => {
                this.initializeLanguageToggle();
                this.updateContent();
            }, 100);
        }
        
        // Also listen for componentsLoaded event
        document.addEventListener('componentsLoaded', () => {
            this.initializeLanguageToggle();
            this.updateContent();
        });
    }
    
    initializeLanguageToggle() {
        // Find existing language toggle in header
        const langToggle = document.getElementById('language-toggle');
        if (!langToggle) {
            console.warn('Language toggle not found in header');
            return;
        }
        
        // Set initial active state
        this.updateActiveButton();
        
        // Add event listeners to existing buttons
        const langButtons = langToggle.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = e.target.dataset.lang;
                if (targetLang) {
                    this.switchLanguage(targetLang);
                }
            });
        });
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLang || !LANGUAGES[lang]) return;
        
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        this.updateActiveButton();
        this.updateContent();
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    updateActiveButton() {
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }
    
    updateContent() {
        const texts = LANGUAGES[this.currentLang];
        if (!texts) return;
        
        // Update all elements with data-lang attribute
        Object.keys(texts).forEach(key => {
            const elements = document.querySelectorAll(`[data-lang="${key}"]`);
            elements.forEach(el => {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = texts[key];
                } else {
                    el.textContent = texts[key];
                }
            });
        });
        
        // Update filter buttons
        this.updateFilterButtons();
        
        // Update form placeholders
        this.updateFormPlaceholders();
    }
    
    updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const texts = LANGUAGES[this.currentLang];
        
        filterButtons.forEach(btn => {
            const filter = btn.dataset.filter;
            if (filter === 'all') {
                btn.textContent = texts.filter_all;
            } else if (filter === 'web') {
                btn.textContent = texts.filter_web;
            } else if (filter === 'mobile') {
                btn.textContent = texts.filter_mobile;
            } else if (filter === 'api') {
                btn.textContent = texts.filter_api;
            }
        });
    }
    
    updateFormPlaceholders() {
        const currentTexts = LANGUAGES[this.currentLang];
        
        // Update form placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (currentTexts[key]) {
                element.placeholder = currentTexts[key];
            }
        });
    }
}

// Initialize language manager
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.languageManager = new LanguageManager();
    });
} else {
    window.languageManager = new LanguageManager();
}