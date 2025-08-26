<?php

namespace App\Filament\Resources\Skills\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;

class SkillForm
{
    public static function configure(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('skill_category_id')
                    ->relationship('skillCategory', 'name')
                    ->required(),
                TextInput::make('name')
                    ->required(),
                TextInput::make('proficiency_level')
                    ->required()
                    ->numeric()
                    ->default(80),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
                Toggle::make('is_active')
                    ->required(),
            ]);
    }
}
