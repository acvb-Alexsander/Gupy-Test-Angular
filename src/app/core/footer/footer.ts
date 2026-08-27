import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [MatCard, MatToolbar],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
