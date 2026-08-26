import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavHeader} from './core/header/nav-header/nav-header';


@Component({
  imports: [RouterOutlet, NavHeader],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GupyTestAngular');
}
