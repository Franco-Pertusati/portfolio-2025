import { Component } from '@angular/core';
import { ButtonComponent } from "../../ui/button/button.component";
import { ContactButtonsComponent } from "../../ui/contact-buttons/contact-buttons.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ButtonComponent, ContactButtonsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  studyCards = [
    {
      title: "HTML CSS JS",
      date: "2025-04-06",  // Aquí puedes poner la fecha que necesites
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi."
    },
    {
      title: "Git and Git-Hub",
      date: "2025-04-06",  // Puedes cambiarla según lo necesites
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi."
    },
    {
      title: "Angular 18",
      date: "2025-04-06",  // Igualmente, cambia la fecha si lo necesitas
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi."
    },
    {
      title: "MySql",
      date: "2025-04-06",  // Ajusta la fecha aquí también
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi."
    },
    {
      title: "PHP",
      date: "2025-04-06",  // La fecha que prefieras
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi."
    },
    {
      title: "Symfony",
      date: "2025-04-06",  // Fecha modificable
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi."
    }
  ];
}
