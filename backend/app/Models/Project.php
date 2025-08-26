<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'technologies',
        'category',
        'demo_url',
        'code_url',
        'sort_order',
        'is_featured',
        'is_active'
    ];

    protected $casts = [
        'technologies' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean'
    ];

    // Accessor untuk image URL
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value ? asset('storage/' . $value) : null,
        );
    }

    // Scope untuk filter berdasarkan kategori
    public function scopeByCategory($query, $category)
    {
        if ($category && $category !== 'all') {
            return $query->where('category', $category);
        }
        return $query;
    }

    // Scope untuk project aktif
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Scope untuk project featured
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}