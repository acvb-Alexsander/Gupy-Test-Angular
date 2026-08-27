import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeader } from './core/header/nav-header/nav-header';
import { Footer } from './core/footer/footer';
import { Content } from './core/content/content';

@Component({
  imports: [RouterOutlet, NavHeader, Footer, Content],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GupyTestAngular');
}
