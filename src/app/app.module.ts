import { DetailService } from './services/detail.service';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunityService } from './services/community.service';
import { LoginService } from './services/login.service';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CategoryService } from './services/category.service';
import { SearchService } from './services/search.service';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsComponent } from './components/events/events.component';
import { CommunitiesComponent } from './components/communities/communities.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastComponent } from './components/toast/toast.component';
import { CategoriesComponent } from './components/categories/categories.component';

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
    DetailsComponent,
    DetailsPageComponent,
    ParticipantsComponent,
    ToastComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    DataService,
    EventService,
    CommunityService,
    DetailService,
    LoginService,
    CategoryService,
    SearchService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
