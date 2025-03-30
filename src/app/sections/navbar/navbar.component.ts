import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ThemeBtnComponent } from '../../ui/theme-btn/theme-btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ThemeBtnComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  isNavbarClosed = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (window.scrollY > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  toggleNav() {
    this.isNavbarClosed = !this.isNavbarClosed;
  }
}
