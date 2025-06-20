export const environment = {
  production: true,
  authConfig: {
    authority: 'https://cognito-idp.<REGION>.amazonaws.com/<USERPOOLID>',
    redirectUrl: 'myapp://callback',
    postLogoutRedirectUri: 'myapp://callback',
    clientId: '<CLIENTID>',
    scope: 'openid profile aws.cognito.signin.user.admin email phone', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 60,
  }
};
