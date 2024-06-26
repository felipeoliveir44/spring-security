import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../../model/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  apiUrl: string = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string){
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/login`, { login, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("role", value.role);
      })
    )
  }


}
