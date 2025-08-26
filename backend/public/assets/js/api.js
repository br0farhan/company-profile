// API Configuration
const API_CONFIG = {
    baseURL: 'http://192.168.15.189:8000/api', // Ubah ke IP yang sama dengan frontend
    endpoints: {
        profile: '/profile',
        skills: '/skills',
        projects: '/projects',
        contact: '/contact'
    }
};

// API Helper Functions
class API {
    static async request(endpoint, options = {}) {
        const url = `${API_CONFIG.baseURL}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        
        try {
            const response = await fetch(url, { ...defaultOptions, ...options });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Request failed:', error);
            // Return fallback data if API fails
            return this.getFallbackData(endpoint);
        }
    }
    
    static async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }
    
    static async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    // Fallback data when API is not available
    // Update fallback data untuk skills
    static getFallbackData(endpoint) {
        const fallbackData = {
            '/profile': {
                name: 'Farhan',
                title: 'Full Stack Developer',
                description: 'Passionate developer with expertise in modern web technologies. I create beautiful, functional, and user-friendly applications.',
                email: 'farhan@example.com',
                phone: '+62 123 456 7890',
                location: 'Jakarta, Indonesia',
                experience_years: '2+',
                projects_completed: '15+',
                technologies_used: '10+',
                about_title: 'Full Stack Developer & Problem Solver',
                about_description: "I'm a passionate full stack developer with a strong foundation in both frontend and backend technologies. I love creating digital solutions that make a difference and constantly learning new technologies to stay current with industry trends.",
                social_links: {
                    github: 'https://github.com/br0farhan',
                    linkedin: 'https://linkedin.com/in/farhan',
                    twitter: 'https://twitter.com/farhan',
                    instagram: 'https://instagram.com/farhan'
                },
                images: {
                    profile: 'assets/images/profile.jpg',
                    about: 'assets/images/about.jpg'
                }
            },
            '/skills': {
                categories: [
                    {
                        name: 'Frontend Development',
                        icon: 'fas fa-code',
                        skills: ['HTML', 'CSS', 'Javascript', 'Bootstrap']
                    },
                    {
                        name: 'Backend Development', 
                        icon: 'fas fa-server',
                        skills: ['PHP', 'Laravel', 'API (JSON)']
                    },
                    {
                        name: 'Mobile Development',
                        icon: 'fas fa-mobile-alt', 
                        skills: ['Dart', 'Flutter']
                    },
                    {
                        name: 'CMS & Marketing',
                        icon: 'fas fa-globe',
                        skills: ['Wordpress', 'Digital Marketing']
                    },
                    {
                        name: 'Security & Office',
                        icon: 'fas fa-shield-alt',
                        skills: ['Cyber Security', 'Microsoft Office']
                    }
                ]
            },
            '/projects': {
                projects: [
                    {
                        id: 1,
                        title: 'E-Commerce Platform',
                        description: 'Full-featured e-commerce platform with admin panel, payment integration, and inventory management.',
                        image: 'assets/images/project1.jpg',
                        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
                        category: 'web',
                        demo_url: 'https://demo.example.com',
                        code_url: 'https://github.com/br0farhan/ecommerce'
                    },
                    {
                        id: 2,
                        title: 'Task Management App',
                        description: 'Collaborative task management application with real-time updates and team collaboration features.',
                        image: 'assets/images/project2.jpg',
                        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
                        category: 'web',
                        demo_url: 'https://demo.example.com',
                        code_url: 'https://github.com/br0farhan/taskapp'
                    },
                    {
                        id: 3,
                        title: 'Weather Mobile App',
                        description: 'Beautiful weather application with location-based forecasts and interactive maps.',
                        image: 'assets/images/project3.jpg',
                        technologies: ['React Native', 'API Integration', 'Maps'],
                        category: 'mobile',
                        demo_url: 'https://demo.example.com',
                        code_url: 'https://github.com/br0farhan/weather-app'
                    },
                    {
                        id: 4,
                        title: 'RESTful API Service',
                        description: 'Scalable RESTful API service with authentication, rate limiting, and comprehensive documentation.',
                        image: 'assets/images/project4.jpg',
                        technologies: ['Laravel', 'JWT', 'Swagger', 'Redis'],
                        category: 'api',
                        demo_url: 'https://api.example.com/docs',
                        code_url: 'https://github.com/br0farhan/api-service'
                    }
                ]
            }
        };
        
        return fallbackData[endpoint] || {};
    }
}

// Profile API
class ProfileAPI {
    static async getProfile() {
        return await API.get(API_CONFIG.endpoints.profile);
    }
}

// Skills API
class SkillsAPI {
    static async getSkills() {
        return await API.get(API_CONFIG.endpoints.skills);
    }
}

// Projects API
class ProjectsAPI {
    static async getProjects() {
        return await API.get(API_CONFIG.endpoints.projects);
    }
    
    static async getProjectsByCategory(category) {
        const data = await this.getProjects();
        if (category === 'all') {
            return data.projects;
        }
        return data.projects.filter(project => project.category === category);
    }
}

// Contact API
class ContactAPI {
    static async sendMessage(formData) {
        return await API.post(API_CONFIG.endpoints.contact, formData);
    }
}

// Export for use in main.js
window.ProfileAPI = ProfileAPI;
window.SkillsAPI = SkillsAPI;
window.ProjectsAPI = ProjectsAPI;
window.ContactAPI = ContactAPI;