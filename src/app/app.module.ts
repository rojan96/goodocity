import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsComponent } from './components/events/events.component';
import { CommunitiesComponent } from './components/communities/communities.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthPageComponent,
    AuthComponent,
    SignupComponent,
    DashboardPageComponent,
    SidebarComponent,
    NavbarComponent,
    CardComponent,
    NotFoundComponent,
    EventsComponent,
    CommunitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
