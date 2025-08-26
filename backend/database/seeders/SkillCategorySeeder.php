<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SkillCategory;

class SkillCategorySeeder extends Seeder
{
    public function run(): void
    {
        SkillCategory::create([
            'name' => 'Frontend Development',
            'icon' => 'heroicon-o-computer-desktop',
            'sort_order' => 1,
            'is_active' => true,
        ]);
        
        SkillCategory::create([
            'name' => 'Backend Development',
            'icon' => 'heroicon-o-server',
            'sort_order' => 2,
            'is_active' => true,
        ]);
        
        SkillCategory::create([
            'name' => 'Tools & Others',
            'icon' => 'heroicon-o-wrench-screwdriver',
            'sort_order' => 3,
            'is_active' => true,
        ]);
    }
}
