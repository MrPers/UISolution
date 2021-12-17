import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { TableComponent } from './pages/table/table.component';
import { AuthCallbackComponent } from '../../pages/auth-callback/auth-callback.component';
import { RefreshComponent } from '../../pages/refresh/refresh.component';
import { LogoutComponent } from '../../pages/logout/logout.component';

const routes: Routes = [
  {
    path:'', component: MainComponent,
    children:[
      {
        path: '', component: TableComponent,
        // canActivate: [AuthGuardService]
      }
    ],    
  },
  // {
  //   path: 'auth-callback',
  //   component: AuthCallbackComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'refresh',
  //   component: RefreshComponent,
  // },
  // {
  //   path: 'logout',
  //   component: LogoutComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
