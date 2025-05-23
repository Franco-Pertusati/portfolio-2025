import { Component } from '@angular/core';
import { NavBarComponent } from "../shared/nav-bar/nav-bar.component";
import { ThemeBtnComponent } from "../shared/theme-btn/theme-btn.component";
import { PresentationCardComponent } from "./presentation-card/presentation-card.component";
import { StackComponent } from "./stack/stack.component";
import { ProjectsListComponent } from "./projects-list/projects-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, PresentationCardComponent, StackComponent, ProjectsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
