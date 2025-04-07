import { Component } from '@angular/core';
import { NavbarComponent } from "../sections/navbar/navbar.component";
import { PresentationCardComponent } from "../sections/presentation-card/presentation-card.component";
import { StackComponent } from "../sections/stack/stack.component";
import { ProjectsComponent } from "../sections/projects/projects.component";
import { AboutMeComponent } from "../sections/about-me/about-me.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PresentationCardComponent, StackComponent, ProjectsComponent, AboutMeComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
