export const environment = {
  production: true,
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
