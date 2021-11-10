import { ConstantsService } from './services/constants.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { CurrencyService } from './services/currency.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './modules/main/main.module';
import { TableComponent } from './modules/main/pages/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MainModule
  ],
  providers: [
    CurrencyService,
    ConstantsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CurrencyService } from 'src/app/services/currency.service';
// import { ConstantsService } from 'src/app/services/constants.service';
// import { MainComponent } from './main.component';
// import { AdminRoutingModule } from './main-routing.module';
// import { TableComponent } from './pages/table/table.component';
// import { EmailComponent } from './pages/email/email.component';
// import { MatDialog } from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     MainComponent,
//     EmailComponent,
//     TableComponent
//   ],
//   imports: [
//     FormsModule,
//     CommonModule,
//     AdminRoutingModule,
//     MatDialog
//   ],
//   providers: [
//     CurrencyService,
//     ConstantsService
//   ],
//   bootstrap: [MainComponent]
// })

// export class MainModule { }
