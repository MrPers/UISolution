import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

import { AuthService, getClientSettings } from '../services/auth.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styles: []
})
export class RefreshComponent {
  constructor(private _authService:AuthService) {
    // _authService.manager.events.addAccessTokenExpiring(() => {
    //   debugger;
    //   _authService.manager.signinSilentCallback()
    //     .then(data => {
    //       debugger;
    //       console.log(data) })
    //     .catch((err) => {
    //       debugger;
    //       console.log(err);
    //     });
    // });
  }

  ngOnInit(): void {
    this._authService.silentRefresh();
  }

}
