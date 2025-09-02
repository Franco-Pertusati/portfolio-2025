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
  projects: Project[] = this.projectsService.getProjects()

  selectedTags: string[] = ['FrontEnd', 'FullStack', 'API']
  tags: string[] = ['FrontEnd', 'FullStack', 'API']

  isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  toggleTag(tag: string) {
    const tagAlreadyIn = this.selectedTags.find(t => t === tag)
    if (!tagAlreadyIn) {
      this.selectedTags.push(tag)
    } else {
      this.removeTag(tag)
    }
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag)
  }

  toggleAll() {
    if (this.selectedTags.length != 3) {
      this.selectedTags = ['FrontEnd', 'FullStack', 'API'];
    }
  }
}
