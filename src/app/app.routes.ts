import { Routes } from '@angular/router';
import { GastronomyComponent } from './projectsPage/gastronomy/gastronomy.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'projects', component: GastronomyComponent },
];
