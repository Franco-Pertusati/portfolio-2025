import { Component, inject } from '@angular/core';
import { MarqueeSectionComponent } from "./marquee-section/marquee-section.component";
import { DialogService } from '../../../../core/services/dialog.service';
import { MarqueeDialogComponent } from './marquee-dialog/marquee-dialog.component';

@Component({
  selector: 'app-stack',
  imports: [MarqueeSectionComponent],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  dialog = inject(DialogService)

  openDialog() {
    this.dialog.openDialog(MarqueeDialogComponent)
  }
}
