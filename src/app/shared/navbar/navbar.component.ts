import { Component, HostListener, inject } from '@angular/core';
import { ThemeToggleBtnComponent } from "../ui/theme-toggle-btn/theme-toggle-btn.component";
import { DialogService } from '../../core/services/dialog.service';
import { DownloadCvOptionsComponent } from '../download-cv-options/download-cv-options.component';
import { ButtonComponent } from "../ui/button/button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleBtnComponent, ButtonComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dialog = inject(DialogService)
  isOpen: boolean = true;
  isScrolled: boolean = true;
  activeSection: string = ''

  openDownloadOptions() {
    this.dialog.openDialog(DownloadCvOptionsComponent)
  }

  toggleState() {
    this.isOpen = !this.isOpen
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sectionIds = ['contact', 'projects', 'about-me'];
    let currentSection = '';

    for (let id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = id;
          console.log(currentSection)
          break;
        }
      }
    }

    this.activeSection = currentSection;
    this.isScrolled = window.scrollY > 10;
  }
}
