import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../../../core/interfaces/project';

@Component({
  selector: 'app-projects-list',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
  projects: Project[] = [
    {
      title: 'gastronomic system',
      img: 'ProjectImgs/1.png',
      repo: 'https://github.com/Franco-Pertusati/growler-front',
      preview: 'https://growler-front.vercel.app/app/dashboard',
      tecs: ['Angular', 'Node.Js', 'Express.Js', 'MySQL'],
      description: `This is the demo version of a system for a bar, where products, tables, and cash are managed. It also stores statistics for each shift. The full version is still used in the bar where I used to work, but as a PWA with local storage.`
    },
    {
      title: 'link shortener',
      img: 'ProjectImgs/2.png',
      repo: 'https://github.com/Franco-Pertusati/Linktun',
      preview: 'https://franco-pertusati.github.io/Linktun/#/',
      tecs: ['Angular', 'Firebase', 'Node.Js', 'Express.Js'],
      description: `A page with user registration using Firebase and an API developed in Node.js to generate shortened links. It's not necessary to create an account to try it out, but links generated without registration are temporary.`
    },
  ]

  apiProjects: Project[] = [
    {
      title: 'Link Shortener API',
      repo: 'https://github.com/Franco-Pertusati/Linktun',
      preview: 'https://franco-pertusati.github.io/Linktun/#/',
      tecs: ['Angular', 'Firebase', 'Node.Js', 'Express.Js'],
      description: `A page with user registration using Firebase and an API developed in Node.js to generate shortened links. It's not necessary to create an account to try it out, but links generated without registration are temporary.`
    },
    {
      title: 'POS API',
      repo: 'https://github.com/Franco-Pertusati/Linktun',
      preview: 'https://franco-pertusati.github.io/Linktun/#/',
      tecs: ['Angular', 'Firebase', 'Node.Js', 'Express.Js'],
      description: `A page with user registration using Firebase and an API developed in Node.js to generate shortened links. It's not necessary to create an account to try it out, but links generated without registration are temporary.`
    },
    {
      title: 'Contact form',
      repo: 'https://github.com/Franco-Pertusati/Linktun',
      preview: 'https://franco-pertusati.github.io/Linktun/#/',
      tecs: ['Angular', 'Firebase', 'Node.Js', 'Express.Js'],
      description: `A page with user registration using Firebase and an API developed in Node.js to generate shortened links. It's not necessary to create an account to try it out, but links generated without registration are temporary.`
    },
  ]
}
