import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  connectedUser?: User;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  login(username: string, password: string) {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/login`, {
      username,
      password,
    });
  }

  logout() {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/logout`, null)
      .pipe(tap(() => this.connectedUser = undefined));
  }

  isLoggedIn() {
    return this.cookieService.check('is_logged_in');
  }

  getConnectedUser() {
    return this.httpClient.get<User>(`${environment.apiUrl}/auth/connected-user`)
      .pipe(tap(connectedUser => this.connectedUser = connectedUser));
  }
}
