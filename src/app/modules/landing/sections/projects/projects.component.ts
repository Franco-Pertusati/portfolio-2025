import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { PorjectCardComponent } from "./porject-card/porject-card.component";
import { Project } from '../../../../core/interfaces/project';

@Component({
  selector: 'app-projects',
  imports: [ButtonComponent, PorjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/1200x/22/9b/1b/229b1bb308dea1473be2edb2af2865e7.jpg',
      src: 'linktun',
      tags: ''
    },
    {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/1200x/0d/a5/f4/0da5f404dd1ec7e82d5abf7c803c3c9d.jpg',
      src: '',
      tags: ''
    },
    {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/736x/c6/40/be/c640be330434b29e7f9fbeac449d0b9a.jpg',
      src: '',
      tags: ''
    },
        {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/736x/c1/24/d8/c124d83499bf682963691bd73ec81e94.jpg',
      src: '',
      tags: ''
    },
        {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/736x/ae/5f/19/ae5f19dc1dced1e51e71e94bf4af82c4.jpg',
      src: '',
      tags: ''
    },
        {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/1200x/6d/f3/0b/6df30bc05d35324250a01c4fb27b4439.jpg',
      src: '',
      tags: ''
    }
  ]
}
