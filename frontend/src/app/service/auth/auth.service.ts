import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken() {
    // Recuperar um item do sessionStorage
    const item = sessionStorage.getItem("auth-token");

    if (item) {
      return item;
    } else {
      return null;
    }
  }

  getRole() {
    const item = sessionStorage.getItem("role");
    
    if(item == "ROLE_ADMIN") {
      return true
    }
    else {
      return false
    }
  }
}
