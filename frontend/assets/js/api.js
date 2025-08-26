// API Configuration
const API_CONFIG = {
    baseURL: 'http://192.168.15.189:8000/api', // Pastikan IP sama
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
    static getFallbackData(endpoint) {
        const fallbackData = {
            '/profile': {
                name: 'Farhan',
                title: 'Full Stack Developer',
                description: 'Passionate developer with expertise in modern web technologies.',
                email: 'farhan@example.com',
                phone: '+62 123 456 7890',
                location: 'Jakarta, Indonesia',
                experience_years: '2+',
                projects_completed: '15+',
                technologies_used: '10+',
                social_links: {
                    github: 'https://github.com/br0farhan',
                    linkedin: 'https://linkedin.com/in/farhan',
                    twitter: 'https://twitter.com/farhan',
                    instagram: 'https://instagram.com/farhan'
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
                    }
                ]
            },
            '/projects': {
                projects: [
                    {
                        id: 1,
                        title: 'E-Commerce Platform',
                        description: 'Full-featured e-commerce platform with admin panel.',
                        technologies: ['Laravel', 'Vue.js', 'MySQL'],
                        category: 'web'
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