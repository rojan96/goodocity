import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css'],
})
export class LoginComponent {
  invalidLogin: boolean;
  isAuthenticated;

  constructor(private router: Router, private authService: AuthService) {}

  credentials = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    this.isAuthenticated = this.authService.login(this.credentials);
    if (this.isAuthenticated) {
      this.router.navigate(['/']);
    } else this.invalidLogin = true;
  }
}
