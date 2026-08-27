import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCardModule],
  selector: 'app-error-dialog',
  styleUrl: './error-dialog.scss',
  templateUrl: './error-dialog.html',
})
export class ErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
