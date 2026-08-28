import { Routes } from '@angular/router';
import { Login } from './modules/login/login';
import { Cadastro } from './modules/cadastro/cadastro';
import { Content } from './core/content/content';
import { PedidosList } from './modules/gestao-pedidos/pedidos-list/pedidos-list';
import { authGuard } from './guard/auth-guard';
import { PedidosForm } from './modules/gestao-pedidos/pedidos-form/pedidos-form';
import { EsqueciSenha } from './components/esqueci-senha/esqueci-senha';

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
    path: 'esqueci-senha',
    component: EsqueciSenha,
  },
  {
    path: 'cadastro',
    component: Cadastro,
  },
  {
    path: 'pedidos',
    children: [
      {
        path: '',
        component: PedidosList,
        canActivate: [authGuard],
      },
      {
        path: 'new',
        component: PedidosForm,
        canActivate: [authGuard],
      },
      {
        path: 'edit/:id',
        component: PedidosForm,
        canActivate: [authGuard],
      },
    ],
  },
];
