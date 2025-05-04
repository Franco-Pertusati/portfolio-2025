import { Injectable } from '@angular/core';
import { Project } from '../modules/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [
    {
      title: 'Table management system',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      thumbnail: 'https://cdn.cosmos.so/fd137f33-a420-426b-8efb-f72ce4077137?format=jpeg',
      tecs: ['Angular 18', 'Vanilla CSS', 'Symfony', 'API Platform', 'MySql'],
      reppo: '',
      preview: ''
    },
    {
      title: 'Link Shortener',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      thumbnail: 'https://cdn.cosmos.so/8e6e8af1-0727-4670-81a6-60099cd4d8f4?format=jpeg',
      tecs: ['ExpressJs', 'NodeJS', 'Firebase', 'Angular 18', 'TailWind'],
      reppo: '',
      preview: ''
    },
    {
      title: 'CSS Grid Generator',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      thumbnail: 'https://cdn.cosmos.so/3517bda5-8e4c-4523-aeaa-07b9dcac25ef?format=jpeg',
      tecs: ['Angular 18', 'Vanilla CSS', 'Symfony', 'API Platform', 'MySql'],
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
