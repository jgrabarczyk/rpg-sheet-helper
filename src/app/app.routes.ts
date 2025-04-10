import { Routes } from '@angular/router';
import { SheetComponent } from 'dark-heresy-ii/sheet/sheet.component';
import { MainPageComponent } from 'main-page/main-page.component';
import { DarkHeresyIICreatorComponent } from 'dark-heresy-ii/dark-heresy-ii-creator/dark-heresy-ii-creator.component';
import { LoadCharacterComponent } from 'load-character/load-character.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'sheet', component: SheetComponent},
    {path: 'creator', component: DarkHeresyIICreatorComponent},
    {path: 'load', component: LoadCharacterComponent},
];
