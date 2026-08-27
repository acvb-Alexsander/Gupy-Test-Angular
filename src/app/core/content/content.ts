import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [MatCard, MatCardContent],
  selector: 'app-content',
  styleUrl: './content.scss',
  templateUrl: './content.html',
})
export class Content {}
