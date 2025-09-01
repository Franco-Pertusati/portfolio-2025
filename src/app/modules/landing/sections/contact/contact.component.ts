import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { DialogService } from '../../../../core/services/dialog.service';
import { ContactFormComponent } from '../../../../shared/contact-form/contact-form.component';
import { SocialDialogComponent } from '../../../../shared/social-dialog/social-dialog.component';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  dialog = inject(DialogService)

  openDialog() {
    this.dialog.openDialog(ContactFormComponent)
  }

  openSocial() {
    this.dialog.openDialog(SocialDialogComponent)
  }
}
