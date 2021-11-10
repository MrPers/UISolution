import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  {
    path:'', component: MainComponent,
    children:[
      {
        path: '', component: TableComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
