import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { CallApiComponent } from './pages/call-api/call-api.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RefreshComponent } from './pages/refresh/refresh.component';
// import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [  
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'refresh',
    component: RefreshComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'call-api',
    component: CallApiComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((el)=>el.MainModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
