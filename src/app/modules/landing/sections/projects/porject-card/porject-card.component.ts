import { Component, inject, input } from '@angular/core';
import { Project } from '../../../../../core/interfaces/project';
import { DialogService } from '../../../../../core/services/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porject-card',
  imports: [],
  templateUrl: './porject-card.component.html',
  styleUrl: './porject-card.component.css'
})
export class PorjectCardComponent {
  router = inject(Router)
  project = input.required<Project>()

  navigateTo() {
    this.router.navigate(['/projects', this.project().id])
  }
}
