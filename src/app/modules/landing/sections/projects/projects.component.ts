import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { PorjectCardComponent } from "./porject-card/porject-card.component";
import { Project } from '../../../../core/interfaces/project';
import { ProjectsService } from '../../../../core/services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [ButtonComponent, PorjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsService = inject(ProjectsService)
  projects: Project[] = this.projectsService.projects
}
