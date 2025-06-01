import { Component, HostListener } from '@angular/core';
import { ThemeBtnComponent } from "../theme-btn/theme-btn.component";
import { ButtonComponent } from "../button/button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [ThemeBtnComponent, ButtonComponent, NgClass]
})
export class NavBarComponent {
  mobileNav = false;
  isNavbarClosed = true;
  isScrolled = false;
  activeSection: string = '';

  ngOnInit() {
    this.setNavType();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.setNavType();
  }

  private setNavType() {
    if (window.innerWidth > 600) {
      this.isNavbarClosed = true
      this.mobileNav = false;
    } else {
      this.mobileNav = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sectionIds = ['presentation', 'projects', 'about-me'];
    let currentSection = '';

    for (let id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = id;
          break;
        }
      }
    }

    this.activeSection = currentSection;
    this.isScrolled = window.scrollY > 10;
  }

  openMobileNav() {
    this.isNavbarClosed = false;
  }

  closeMobileNav() {
    this.isNavbarClosed = true;
  }
}
