import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeader } from './core/header/nav-header/nav-header';
import { Footer } from './core/footer/footer';

@Component({
  imports: [RouterOutlet, NavHeader, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GupyTestAngular');
}
