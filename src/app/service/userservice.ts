import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { User } from '../interface/user';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  private readonly API = 'http://localhost:8080/api/users';

  constructor(private readonly httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<User[]>(this.API).pipe(
      first(),
      tap((users) => console.log(users)),
    );
  }

  loadById(id: string) {
    return this.httpClient.get<User>(`${this.API}/${id}`);
  }

  saveForm(response: User) {
    if (response.id) {
      return this.updateForm(response);
    }
    return this.createForm(response);
  }

  createForm(response: User) {
    return this.httpClient.post<User>(this.API, response);
  }

  updateForm(response: User) {
    return this.httpClient.put<User>(`${this.API}/${response.id}`, response);
  }

  deleteForm(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  login(email: string, password: string) {
    return this.httpClient.post<User>(`${this.API}/login`, {
      email,
      password,
    });
  }

  forgotPassword(email: string, password: string) {
    return this.httpClient.post(
      `${this.API}/forgot-password`,
      {
        email,
        password,
      },
      {
        responseType: 'text',
      },
    );
  }
}
