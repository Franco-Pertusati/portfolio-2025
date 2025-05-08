import { Component, Input } from '@angular/core';
import { Project } from '../../../modules/project';
import { ButtonComponent } from "../../../ui/button/button.component";
import { ImgCarrousellComponent } from "../../../ui/img-carrousell/img-carrousell.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent, ImgCarrousellComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() project?:Project;
  @Input() index?:number
}
