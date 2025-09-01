import { Routes } from "@angular/router";
import { ProjectBlogsComponent } from "./project-blogs.component";
import { LinktunComponent } from "../projectBlogs/pages/linktun/linktun.component";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: ProjectBlogsComponent,
    children: [
      {
        path: 'linktun',
        component: LinktunComponent
      }
    ]
  }
];
