import {Component} from '@angular/core';
import { CommonModule }      from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {App, URLOpenListenerEvent} from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, CommonModule],
  standalone: true,
})
export class AppComponent {
  constructor(
    private oidcSecurityService: OidcSecurityService
  ) {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      // This listens for the redirect URL (e.g., "podium://callback?code=...")
      console.log('App URL Open', event);
      if (event.url) {
        const url = new URL(event.url);
        if (url.protocol === 'myapp:' && url.pathname === '/callback') {
          // Notify the OIDC library to process the redirect
          this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
            console.log('User authenticated in Capacitor app:', isAuthenticated);
          });
        }
      }
    });
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      console.log('User authentication state:', isAuthenticated);
    });

  }
}
