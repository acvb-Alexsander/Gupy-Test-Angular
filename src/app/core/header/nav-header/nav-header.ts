import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/authservice';

@Component({
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, RouterLink, AsyncPipe],
  selector: 'app-nav-header',
  styleUrl: './nav-header.scss',
  templateUrl: './nav-header.html',
})
export class NavHeader {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly isTrue$ = this.authService.authenticated$;

  logout(): void {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
