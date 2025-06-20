import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {provideAuth, authInterceptor} from 'angular-auth-oidc-client';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import {importProvidersFrom} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import { authConfig } from './auth.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
        IonicModule.forRoot()
    ),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideAuth(authConfig),
  ],
}).catch(err => console.error(err));
