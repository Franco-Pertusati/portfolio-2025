import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationCardComponent } from "./sections/presentation-card/presentation-card.component";
import { NavbarComponent } from "./sections/navbar/navbar.component";
import { StackComponent } from "./sections/stack/stack.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { AboutMeComponent } from "./sections/about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PresentationCardComponent, NavbarComponent, StackComponent, ProjectsComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
