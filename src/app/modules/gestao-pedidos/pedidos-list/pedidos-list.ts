import { CallPedidosService } from './../../../service/call-pedidos';
import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Pedido } from '../../../interface/pedido';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { catchError, Observable, of, Subject, switchMap, startWith } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialog } from '../../../shared/error-dialog/error-dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialog } from '../../../shared/confirmation-dialog/confirmation-dialog';

@Component({
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbar, AsyncPipe, MatButtonModule, MatIcon],
  selector: 'app-pedidos-list',
  styleUrl: './pedidos-list.scss',
  templateUrl: './pedidos-list.html',
})
export class PedidosList implements OnInit {
  private refresh$ = new Subject<void>();

  pedidos$: Observable<Pedido[]> = this.refresh$.pipe(
    startWith(undefined), // dispara a primeira carga automaticamente
    switchMap(() =>
      this.callPedidosService.listAll().pipe(
        catchError((error) => {
          this.onError('Error fetching pedido');
          return of([]);
        }),
      ),
    ),
  );

  displayedColumns: any[] = ['id', 'name', 'category', 'price', 'description', 'actions'];

  constructor(
    private readonly callPedidosService: CallPedidosService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snakeBar: MatSnackBar,
  ) {}

  refresh() {
    this.refresh$.next();
  }

  ngOnInit(): void {}

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialog, {
      data: errorMsg,
      width: '500px',
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(pedido: Pedido) {
    this.router.navigate(['edit', pedido.id], { relativeTo: this.route });
  }

  onDelete(pedido: Pedido) {
    this.callPedidosService.deleteForm(pedido.id).subscribe(
      () => {
        this.refresh();
        this.snakeBar.open('Curso removido com sucesso!', 'X', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      () => {
        this.onError('erro ao tentar remover curso');
      },
    );
    /*const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: `Tem certeza que deseja remover o curso ${pedido.name}?`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.callPedidosService.deleteForm(pedido.id).subscribe({
          next: () => {
            this.refresh();
            this.snakeBar.open('Curso removido com sucesso!!!', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          error: (error) => {
            this.onError('erro ao tentar remover curso');
          },
        });
      }
    });*/
  }
}
