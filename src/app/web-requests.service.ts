import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestsService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://task-manager-tom.herokuapp.com/';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  put(uri: string, payload: object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(
      `${this.ROOT_URL}/user/login`,
      { email, password },
      { observe: 'response' }
    );
  }

  signup(email: string, password: string) {
    return this.http.post(
      `${this.ROOT_URL}/user/signup`,
      { email, password },
      { observe: 'response' }
    );
  }
}
