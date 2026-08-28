import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { CallPedidosService } from '../../../service/call-pedidos';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCard,
    MatCardContent,
    MatToolbar,
    MatCardActions,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [CallPedidosService],
  selector: 'app-pedidos-form',
  styleUrl: './pedidos-form.scss',
  templateUrl: './pedidos-form.html',
})
export class PedidosForm implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private callPedidoService: CallPedidosService,
    private snakeBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, { validators: [Validators.required] }],
      category: [null, { validators: [Validators.required] }],
      price: [null, { validators: [Validators.required] }],
      description: [null, { validators: [Validators.required] }],
    });
  }

  ngOnInit() {
    const idNav = this.route.snapshot.paramMap.get('id');

    if (idNav) {
      this.callPedidoService.loadById(idNav).subscribe({
        next: (pedido) => {
          this.form.patchValue({
            id: pedido.id,
            name: pedido.name,
            category: pedido.category,
            price: pedido.price,
            description: pedido.description,
          });
        },
        error: () => {
          this.onError();
        },
      });
    }
  }

  private onError() {
    this.snakeBar.open('Erro ao salvar curso!', '', { duration: 3000 });
  }

  private onSucess() {
    this.snakeBar.open('Curso salvo com sucesso!!!', '', { duration: 3000 });
    this.onCancel();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const category = this.form.value.category;
    let icon = '';
    if (category == 'front-end') {
      icon = 'home';
    } else {
      icon = 'arrow_circle_left';
    }
    const payload = {
      ...this.form.value,
      icon: icon,
    };
    this.callPedidoService.saveForm(payload).subscribe({
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

  onCancel() {
    this.router.navigate(['pedidos']);
  }
}
