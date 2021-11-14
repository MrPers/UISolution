import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { MainComponent } from './main.component';
import { AdminRoutingModule } from './main-routing.module';
import { TableComponent } from './pages/table/table.component';
import { EmailComponent } from './pages/email/email.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ProgresComponent } from './pages/progres/progres.component';
import { CreationUpdateUserComponent } from './pages/creation-update/creation-updateuser.component';
import { HistoryLetteComponent } from './pages/history-lette/history-lette.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MainComponent,
    EmailComponent,
    TableComponent,
    ProgresComponent,
    CreationUpdateUserComponent,
    HistoryLetteComponent
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [
    CurrencyService,
    ConstantsService,
  ],
  bootstrap: [MainComponent]
})

export class MainModule { }
