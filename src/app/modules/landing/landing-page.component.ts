import { Component, inject } from '@angular/core';
import { DialogService } from '../../core/services/dialog.service';
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: 'app-landing-page',
  imports: [ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  dialogService = inject(DialogService);
}
