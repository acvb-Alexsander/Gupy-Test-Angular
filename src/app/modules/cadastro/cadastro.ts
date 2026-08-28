import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { Userservice } from '../../service/userservice';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  selector: 'app-cadastro',
  styleUrl: './cadastro.scss',
  templateUrl: './cadastro.html',
})
export class Cadastro implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userService: Userservice,
    private readonly snakeBar: MatSnackBar,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      cel: [null, Validators.required],
      password: [null, Validators.required, Validators.minLength(8)],
    });
  }

  ngOnInit() {
    const idNav = this.route.snapshot.paramMap.get('id');

    if (idNav) {
      this.userService.loadById(idNav).subscribe({
        next: (users) => {
          this.form.patchValue({
            id: users.id,
            name: users.name,
            email: users.email,
            cel: users.cel,
            password: users.password,
          });
        },
        error: () => {
          this.onError();
        },
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.value;

    console.log('foi enviado');

    this.userService.saveForm(payload).subscribe({
      next: (response) => {
        this.onSucess();
      },
      error: (error) => {
        this.onError();
      },
    });

    //console.log(this.form.value)
    /*this.courseService.saveForm(this.form.value).subscribe(
    {
    next:(results) => {
    console.log(results);}, error: (error) => {
    console.log('deu erro',error)} */
  }

  private onError() {
    this.snakeBar.open('Email já cadastrado', '', { duration: 3000 });
  }

  private onSucess() {
    this.snakeBar.open('Curso salvo com sucesso!!!', '', { duration: 3000 });
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['login']);
  }
}
