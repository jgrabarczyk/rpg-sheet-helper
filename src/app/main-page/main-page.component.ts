import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainNavigationComponent } from '../shared/main-navigation/main-navigation.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatToolbarModule, MainNavigationComponent, MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {}
