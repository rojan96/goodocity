import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  active: boolean = false;
  name;
  id;
  picture;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.picture = localStorage.getItem('picture');
    this.name = localStorage.getItem('name');
    this.id = localStorage.getItem('id');
  }

  onClick() {
    this.active = !this.active;
  }

  profile() {
    console.log();
  }

  logout() {
    console.log('logout clicked');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
