import { Injectable } from '@angular/core';
import * as Oidc from 'oidc-client';

import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private manager = new UserManager(getClientSettings());
  private user!: User;

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user!;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  silentRefresh() {
    this.manager.signinSilentCallback()
    .then(data => {
      console.log(data) })
    .catch((err) => {
        console.log(err);
    });
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  signoutRedirect() {
    return this.manager.signoutRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }

//   this.manager.events.addUserSignedOut(function() {
//     print("User sing out. Good bye.");
// });
}

export function getClientSettings(): UserManagerSettings {
  return {
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
    authority: "https://localhost:10001",
    silent_redirect_uri : "http://localhost:4200/refresh",
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "code",
    automaticSilentRenew: true,
    scope: "openid profile Order",
    client_id: 'angular_id',
  };

}
