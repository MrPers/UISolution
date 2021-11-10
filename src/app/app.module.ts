import { ConstantsService } from './services/constants.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { CurrencyService } from './services/currency.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MainModule } from './modules/main/main.module';


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
    // MainModule,
    BrowserAnimationsModule
  ],
  providers: [
    CurrencyService,
    ConstantsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
