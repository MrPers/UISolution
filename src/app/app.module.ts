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
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CallApiComponent } from './call-api/call-api.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [
    RefreshComponent,
    AppComponent,
    ErrorComponent,
    LogoutComponent,
    AuthCallbackComponent,
    CallApiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MainModule,
    
  ],
  providers: [
    CurrencyService,
    ConstantsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

