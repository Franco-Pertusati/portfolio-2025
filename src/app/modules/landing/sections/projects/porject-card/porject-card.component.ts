import { Component, inject, input } from '@angular/core';
import { Project } from '../../../../../core/interfaces/project';
import { DialogService } from '../../../../../core/services/dialog.service';

@Component({
  selector: 'app-porject-card',
  imports: [],
  templateUrl: './porject-card.component.html',
  styleUrl: './porject-card.component.css'
})
export class PorjectCardComponent {
  project = input.required<Project>()
}
