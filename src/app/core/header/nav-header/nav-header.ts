import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [MatCardModule,MatToolbarModule],
  selector: 'app-nav-header',
  styleUrl: './nav-header.scss',
  templateUrl: './nav-header.html',
})
export class NavHeader {
  isTrue = false;
}
