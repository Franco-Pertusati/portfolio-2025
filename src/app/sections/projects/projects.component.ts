import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  showDescription = false;

  projects = [
    {
      title: 'Gastronomy',
      icon: 'restaurant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      imgs: ['https://i.ytimg.com/an_webp/H2fRcQquKsA/mqdefault_6s.webp?du=3000&sqp=CMCKwb4G&rs=AOn4CLApGF9xP3deiwbZU4h_Brq7N3FNwQ', 'https://i.ytimg.com/an_webp/nh2drIaIXyw/mqdefault_6s.webp?du=3000&sqp=CPSswb4G&rs=AOn4CLCljzGPra-hTGpCRVnAS5AFheU8YQ', 'img3'],
      link: 'www.youtube.com',
    },
    {
      title: 'Link Shortener',
      icon: 'rocket_launch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      imgs: ['https://i.ytimg.com/vi/HNcJ0pEZmjc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBa-bn6_g0w-l7nL15oX67apNFdMQ', 'img2', 'img3', 'img4', 'img5'],
      link: 'www.youtube.com',
    },
    {
      title: 'CSS Generator',
      icon: 'category',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, justo a porttitor euismod, massa nibh finibus tortor, vel sollicitudin lorem odio fermentum elit. Phasellus tristique imperdiet placerat. Etiam volutpat eros id molestie iaculis. ',
      imgs: ['pro3', 'img2'],
      link: 'www.youtube.com',
    },
  ];

  selectedProject = this.projects[0];
  imgToDisplay = this.selectedProject.imgs[0];  // Esto será una cadena, no un objeto

  selectProject(index: number) {
    this.selectedProject = this.projects[index];
    this.imgToDisplay = this.selectedProject.imgs[0];  // Reiniciar a la primera imagen
    this.showDescription = false;
  }

  selectImg(index: number) {
    this.imgToDisplay = this.selectedProject.imgs[index];  // Asignar la imagen seleccionada
  }
}

