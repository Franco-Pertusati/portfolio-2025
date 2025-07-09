import { Component } from '@angular/core';
import { DialogComponent } from "../../shared/dialog/dialog.component";

@Component({
  selector: 'app-presentation-card',
  imports: [DialogComponent],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent {
  isFormOpen: boolean = false


  onClose() {
    this.isFormOpen = false;
  }

  openForm() {
    this.isFormOpen = true;
  }
}
