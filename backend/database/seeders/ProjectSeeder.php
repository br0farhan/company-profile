<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'title' => 'E-Commerce Website',
            'description' => 'Full-featured e-commerce platform with admin panel, payment integration, and inventory management.',
            'category' => 'web',
            'technologies' => json_encode(['Laravel', 'MySQL', 'Bootstrap', 'JavaScript']),
            'code_url' => 'https://github.com/br0farhan/ecommerce',
            'demo_url' => 'https://demo-ecommerce.com',
            'image' => 'assets/images/projects/ecommerce.jpg',
            'is_featured' => true,
            'is_active' => true,
            'sort_order' => 1,
        ]);
        
        Project::create([
            'title' => 'Portfolio Website',
            'description' => 'Personal portfolio website built with modern web technologies.',
            'category' => 'web',
            'technologies' => json_encode(['HTML5', 'CSS3', 'JavaScript', 'PHP']),
            'code_url' => 'https://github.com/username/portfolio',
            'demo_url' => 'https://portfolio-demo.com',
            'image' => 'assets/images/projects/portfolio.jpg',
            'is_featured' => true,
            'is_active' => true,
            'sort_order' => 2,
        ]);
        
        Project::create([
            'title' => 'Task Management App',
            'description' => 'A collaborative task management application with real-time updates.',
            'category' => 'web',
            'technologies' => json_encode(['React', 'Node.js', 'MongoDB', 'Socket.io']),
            'code_url' => 'https://github.com/username/task-manager',
            'demo_url' => 'https://task-manager-demo.com',
            'image' => 'assets/images/projects/task-manager.jpg',
            'is_featured' => false,
            'is_active' => true,
            'sort_order' => 3,
        ]);
        
        Project::create([
            'title' => 'Mobile Banking App',
            'description' => 'Secure mobile banking application with biometric authentication.',
            'category' => 'mobile',
            'technologies' => json_encode(['React Native', 'Firebase', 'Node.js']),
            'code_url' => 'https://github.com/username/mobile-banking',
            'demo_url' => null,
            'image' => 'assets/images/projects/mobile-banking.jpg',
            'is_featured' => false,
            'is_active' => true,
            'sort_order' => 4,
        ]);
        
        Project::create([
            'title' => 'REST API Service',
            'description' => 'RESTful API service for managing user data and authentication.',
            'category' => 'api',
            'technologies' => json_encode(['Laravel', 'MySQL', 'JWT', 'Swagger']),
            'code_url' => 'https://github.com/username/rest-api',
            'demo_url' => 'https://api-docs.com',
            'image' => 'assets/images/projects/api-service.jpg',
            'is_featured' => false,
            'is_active' => true,
            'sort_order' => 5,
        ]);
    }
}