import { Routes } from '@angular/router';
import {CallbackComponent} from "./components/callback.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  { path: 'callback', component: CallbackComponent },
];
