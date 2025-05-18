import { Component } from '@angular/core';
import { NavBarComponent } from "../shared/nav-bar/nav-bar.component";
import { ThemeBtnComponent } from "../shared/theme-btn/theme-btn.component";
import { PresentationCardComponent } from "./presentation-card/presentation-card.component";
import { StackComponent } from "./stack/stack.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, PresentationCardComponent, StackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
