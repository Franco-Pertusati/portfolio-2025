import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/interfaces/project';

@Component({
  selector: 'app-project-blogs',
  imports: [],
  templateUrl: './project-blogs.component.html',
  styleUrl: './project-blogs.component.css'
})
export class ProjectBlogsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  projectsService = inject(ProjectsService)
  projectId = Number(this.route.snapshot.params['id'])
  selectedProject = this.projectsService.getProjectById(this.projectId)
}
