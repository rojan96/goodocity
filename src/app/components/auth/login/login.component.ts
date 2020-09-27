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

  ngOnInit() {
    localStorage.clear();
  }

  credentials = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    this.isAuthenticated = this.authService.login(this.credentials);
    setTimeout(() => {
      if (localStorage.getItem('id')) {
        this.router.navigate(['/dashboard/events']);
      } else this.invalidLogin = true;
    }, 1000);
  }
}
