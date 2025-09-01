import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./modules/project-blogs/dashboard.routes')
      .then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: '',
    loadChildren: () => import('./modules/landing/auth.routes')
      .then(m => m.LANDING_PAGE_ROUTES)
  },
];
