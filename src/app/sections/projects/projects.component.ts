import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Project } from '../../modules/project';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor(private pService: ProjectsService, private router: Router) {
    this.projects = this.pService.getProjects();
  }

  projects: Project[] = []
  showDescription = false;

  navigate() {
    this.router.navigate(['/projects']);
  }

  setIndex(index:number) {
    this.pService.setIndex(index)
  }
}

