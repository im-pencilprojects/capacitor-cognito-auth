// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authConfig: {
    authority: 'https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_gFJuTIue3',
    redirectUrl: 'myapp://callback',
    postLogoutRedirectUri: 'myapp://callback',
    clientId: '28ltk6r7lnp9ka84b9nsa90h6i',
    scope: 'openid profile aws.cognito.signin.user.admin email phone', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 60,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
