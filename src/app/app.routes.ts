import { Routes } from '@angular/router';
import { Login } from './modules/login/login';
import { Cadastro } from './modules/cadastro/cadastro';
import { Content } from './core/content/content';
import { PedidosList } from './modules/gestao-pedidos/pedidos-list/pedidos-list';
import { authGuard } from './guard/auth-guard';

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
  {
    path: 'pedidos',
    component: PedidosList,
    //canActivate: [authGuard],
  },
];
