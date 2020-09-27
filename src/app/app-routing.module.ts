import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CommunitiesComponent } from './components/communities/communities.component';
import { EventsComponent } from './components/events/events.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        component: EventsComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'communities',
        component: CommunitiesComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
