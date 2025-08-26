<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->text('description');
            $table->string('email');
            $table->string('phone');
            $table->string('location');
            $table->string('experience_years')->default('2+');
            $table->string('projects_completed')->default('15+');
            $table->string('technologies_used')->default('10+');
            $table->string('about_title')->nullable();
            $table->text('about_description')->nullable();
            $table->json('social_links')->nullable(); // {github, linkedin, twitter, instagram}
            $table->json('images')->nullable(); // {profile, about}
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};