import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './common/_service/auth.service';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: '',
    // canActivate: [AuthService],
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
