import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCard, MatCardContent } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { Router, RouterLink } from '@angular/router';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Userservice } from '../../service/userservice';

@Component({
  standalone: true,

  imports: [
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],

  selector: 'app-esqueci-senha',

  templateUrl: './esqueci-senha.html',

  styleUrl: './esqueci-senha.scss',
})
export class EsqueciSenha {
  private readonly formBuilder = inject(FormBuilder);

  private readonly userService = inject(Userservice);

  private readonly router = inject(Router);

  private readonly snackBar = inject(MatSnackBar);

  readonly form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],

    password: ['', [Validators.required, Validators.minLength(8)]],

    confirmPassword: ['', [Validators.required]],
  });

  alterarSenha() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    const email = this.form.value.email!;

    const password = this.form.value.password!;

    const confirmPassword = this.form.value.confirmPassword!;

    if (password !== confirmPassword) {
      this.snackBar.open('As senhas não são iguais.', 'Fechar', {
        duration: 3000,
      });

      return;
    }

    this.userService.forgotPassword(email, password).subscribe({
      next: (response) => {
        this.snackBar.open('Senha alterada com sucesso!', 'Fechar', {
          duration: 3000,
        });

        this.router.navigate(['/login']);
      },

      error: (error) => {
        console.error('Erro ao alterar senha:', error);

        const mensagem = typeof error.error === 'string' ? error.error : 'E-mail não encontrado.';

        this.snackBar.open(mensagem, 'Fechar', {
          duration: 3000,
        });
      },
    });
  }
}
