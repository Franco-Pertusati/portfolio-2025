import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects-list',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
  projects = [
    {
      title: 'gastronomic system',
      img: 'ProjectImgs/1.png',
      repo: 'https://github.com/Franco-Pertusati/growler-front',
      preview: 'https://growler-front.vercel.app/app/dashboard',
      tecs: ['Angular 18', 'Node.Js', 'Express.Js', 'MySQL']
    },
    {
      title: 'link shortener',
      img: 'ProjectImgs/2.png',
      repo: 'https://github.com/Franco-Pertusati/Linktun',
      preview: 'https://franco-pertusati.github.io/Linktun/#/',
      tecs: ['Angular 17', 'Firebase', 'Node.Js', 'Express.Js']
    },
    // {
    //   title: 'UI library',
    //   img: 'https://i.pinimg.com/736x/6b/b8/2f/6bb82fa608674b8d2c91d56fdfacfd84.jpg',
    //   repo: '',
    //   preview: ''
    // },
    // {
    //   title: 'Geometrical patterns',
    //   img: 'https://i.pinimg.com/736x/a1/9a/c5/a19ac5f9e05d69a3e251019c8614d124.jpg',
    //   repo: '',
    //   preview: ''
    // }
  ]
}
