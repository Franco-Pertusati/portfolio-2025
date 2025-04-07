import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../modules/project';

@Component({
  selector: 'app-gastronomy',
  standalone: true,
  imports: [],
  templateUrl: './gastronomy.component.html',
  styleUrl: './gastronomy.component.css'
})
export class GastronomyComponent {
  constructor(private pService: ProjectsService) {
    this.projects = this.pService.getProjects();
    this.actualIndex = this.pService.getIndex();
    this.project = this.projects[this.actualIndex];
    this.totalLenght = this.projects.length;
  }

  projects: Project[];
  project: Project;
  actualIndex = 0;
  totalLenght: number;

  selectProject(value: number) {
    this.actualIndex = this.actualIndex + value;
    if (this.actualIndex >= this.totalLenght ) {
      this.actualIndex = 0;
    }
    if (this.actualIndex < 0) {
      this.actualIndex = (this.totalLenght - 1);
    }
    console.log(this.actualIndex)
    this.project = this.projects[this.actualIndex]
  }
}
