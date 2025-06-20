import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'capacitor.cognito.auth',
  appName: 'Capacitor Cognito Auth',
  webDir: 'www',
  server: {
    androidScheme: "https",
    iosScheme: "capacitor"
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    CapacitorOauth2Client: {
      scheme: 'myapp',
    },
    App: {
      customScheme: 'myapp'
    }
  },
};

export default config;
