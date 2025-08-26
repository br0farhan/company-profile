<?php

namespace App\Filament\Resources\Profiles;

use App\Filament\Resources\Profiles\Pages\CreateProfile;
use App\Filament\Resources\Profiles\Pages\EditProfile;
use App\Filament\Resources\Profiles\Pages\ListProfiles;
use App\Filament\Resources\Profiles\Pages\ViewProfile;
use App\Filament\Resources\Profiles\Schemas\ProfileForm;
use App\Filament\Resources\Profiles\Schemas\ProfileInfolist;
use App\Filament\Resources\Profiles\Tables\ProfilesTable;
use App\Models\Profile;
use Filament\Resources\Resource;
use Filament\Forms\Form;
use Filament\Infolists\Infolist;
use Filament\Tables\Table;

class ProfileResource extends Resource
{
    protected static ?string $model = Profile::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Form $form): Form
    {
        return ProfileForm::configure($form);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return ProfileInfolist::configure($infolist);
    }

    public static function table(Table $table): Table
    {
        return ProfilesTable::configure($table);
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
            'index' => ListProfiles::route('/'),
            'create' => CreateProfile::route('/create'),
            'view' => ViewProfile::route('/{record}'),
            'edit' => EditProfile::route('/{record}/edit'),
        ];
    }
}
