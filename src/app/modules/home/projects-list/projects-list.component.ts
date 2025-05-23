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
      img: 'https://i.pinimg.com/736x/35/35/1e/35351e214db7e48eeb50b6f6f378fdc4.jpg',
      repo: '',
      preview: ''
    },
    {
      title: 'link shortener',
      img: 'https://i.pinimg.com/736x/d2/3f/91/d23f917741ed20732ba5d1f9f732f4ab.jpg',
      repo: '',
      preview: ''
    },
    {
      title: 'Geometrical patterns',
      img: 'https://i.pinimg.com/736x/a1/9a/c5/a19ac5f9e05d69a3e251019c8614d124.jpg',
      repo: '',
      preview: ''
    }
  ]
}
