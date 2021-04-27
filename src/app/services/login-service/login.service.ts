import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly urlAPI = environment.api

  constructor(private http: HttpClient) { }


  getAll(): Observable<login[]> {
    return this.http.get<login[]>(this.urlAPI)
  }


  logIn() {
    this.http.get(this.urlAPI + '');

  }

}
