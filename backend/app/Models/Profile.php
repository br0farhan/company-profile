<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title', 
        'description',
        'email',
        'phone',
        'location',
        'experience_years',
        'projects_completed',
        'technologies_used',
        'about_title',
        'about_description',
        'social_links',
        'images'
    ];

    protected $casts = [
        'social_links' => 'array',
        'images' => 'array'
    ];
}