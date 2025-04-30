import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavigationComponent } from "./shared/main-navigation/main-navigation.component";

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, MainNavigationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
