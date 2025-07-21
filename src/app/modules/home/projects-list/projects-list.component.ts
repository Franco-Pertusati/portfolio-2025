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
      preview: 'https://github.com/Franco-Pertusati/linkShortenerAPI',
      tecs: [ 'Firebase', 'Node.Js', 'Express.Js'],
      description: `This API allows you to shorten URLs. It includes routes to generate a short link, redirect to the original URL, and retrieve the links created by a user using their ID. Account management and user authentication are handled through Firebase.`
    },
    {
      title: 'Gastronomic System API',
      repo: 'https://github.com/Franco-Pertusati/growler-API-v2',
      preview: 'https://franco-pertusati.github.io/Linktun/#/',
      tecs: ['MySql', 'Node.Js', 'Express.Js'],
      description: `This API allows you to manage the database of products, customers, and users of a food service establishment. It also handles the status of the dining area tables and their usage history.`
    },
    {
      title: 'Contact form',
      repo: 'https://github.com/Franco-Pertusati/contact-form-node',
      preview: 'https://franco-pertusati.github.io/Linktun/#/',
      tecs: ['Nodemailer', 'Node.Js', 'Express.Js'],
      description: `A simple API for sending messages from a contact form, ideal for portfolios or professional websites. It protects credentials using environment variables and enables secure email delivery.`
    },
  ]
}
