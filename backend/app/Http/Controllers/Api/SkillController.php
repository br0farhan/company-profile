<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SkillCategory;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
        try {
            $categories = SkillCategory::with('skills')->get();
            
            $formattedData = $categories->map(function ($category) {
                return [
                    'name' => $category->name,
                    'icon' => $category->icon,
                    'skills' => $category->skills->pluck('name')->toArray() // Mengambil hanya nama skill sebagai array string
                ];
            });

            return response()->json([
                'categories' => $formattedData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'categories' => []
            ], 500);
        }
    }
}