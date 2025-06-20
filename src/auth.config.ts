import { PassedInitialConfig } from 'angular-auth-oidc-client';
import {environment} from "./environments/environment";

export const authConfig: PassedInitialConfig = {
  config: {
    authority: environment.authConfig.authority,
    redirectUrl: environment.authConfig.redirectUrl,
    postLogoutRedirectUri: environment.authConfig.postLogoutRedirectUri,
    clientId: environment.authConfig.clientId,
    scope: environment.authConfig.scope,
    responseType: environment.authConfig.responseType,
    silentRenew: environment.authConfig.silentRenew,
    useRefreshToken: environment.authConfig.useRefreshToken,
    renewTimeBeforeTokenExpiresInSeconds: environment.authConfig.renewTimeBeforeTokenExpiresInSeconds,
  }
}
