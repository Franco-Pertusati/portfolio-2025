import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contact-btn',
  imports: [DialogComponent],
  templateUrl: './contact-btn.component.html',
  styleUrl: './contact-btn.component.css'
})
export class ContactBtnComponent {
  isFormOpen: boolean = false


  onClose() {
    this.isFormOpen = false;
  }

  openForm() {
    this.isFormOpen = true;
  }
}
