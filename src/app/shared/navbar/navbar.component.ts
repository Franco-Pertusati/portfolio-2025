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

  openDownloadOptions() {
    this.dialog.openDialog(DownloadCvOptionsComponent)
  }

  toggleState() {
    this.isOpen = !this.isOpen
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   if (window.innerWidth < 544) {
  //     this.isOpen = true
  //   }
  // }
}
