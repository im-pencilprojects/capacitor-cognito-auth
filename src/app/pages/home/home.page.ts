import { Component, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonButton
} from '@ionic/angular/standalone';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:  true,
  imports: [IonHeader, IonTitle, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, AsyncPipe, JsonPipe, NgIf],
})
export class HomePage {
  private oidc = inject(OidcSecurityService);
  userData$ = this.oidc.userData$;
  isAuthenticated = false;
  constructor() {
    this.oidc.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  login() {
    this.oidc.authorize();
  }
  logout() {
    if (window.sessionStorage) {
      window.sessionStorage.clear();
    }
    // adjust your pool domain + redirect:
    window.location.href = environment.authConfig.postLogoutRedirectUri;
  }
}
