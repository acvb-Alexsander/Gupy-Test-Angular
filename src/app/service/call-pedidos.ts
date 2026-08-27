import { Pedido } from './../interface/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallPedidosService {
  private readonly API = 'http://localhost:8080/api/pedidos';
  constructor(private readonly httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Pedido[]>(this.API).pipe(
      first(),
      tap((pedidos) => console.log(pedidos)),
    );
  }
}
