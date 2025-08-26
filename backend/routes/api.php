<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillController;
use Illuminate\Support\Facades\Route;

// Profile endpoints
Route::get('/profile', [ProfileController::class, 'index']);

// Skills endpoints
Route::get('/skills', [SkillController::class, 'index']);

// Projects endpoints
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/categories', [ProjectController::class, 'categories']);

// Contact endpoints
Route::get('/contact', [ContactController::class, 'info']);
Route::post('/contact', [ContactController::class, 'store']);