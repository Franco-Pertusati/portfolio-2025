import { Component, inject } from '@angular/core';
import { DialogService } from '../../core/services/dialog.service';
import { ContactComponent } from "./sections/contact/contact.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { StackComponent } from "./sections/stack/stack.component";

@Component({
  selector: 'app-landing-page',
  imports: [ContactComponent, ProjectsComponent, StackComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  dialogService = inject(DialogService);
}
