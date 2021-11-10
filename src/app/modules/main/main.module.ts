import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { MainComponent } from './main.component';
import { AdminRoutingModule } from './main-routing.module';
import { TableComponent } from './pages/table/table.component';
import { EmailComponent } from './pages/email/email.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    EmailComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    MatDialogModule
  ],
  providers: [
    CurrencyService,
    ConstantsService,
  ],
  bootstrap: [MainComponent]
})

export class MainModule { }
