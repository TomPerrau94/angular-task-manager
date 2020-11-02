import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestsService } from './web-requests.service';
import { shareReplay, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private webReqService: WebRequestsService,
    private router: Router
  ) {}

  signup(email: string, password: string) {
    return this.webReqService.signup(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.body.token);
        console.log('Successfully Signed up and Logged in');
      })
    );
  }
  login(email: string, password: string) {
    return this.webReqService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.body.token);
        console.log('logged in');
      })
    );
  }

  logout() {
    this.removeSession();

    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('user-token');
  }

  setToken(token: string) {
    return localStorage.setItem('user-token', token);
  }

  private setSession(userId: string, token: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('user-token', token);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('user-token');
  }
}
