import { Routes } from '@angular/router';
import { SheetComponent } from './sheet/sheet.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DarkHeresyIICreatorComponent } from './dark-heresy-ii/dark-heresy-ii-creator/dark-heresy-ii-creator.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'sheet', component: SheetComponent},
    {path: 'creator', component: DarkHeresyIICreatorComponent},
];
