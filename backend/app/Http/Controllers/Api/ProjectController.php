<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Project::where('is_active', true);

            // Filter by category if provided
            if ($request->has('category') && $request->category !== 'all') {
                $query->where('category', $request->category);
            }

            // Filter featured projects if requested
            if ($request->has('featured') && $request->featured === 'true') {
                $query->where('is_featured', true);
            }

            $projects = $query->orderBy('sort_order')
                            ->orderBy('created_at', 'desc')
                            ->get();

            $formattedData = $projects->map(function($project) {
                return [
                    'id' => $project->id,
                    'title' => $project->title,
                    'description' => $project->description,
                    'image' => $project->image,
                    'technologies' => $project->technologies,
                    'category' => $project->category,
                    'demo_url' => $project->demo_url,
                    'code_url' => $project->code_url,
                    'is_featured' => $project->is_featured
                ];
            });

            return response()->json([
                'success' => true,
                'message' => 'Projects retrieved successfully',
                'data' => $formattedData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error retrieving projects',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function categories(): JsonResponse
    {
        try {
            $categories = Project::where('is_active', true)
                               ->distinct()
                               ->pluck('category')
                               ->filter()
                               ->values();

            return response()->json([
                'success' => true,
                'message' => 'Project categories retrieved successfully',
                'data' => $categories
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error retrieving project categories',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}