import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  jwtHelper = new JwtHelperService();
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

  login(credentials) {
    // return this.http.post('/api/authenticate', JSON.stringify(credentials));
    if (
      credentials.get('username').value == 'admin' &&
      credentials.get('password').value == 'password'
    ) {
      localStorage.setItem('token', this.token);
      return true;
    } else return false;
  }

  logout() {}

  isLoggedIn() {
    let token = localStorage.getItem('token');
    console.log(token);
    return token;
  }
}
