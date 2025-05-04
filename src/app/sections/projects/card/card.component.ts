import { Component, Input } from '@angular/core';
import { Project } from '../../../modules/project';
import { ButtonComponent } from "../../../ui/button/button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() project?:Project;
}
