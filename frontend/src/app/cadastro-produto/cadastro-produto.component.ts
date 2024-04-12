import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { DialogCadastroComponent } from './dialog-cadastro/dialog-cadastro.component';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto/produto.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent implements OnInit {
  events: string[] = [];
  opened!: boolean;
  produto!: Produto[];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'nome', 'preco'];
  sort!: MatSort; // MatSort não precisa ser inicializado como 'any'
  dados: Produto[] = [];
  role!: boolean; // Variável para armazenar a role
  isAdmin: boolean = false;

  constructor(
    private dialog: MatDialog,
    private produtoService: ProdutoService,
    private toastService: ToastrService,
    private authService: AuthService
  ) {
    this.role = this.authService.getRole();
    if (this.role != true) {
      this.isAdmin = false;
    } else {
      this.isAdmin = true;
    }
  }

  ngOnInit() {
    this.listarProdutos();

    console.log(this.role);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCadastroComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort; // Vincula o MatSort à fonte de dados após a inicialização da visualização
  }

  listarProdutos() {
    this.produtoService.listarProdutos().subscribe(
      (dados: any) => {
        // **Atribui os dados recebidos à variável 'dados'**
        this.dados = dados;
        this.dataSource.data = dados;
      },
      (erro) => {
        console.log('Erro ao obter os dados:', erro);
      }
    );
  }

  logout(): void {
    this.authService.logout(); // Chama o método de logout do serviço de autenticação
  }
}
