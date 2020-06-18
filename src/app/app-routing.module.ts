import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/top/top.module').then(o => o.TopModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(o => o.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(o => o.RegisterModule) },
  { path: 'error', loadChildren: () => import('./modules/error/error.module').then(o => o.ErrorModule) },
  { path: '**', redirectTo: '/error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
