import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { ThemeBtnComponent } from "../theme-btn/theme-btn.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ThemeBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isClosed: boolean = false;
  @Input() rooteRoute: string = ''
  @Input() toggleBtn: boolean = true;
  @Input() title: string = 'Title'
  @Input() buttonList = [
    {
      style: 'wfull',
      icon: 'home',
      label: 'home',
      routerLink: ''
    },
    {
      style: 'wfull',
      icon: 'person',
      label: 'users',
      routerLink: ''
    },
    {
      style: 'wfull',
      icon: 'category',
      label: 'categories',
      routerLink: ''
    },
    {
      style: 'wfull',
      icon: 'settings',
      label: 'settings',
      routerLink: ''
    },
  ];

  constructor(private router: Router) { }


  isRouteActive(route: string | undefined): boolean {
    if (!route) return false;

    const fullRoute = route.startsWith(this.rooteRoute) ? route : `/${this.rooteRoute}${route.startsWith('/') ? route : '/' + route}`;

    return this.router.isActive(fullRoute, {
      paths: 'subset',
      matrixParams: 'ignored',
      queryParams: 'ignored',
      fragment: 'ignored'
    });
  }
}
