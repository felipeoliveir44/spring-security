import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login/login-service.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Login } from '../model/login';
import { ToastrService } from 'ngx-toastr';
import 'feather-icons';

declare const feather: any;

interface LoginForm {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  
  constructor(private router: Router, private loginService: LoginServiceService, private toastService:ToastrService) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe({
        next: () => {
          this.toastService.success("Login feito com sucesso!");
          setTimeout(() => {
            this.router.navigateByUrl("/cadastro-produto");
          }, 1000);
        },
        error: (error) => {
          console.log(error); // Mostra o erro da API (se houver)
          this.toastService.error("Erro inesperado! Tente novamente mais tarde");
        },
      });
  }
  

}
