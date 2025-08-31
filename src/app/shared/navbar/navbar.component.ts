import { Component } from '@angular/core';
import { ThemeToggleBtnComponent } from "../ui/theme-toggle-btn/theme-toggle-btn.component";

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleBtnComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
