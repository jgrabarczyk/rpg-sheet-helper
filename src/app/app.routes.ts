import { Routes } from '@angular/router';
import { SheetComponent } from 'dark-heresy-ii/sheet/sheet.component';
import { DarkHeresyIICreatorComponent } from 'dark-heresy-ii/dark-heresy-ii-creator/dark-heresy-ii-creator.component';
import { LoadCharacterComponent } from 'load-character/load-character.component';

export const routes: Routes = [
  { path: '', redirectTo: '/load', pathMatch: 'full' },
  {
    path: 'sheet/:prefix/:saveName',
    component: SheetComponent,
    pathMatch: 'full',
  },
  { path: 'sheet', component: SheetComponent },
  { path: 'creator', component: DarkHeresyIICreatorComponent },
  { path: 'load', component: LoadCharacterComponent },
];
