import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './login.service';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, service: LoginService) {}
  jwtHelper = new JwtHelperService();
  url = 'https://goodocity.uc.r.appspot.com/sign_in';
  userData;
  isAuthenticated;
  login(credentials) {
    console.log(credentials.value);

    this.isAuthenticated = this.http
      .post(this.url, JSON.stringify(credentials.value), {
        observe: 'response',
      })
      .subscribe((data) => {
        console.log(data);
        if (data.status == 200) {
          console.log('trueee');
          this.userData = data;
          localStorage.setItem('id', this.userData.body.id);
          localStorage.setItem('name', this.userData.body.name);
          localStorage.setItem('name', this.userData.body.picture);
          return true;
        } else return false;
      });

    console.log(this.isAuthenticated);
    return this.isAuthenticated;
  }

  logout() {}

  isLoggedIn() {
    let token = localStorage.getItem('token');
    console.log(token);
    return token;
  }
}
