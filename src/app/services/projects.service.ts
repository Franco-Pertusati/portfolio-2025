import { Injectable } from '@angular/core';
import { Project } from '../modules/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [
    {
      title: 'Gastronomy System',
      subtitle: 'No more delays in the orders',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      images: ['as', 's', 'img3'],
      thumbnail: 'projectsImgs/sg/thumbnail.png',
      link: 'www.youtube.com',
      fTecs: ['Angular 18', 'Vanilla CSS'],
      bTecs: ['Symfony', 'API Platform', 'MySql'],
    },
    {
      title: 'Link Shortener',
      subtitle: 'Easy link management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      images: ['img'],
      thumbnail: 'projectsImgs/linktun/thumbnail.png',
      link: 'www.youtube.com',
      bTecs: ['ExpressJs', 'NodeJS', 'Firebase'],
      fTecs: ['Angular 18', 'TailWind'],
    },
    {
      title: 'CSS Grid Generator',
      subtitle: 'Helpful xd',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      images: ['pro3', 'img2'],
      thumbnail: 'projectsImgs/grid/thumbnail.png',
      link: 'www.youtube.com',
      bTecs: ['Todavia', 'no', 'se'],
      fTecs: ['Angular 18'],
    },
  ];

  actualIndex:number = 0;

  getProjects() {
    return this.projects
  }

  setIndex(index:number) {
    this.actualIndex = index;
  }

  getIndex() {
    return this.actualIndex;
  }
}
