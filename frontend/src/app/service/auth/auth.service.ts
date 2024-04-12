import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

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

  logout(): void {
    // Aqui você pode adicionar lógica para limpar informações de sessão, token JWT, etc.
    // Exemplo:
    sessionStorage.removeItem('auth-token'); // Remove um token de autenticação armazenado localmente
    sessionStorage.removeItem('role');

    this.router.navigate(['']); // Redireciona para a página de login após o logout
  }
}
