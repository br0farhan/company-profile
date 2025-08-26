<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\JsonResponse;

class ProfileController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $profile = Profile::first();
            
            if (!$profile) {
                return response()->json([
                    'success' => false,
                    'message' => 'Profile not found',
                    'data' => null
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Profile retrieved successfully',
                'data' => [
                    'name' => $profile->name,
                    'title' => $profile->title,
                    'description' => $profile->description,
                    'email' => $profile->email,
                    'phone' => $profile->phone,
                    'location' => $profile->location,
                    'experience_years' => $profile->experience_years,  // Diperbaiki dari years_experience
                    'projects_completed' => $profile->projects_completed,
                    'technologies_used' => $profile->technologies_used,
                    'social_links' => $profile->social_links,
                    'images' => $profile->images,
                    'cv_url' => $profile->cv_url
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error retrieving profile',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}