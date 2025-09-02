import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito.',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/1200x/22/9b/1b/229b1bb308dea1473be2edb2af2865e7.jpg',
      src: 'linktun',
      tags: 'FrontEnd',
      id: 0
    },
    {
      title: 'Send Mail with Form',
      description: 'Incluye facilmente un formulario de contacto en tu web.',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/1200x/0d/a5/f4/0da5f404dd1ec7e82d5abf7c803c3c9d.jpg',
      src: 'FrontEnd',
      tags: 'API',
      id: 1
    },
    {
      title: 'Gastronomic System',
      description: 'Sistema de gestion de local gastronomico.',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/736x/c6/40/be/c640be330434b29e7f9fbeac449d0b9a.jpg',
      src: '',
      tags: 'FrontEnd',
      id: 2
    },
    {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/736x/c1/24/d8/c124d83499bf682963691bd73ec81e94.jpg',
      src: '',
      tags: 'API',
      id: 3
    },
    {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/736x/ae/5f/19/ae5f19dc1dced1e51e71e94bf4af82c4.jpg',
      src: '',
      tags: 'FullStack',
      id: 4
    },
    {
      title: 'Linktun: link shortener',
      description: 'Un acortador de links muy bonito',
      stackUsed: ['Angular', 'Js'],
      img: 'https://i.pinimg.com/1200x/6d/f3/0b/6df30bc05d35324250a01c4fb27b4439.jpg',
      src: '',
      tags: 'FullStack',
      id: 5
    }
  ]

  getProjects() {
    return this.projects
  }

  getProjectById(id: number) {
    const project: Project | undefined = this.projects.find(p => p.id === id)

    if (project) {
      console.log(id)
      return project
    } else {
      return console.error("Project not found")
    }
  }
}
