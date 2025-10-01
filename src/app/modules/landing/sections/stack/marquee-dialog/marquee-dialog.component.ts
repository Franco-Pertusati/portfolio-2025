import { Component, inject } from '@angular/core';
import { MarqueeSectionComponent } from "../marquee-section/marquee-section.component";
import { DialogService } from '../../../../../core/services/dialog.service';

@Component({
  selector: 'app-marquee-dialog',
  imports: [MarqueeSectionComponent],
  templateUrl: './marquee-dialog.component.html',
  styleUrl: './marquee-dialog.component.css'
})
export class MarqueeDialogComponent {
  dialog = inject(DialogService)
}
