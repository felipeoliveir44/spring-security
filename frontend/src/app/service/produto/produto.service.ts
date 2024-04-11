import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrlCadastrar: string = "http://localhost:8080/produto/cadastrar";
  apiUrlListar: string = "http://localhost:8080/produto/listar";

  
  constructor(private http: HttpClient, private authService:AuthService) { }


  cadastrarProduto(nome: string, preco: number): Observable<any> {
    const corpoRequisicao = { nome: nome, preco: preco };

    // Obter o token Bearer do AuthService
    const token = this.authService.getToken();
    console.log(token);

    // Configurar o cabeçalho Authorization com o token Bearer
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Fazer a solicitação HTTP com o cabeçalho de autorização
    return this.http.post<any>(this.apiUrlCadastrar, corpoRequisicao, { headers });
  }

  listarProdutos(): Observable<any> {
    const token = this.authService.getToken();
    console.log(token);

    // Configurar o cabeçalho Authorization com o token Bearer
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.apiUrlListar, {headers});
  }
}
