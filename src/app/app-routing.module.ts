import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CallApiComponent } from './call-api/call-api.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './pages/error/error.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((el)=>el.MainModule)
  },
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
    canActivate: [AuthGuardService]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
