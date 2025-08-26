// Component Loader
class ComponentLoader {
    static async loadComponent(componentName, targetId) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentName}`);
            }
            const html = await response.text();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    }
    
    static async loadAllComponents() {
        const components = [
            { name: 'header', target: 'header-component' },
            { name: 'about', target: 'about-component' },
            { name: 'skills', target: 'skills-component' },
            { name: 'projects', target: 'projects-component' },
            { name: 'contact', target: 'contact-component' }
        ];
        
        // Load all components in parallel
        await Promise.all(
            components.map(component => 
                this.loadComponent(component.name, component.target)
            )
        );
        
        // Trigger custom event when all components are loaded
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    await ComponentLoader.loadAllComponents();
});

// Export for use in other files
window.ComponentLoader = ComponentLoader;