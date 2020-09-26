import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/auth-page/login-page/login-page.component';
import { SignupPageComponent } from './pages/auth-page/signup-page/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'auth/signup',
    component: SignupPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
