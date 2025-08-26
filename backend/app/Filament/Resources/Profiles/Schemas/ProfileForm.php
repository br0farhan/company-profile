<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Form;

class ProfileForm
{
    public static function configure(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required(),
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                TextInput::make('location')
                    ->required(),
                TextInput::make('experience_years')
                    ->required()
                    ->default('2+'),
                TextInput::make('projects_completed')
                    ->required()
                    ->default('15+'),
                TextInput::make('technologies_used')
                    ->required()
                    ->default('10+'),
                TextInput::make('about_title'),
                Textarea::make('about_description')
                    ->columnSpanFull(),
                Textarea::make('social_links')
                    ->columnSpanFull(),
                Textarea::make('images')
                    ->columnSpanFull(),
            ]);
    }
}
