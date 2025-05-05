import { Injectable } from '@angular/core';
import { Project } from '../modules/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [
    {
      title: 'Gastronomic system',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      imgs: ['projectsImgs/sg/1.png', 'projectsImgs/sg/2.png'],
      tecs: ['Angular 18', 'Vanilla CSS', 'Symfony', 'API Platform', 'MySql'],
      reppo: '',
      preview: ''
    },
    {
      title: 'Link Shortener',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      imgs: ['projectsImgs/linktun/2.png', 'projectsImgs/linktun/1.png'],
      tecs: ['ExpressJs', 'NodeJS', 'Firebase', 'Angular 18', 'TailWind'],
      reppo: '',
      preview: ''
    },
  ];

  actualIndex: number = 0;

  getProjects() {
    return this.projects
  }

  setIndex(index: number) {
    this.actualIndex = index;
  }

  getIndex() {
    return this.actualIndex;
  }
}
