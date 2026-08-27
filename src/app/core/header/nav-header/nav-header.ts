import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule],
  selector: 'app-nav-header',
  styleUrl: './nav-header.scss',
  templateUrl: './nav-header.html',
})
export class NavHeader {
  isTrue = false;
}
