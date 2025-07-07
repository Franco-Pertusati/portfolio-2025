import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Project {
  title: string
  img: string
  repo: string
  preview: string
  tecs: string[]
  description: string
}

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project
}
