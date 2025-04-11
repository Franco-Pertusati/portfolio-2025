import { Component } from '@angular/core';
import { ContactButtonsComponent } from "../../ui/contact-buttons/contact-buttons.component";

@Component({
  selector: 'app-presentation-card',
  standalone: true,
  imports: [ContactButtonsComponent],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent {

}
