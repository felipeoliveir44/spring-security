import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';

@Component({
  selector: 'app-dialog-cadastro',
  templateUrl: './dialog-cadastro.component.html',
  styleUrls: ['./dialog-cadastro.component.scss'],
})
export class DialogCadastroComponent {

  nomeProduto!: string;
  precoProduto!: number;

  constructor(
    private dialogRef: MatDialogRef<DialogCadastroComponent>,
    private produtoService: ProdutoService,
    private authService: AuthService,
    private toastService: ToastrService,
    private router: Router

  ) {}

  submitForm() {
    this.produtoService.cadastrarProduto(this.nomeProduto, this.precoProduto).subscribe(
      (dados) => {
        this.toastService.success(`Produto ${this.nomeProduto} cadastrado com sucesso!`);
        setTimeout(() => {
          this.reloadPage();
        }, 1000);
      },
      (erro) => {
        this.toastService.error("Erro! Tente novamente.")
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  reloadPage() {
    location.reload();
  }
}
