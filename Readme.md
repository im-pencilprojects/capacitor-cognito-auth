Angular/Ionic/Capacitor application to demonstrate integration with AWS Cognito User Pool

Update the environment file with your AWS UserPool credentials.
Ensure the app deeplink is added to the UserPool client app as a redirect URL and logout callback url

Add Capacitor Android and iOS to your project and then update the AndroidManifest.xml and iOS Info.plist to set up Deep Links

ANDROID

/android/app/src/main/AndroidManifest.xml

Add to <activity></activity>

    <intent-filter>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="myapp" android:host="callback" />
    </intent-filter>

Change myapp to your chosen deeplink app scheme

IOS

/ios/App/App/Info.plist
```
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>myapp</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>myapp</string>
      </array>
    </dict>
    <dict>
      <key>CFBundleURLName</key>
      <string>capacitor</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>capacitor</string>
      </array>
    </dict>
  </array>
```

