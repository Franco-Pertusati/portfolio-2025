import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ProjectBlogsComponent } from './modules/project-blogs/project-blogs.component';

export const routes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectBlogsComponent
  },
  {
    path: '',
    loadChildren: () => import('./modules/landing/auth.routes')
      .then(m => m.LANDING_PAGE_ROUTES)
  },
];
