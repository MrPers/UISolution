import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AdminRoutingModule } from './main-routing.module';
import { TableComponent } from './pages/table/table.component';
import { EmailComponent } from './pages/email/email.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ProgresComponent } from './pages/progres/progres.component';
import { HistoryLetteComponent } from './pages/history-lette/history-lette.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreationUpdateGroupComponent } from './pages/creation-update-group/creation-update-group.component';
import { DisplaygroypComponent } from './pages/displaygroyp/displaygroyp.component';
import { UsersinGroupComponent } from './pages/usersin-group/usersin-group.component';
import { CreationUpdateUserComponent } from './pages/creation-update-user/creation-updateuser.component';
import { LetterComponent } from './pages/letter/letter.component';
import { AuthCallbackComponent } from '../../pages/auth-callback/auth-callback.component';
import { RefreshComponent } from '../../pages/refresh/refresh.component';
import { LogoutComponent } from '../../pages/logout/logout.component';
import { CurrencyService } from '../../services/currency.service';
import { ConstantsService } from '../../services/constants.service';

@NgModule({
  declarations: [
    // RefreshComponent,
    // LogoutComponent,
    // AuthCallbackComponent,
    MainComponent,
    EmailComponent,
    TableComponent,
    ProgresComponent,
    CreationUpdateUserComponent,
    HistoryLetteComponent,
    CreationUpdateGroupComponent,
    DisplaygroypComponent,
    UsersinGroupComponent,
    LetterComponent
  ],
  imports: [
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
