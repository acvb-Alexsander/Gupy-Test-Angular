import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authenticatedSubject = new BehaviorSubject<boolean>(
    !!localStorage.getItem('token'),
  );

  readonly authenticated$ = this.authenticatedSubject.asObservable();

  login(token: string): void {
    localStorage.setItem('token', token);

    this.authenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');

    this.authenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.authenticatedSubject.value;
  }
}
