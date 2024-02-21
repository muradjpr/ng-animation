import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about-us', component: AboutUsComponent },
];
