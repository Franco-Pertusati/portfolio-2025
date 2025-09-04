import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'Linktun: link shortener',
      description: 'A lightweight URL shortener built for individual users and entrepreneurs. It focuses on simplicity and accessibility, with a trial mode to generate links without an account, offering limited features for quick testing.',
      stackUsed: ['Angular 19', 'NodeJs', 'ExpressJS', 'Postgress', 'Prisma'],
      img: 'projectsImg/LS.png',
      prev: 'https://franco-pertusati.github.io/Linktun/#/',
      repo: 'https://github.com/Franco-Pertusati/Linktun',
      text: 'This project is designed for entrepreneurs and individual users who need to shorten links without paying for expensive tools. Unlike most market solutions, which focus on advanced features for marketing teams, this one prioritizes simplicity and accessibility. It also includes a trial mockup that allows users to generate links without creating an account, with limited functionality, so anyone can try the tool before signing up.',
      tags: 'FullStack',
      id: 0
    },
    {
      title: 'Growler: Gastronomic System',
      description: 'Growler is a restaurant management system with table control, sales tracking, staff management, ticket printing, and a PostgreSQL or local storage backend. It streamlines daily operations from order taking to final billing.',
      stackUsed: ['Angular 19', 'NodeJs', 'ExpressJs', 'Postgress', 'Prisma'],
      img: 'projectsImg/GS.png',
      prev: 'https://growler-front.vercel.app/app/dashboard',
      repo: 'https://github.com/Franco-Pertusati/growler-front',
      text: 'Growler is a system designed for the comprehensive management of restaurants and gastronomic venues. It allows centralized organization of tables, stock control, and sales tracking. Its features include ticket printing, user authorization levels, a visual floor plan, performance statistics, and staff and shift management. There are two versions: a lightweight one using local storage and a more robust one powered by PostgreSQL. It also supports data export and import through JSON files. In daily use, waiters can record orders, print kitchen receipts, and issue the final bill when closing a table.',
      tags: 'FullStack',
      id: 1
    },
    {
      title: 'Contact Form API - Node.js + Express',
      description: 'A lightweight Node.js + Express API that sends emails via Nodemailer, with environment variable security, CORS support, and a ready-to-use contact form endpoint.',
      stackUsed: ['NodeJs', 'ExpressJs', 'Nodemailer'],
      img: 'projectsImg/NM.png',
      prev: '',
      repo: 'https://github.com/Franco-Pertusati/contact-form-node',
      text: 'This API provides a simple way to handle contact form submissions. Built with Node.js and Express, it uses Nodemailer to securely send emails. Credentials are managed through environment variables for added protection. It includes CORS support and an endpoint ready to integrate directly with personal or professional websites.',
      tags: 'API',
      id: 2
    },
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
