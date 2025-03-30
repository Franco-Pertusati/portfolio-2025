import { Component, Input } from '@angular/core';
import { Project } from '../../../modules/project';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() project?:Project;
}
