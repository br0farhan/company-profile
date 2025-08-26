<?php

namespace App\Filament\Resources\SkillCategories;

use App\Filament\Resources\SkillCategories\Pages\CreateSkillCategory;
use App\Filament\Resources\SkillCategories\Pages\EditSkillCategory;
use App\Filament\Resources\SkillCategories\Pages\ListSkillCategories;
use App\Filament\Resources\SkillCategories\Pages\ViewSkillCategory;
use App\Filament\Resources\SkillCategories\Schemas\SkillCategoryForm;
use App\Filament\Resources\SkillCategories\Schemas\SkillCategoryInfolist;
use App\Filament\Resources\SkillCategories\Tables\SkillCategoriesTable;
use App\Models\SkillCategory;
use Filament\Resources\Resource;
use Filament\Forms\Form;
use Filament\Infolists\Infolist;
use Filament\Tables\Table;

class SkillCategoryResource extends Resource
{
    protected static ?string $model = SkillCategory::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $recordTitleAttribute = 'skill category';

    public static function form(Form $form): Form
    {
        return SkillCategoryForm::configure($form);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return SkillCategoryInfolist::configure($infolist);
    }

    public static function table(Table $table): Table
    {
        return SkillCategoriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListSkillCategories::route('/'),
            'create' => CreateSkillCategory::route('/create'),
            'view' => ViewSkillCategory::route('/{record}'),
            'edit' => EditSkillCategory::route('/{record}/edit'),
        ];
    }
}
