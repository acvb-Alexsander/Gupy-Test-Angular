import { Routes } from '@angular/router';
import { Login } from './modules/login/login';
import { Cadastro } from './modules/cadastro/cadastro';
import { Content } from './core/content/content';

export const routes: Routes = [
  {
    path: '',
    component: Content,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'cadastro',
    component: Cadastro,
  },
];
