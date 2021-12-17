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
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { RefreshComponent } from './pages/refresh/refresh.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    RefreshComponent,
    LogoutComponent,
    AuthCallbackComponent,
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
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

