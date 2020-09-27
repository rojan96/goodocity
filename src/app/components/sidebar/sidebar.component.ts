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
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.name = localStorage.getItem('name');
  }

  onClick() {
    this.active = !this.active;
  }

  logout() {
    console.log('logout clicked');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
