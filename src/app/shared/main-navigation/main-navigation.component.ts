import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, RouterLinkActive],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss'
})
export class MainNavigationComponent {

}
