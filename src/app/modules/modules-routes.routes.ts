import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Content } from '../core/content/content';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Content },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
];
