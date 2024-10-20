import { Component, Input } from '@angular/core';
import { DHII_Aptitude } from '../../types/dark-heresy-ii';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list'; 
@Component({
  selector: 'app-aptitudes-group',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './aptitudes-group.component.html',
  styleUrl: './aptitudes-group.component.scss'
})
export class AptitudesGroupComponent {
  @Input() aptitudes: DHII_Aptitude[] = []
}
