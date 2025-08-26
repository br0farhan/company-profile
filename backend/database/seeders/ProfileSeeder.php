<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    public function run(): void
    {
        Profile::create([
            'name' => 'Farhan Martiyansyah',
            'title' => 'Full Stack Developer',
            'description' => 'Passionate developer with expertise in modern web technologies. I create beautiful, functional, and user-friendly applications.',
            'email' => 'farhan@example.com',
            'phone' => '+62 123 456 7890',
            'location' => 'Jakarta, Indonesia',
            'experience_years' => '2+',  // Diperbaiki dari years_experience
            'projects_completed' => '15+',
            'technologies_used' => '10+',
            'about_title' => 'Full Stack Developer & Problem Solver',
            'about_description' => 'I am a passionate full stack developer with a strong foundation in both frontend and backend technologies. I love creating digital solutions that make a difference and constantly learning new technologies to stay current with industry trends.',
            'social_links' => [
                'github' => 'https://github.com/br0farhan',
                'linkedin' => 'https://linkedin.com/in/farhan',
                'twitter' => 'https://twitter.com/farhan',
                'instagram' => 'https://instagram.com/farhan'
            ],
            'images' => [
                'profile' => 'assets/images/profile.jpg',
                'about' => 'assets/images/about.jpg'
            ]
        ]);
    }
}