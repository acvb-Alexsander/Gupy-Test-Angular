import { CallPedidosService } from './../../../service/call-pedidos';
import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Pedido } from '../../../interface/pedido';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialog } from '../../../shared/error-dialog/error-dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbar, AsyncPipe, MatButtonModule],
  selector: 'app-pedidos-list',
  styleUrl: './pedidos-list.scss',
  templateUrl: './pedidos-list.html',
})
export class PedidosList implements OnInit {
  pedidos$: Observable<Pedido[]>;

  displayedColumns: any[] = ['id', 'name', 'category', 'price', 'description'];

  constructor(
    private readonly callPedidosService: CallPedidosService,
    private dialog: MatDialog,
  ) {
    this.pedidos$ = this.callPedidosService.listAll().pipe(
      catchError((error) => {
        this.onError('Erro ao Carregar');

        return of([]);
      }),
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialog, {
      data: errorMsg,
      width: '500px',
    });
  }
  ngOnInit(): void {}
}
