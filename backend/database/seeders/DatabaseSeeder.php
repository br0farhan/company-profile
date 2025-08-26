<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // User seeder
        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('admin123')
        ]);
        
        // Jalankan seeder dalam urutan yang benar
        $this->call([
            ProfileSeeder::class,
            SkillCategorySeeder::class,  // Harus dijalankan SEBELUM SkillSeeder
            SkillSeeder::class,          // Bergantung pada SkillCategory
            ProjectSeeder::class,
        ]);
    }
}