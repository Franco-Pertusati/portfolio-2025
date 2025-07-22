import { Component } from '@angular/core';
import { ContactBtnComponent } from "../../shared/contact-btn/contact-btn.component";

@Component({
  selector: 'app-presentation-card',
  imports: [ContactBtnComponent],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent {}
