import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../service/authservice';
import { Userservice } from '../../service/userservice';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  ],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly userService = inject(Userservice);
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],

    password: ['', [Validators.required]],
  });

  constructor(private snakeBar: MatSnackBar) {}

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const email = this.form.value.email!;
    const password = this.form.value.password!;

    this.userService.login(email, password).subscribe({
      next: (user) => {
        console.log('Usuário autenticado:', user);

        // Por enquanto podemos usar o ID como "token"
        this.authService.login(user.id!.toString());

        this.router.navigate(['/pedidos']);
      },

      error: (error) => {
        console.error('Erro no login:', error);

        alert('E-mail ou senha incorretos');
      },
    });
  }

  hasError() {
    this.snakeBar.open('Senha com menos de 8 caracteres', '', { duration: 3000 });
  }
}
