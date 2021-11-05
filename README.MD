<div align="center">
    <img src="./template/src/assets/images/Logo/gatec.png" alt="Logo" width="%">
    <hr />
</div>

<div align="center">

![React Native Gatec Template Typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label) ![React Native Gatec Template Apple](https://badgen.net/badge/icon/apple?icon=apple&label) ![React Native Gatec Template Google](https://badgen.net/badge/icon/googleplay?icon=googleplay&label) ![React Native Gatec Template React](https://badgen.net/github/release/GatecMobile/react-native-template-gatec)

</div>

# GAtec React Native boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **an optimized architecture for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. It is fully documented so that each piece of code that lands in your application can be understood and used.

## Requirements

Node 12 or greater is required.

## Quick start

To create a new project using the boilerplate simply run :

```
npx react-native init MyApp --template react-native-template-gatec-boilerplate
```

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the _platform_ application (remember to start a simulator or connect a device)

## Using GoogleMaps

To using google maps you need add a Google API Key of your application in **AndroidManifest** which you can find following this path:
`android/app/src/main/AndroidManifest.xml`

```XML
<application>
  ...
  ...
  ...
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
  ...
  ...
</application>
```

## Apple permissions

You need to add this lines in the file **Info.plist** at `ios/{NAME_OF_APP}/Info.plist`

```XML
<xml>
  ...
  ...
  ...
  <key>NSAppleMusicUsageDescription</key>
	<string>We need access to the music to make the custom triggering of sound alerts. This feature will be used in error and success alerts in the application.</string>
	<key>NSCameraUsageDescription</key>
	<string>We need camera access in order to read QRCodes that are used getting the application custom config, to capture pictures of the locations form as well as observations pictures for those forms.</string>
	<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
	<string>We need access to your location to be able to register coordinates that are used in reports for the user's company, to display maps with the location info and to bind the form answers to the user position</string>
	<key>NSLocationAlwaysUsageDescription</key>
	<string>We need access to your location to be able to register coordinates that are used in reports for the user's company, to display maps with the location info and to bind the form answers to the user position</string>
	<key>NSLocationUsageDescription</key>
	<string>We need access to your location to be able to register coordinates that are used in reports for the user's company, to display maps with the location info and to bind the form answers to the user position</string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string>We need access to your location to be able to register coordinates that are used in reports for the user's company, to display maps with the location info and to bind the form answers to the user position</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>We need microphone access tp bind the voice messages to the forms.</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>We need Library access to capture pictures of the locations form as well as observations pictures for those forms.</string>
  ...
  ...
</xml>
```

If necessary you must change descriptions that are in the `<string>{DESCRIPTION_OF_USAGE}</string>` tags

## Code Contributors

This project exists thanks to all the people who contribute.

<div align="center" >

<a href="https://github.com/vicentexd"><img src="https://avatars.githubusercontent.com/u/53430760?v=4" width="200px" style="border-radius: 100px" alt="Gabriel Vicente" /></a><a href="https://github.com/fontanettiwilliam"><img src="https://avatars.githubusercontent.com/u/11983421?v=4" width="200px" style="border-radius: 100px" alt="William Fontanetti" /></a><a href="https://github.com/kazankay"><img src="https://avatars.githubusercontent.com/u/37197065?v=4" width="200px" style="border-radius: 100px" alt="Matheus Costa Francisco" /></a><a href="https://github.com/carlostrevisan1"><img src="https://avatars.githubusercontent.com/u/56885047?v=4" width="200px" style="border-radius: 100px" alt="Carlos Trevisan" /></a><a href="https://github.com/gianseneda"><img src="https://avatars.githubusercontent.com/u/76222899?v=4" width="200px" style="border-radius: 100px" alt="Gian Seneda" /></a>

</div>

## License

This project is released under the [MIT License](LICENSE).
