import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationCardComponent } from "./sections/presentation-card/presentation-card.component";
import { NavbarComponent } from "./sections/navbar/navbar.component";
import { StackComponent } from "./sections/stack/stack.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { BentoProjectsComponent } from "./sections/bento-projects/bento-projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AboutMeComponent, StackComponent, PresentationCardComponent, BentoProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
