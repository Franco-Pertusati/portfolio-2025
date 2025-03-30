import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Project } from '../../modules/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  showDescription = false;

  projects: Project[] = [
    {
      title: 'Gastronomy',
      subtitle: 'No more delays',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      images: ['as', 's', 'img3'],
      link: 'www.youtube.com',
    },
    {
      title: 'Link Shortener',
      subtitle: 'Easy link management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      images: ['img'],
      link: 'www.youtube.com',
    },
    {
      title: 'CSS Grid Generator',
      subtitle: 'Helpful xd',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      images: ['pro3', 'img2'],
      link: 'www.youtube.com',
    },
  ];
}

