<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SkillCategory;
use App\Models\Skill;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        // Frontend Skills
        $frontend = SkillCategory::where('name', 'Frontend Development')->first();
        
        Skill::create([
            'name' => 'HTML5',
            'skill_category_id' => $frontend->id,
            'proficiency_level' => 90,
            'sort_order' => 1,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'CSS3',
            'skill_category_id' => $frontend->id,
            'proficiency_level' => 85,
            'sort_order' => 2,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'JavaScript',
            'skill_category_id' => $frontend->id,
            'proficiency_level' => 80,
            'sort_order' => 3,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'React.js',
            'skill_category_id' => $frontend->id,
            'proficiency_level' => 75,
            'sort_order' => 4,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'Vue.js',
            'skill_category_id' => $frontend->id,
            'proficiency_level' => 70,
            'sort_order' => 5,
            'is_active' => true,
        ]);
        
        // Backend Skills
        $backend = SkillCategory::where('name', 'Backend Development')->first();
        
        Skill::create([
            'name' => 'PHP',
            'skill_category_id' => $backend->id,
            'proficiency_level' => 85,
            'sort_order' => 1,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'Laravel',
            'skill_category_id' => $backend->id,
            'proficiency_level' => 80,
            'sort_order' => 2,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'Node.js',
            'skill_category_id' => $backend->id,
            'proficiency_level' => 75,
            'sort_order' => 3,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'MySQL',
            'skill_category_id' => $backend->id,
            'proficiency_level' => 80,
            'sort_order' => 4,
            'is_active' => true,
        ]);
        
        // Tools & Others
        $tools = SkillCategory::where('name', 'Tools & Others')->first();
        
        Skill::create([
            'name' => 'Git',
            'skill_category_id' => $tools->id,
            'proficiency_level' => 85,
            'sort_order' => 1,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'Docker',
            'skill_category_id' => $tools->id,
            'proficiency_level' => 70,
            'sort_order' => 2,
            'is_active' => true,
        ]);
        
        Skill::create([
            'name' => 'AWS',
            'skill_category_id' => $tools->id,
            'proficiency_level' => 65,
            'sort_order' => 3,
            'is_active' => true,
        ]);
    }
}