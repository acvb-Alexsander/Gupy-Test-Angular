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

  loadById(id: string) {
    return this.httpClient.get<Pedido>(`${this.API}/${id}`);
  }

  saveForm(response: Pedido) {
    if (response.id) {
      return this.updateForm(response);
    }
    return this.createForm(response);
  }

  createForm(response: Pedido) {
    return this.httpClient.post<Pedido>(this.API, response);
  }

  updateForm(response: Pedido) {
    return this.httpClient.put<Pedido>(`${this.API}/${response.id}`, response);
  }

  deleteForm(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
