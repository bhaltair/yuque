# app.json

```
+ name
+ description
+ slug
+ owner
+ currentFullName
+ originalFullName
+ privacy
+ sdkVersion
+ version
+ runtimeVersion
+ platforms
+ githubUrl
+ orientation
+ userInterfaceStyle
    - light
+ backgroundColor
    - default #ffffff
+ primaryColor
    - only in android
+ icon
    - 1024 * 1024 png
+ notification
    - icon
        * 96 * 96 png
    - color
        * default #ffffff
    - iosDisplayInForeground
        * default false
    - androidMode
    - androidCollapsedTitle
+ appKey
+ andoridStatusBar
    - barStyle
    - backgroundColor
    - hidden
    - translucent
+ androidNavigationBar
    - visible
    - barStyle
    - backgroundColor
+ developmentClient
    - silentLaunch
+ schema
+ entryPoint
+ extra
+ updates
    - enabled
    - checkAutomatically
    - url
    - fallbackToCacheTimeout
+ locales
+ isDetached
+ detach
+ assetBundlePatterns
    - 离线支持 
+ plugins
    - prebuild
+ splash
    - backgroundColor
    - resizeMode
    - image
+ ios
    - publishManifestPath
    - publishBundlePath
    - bundleIdentifier
    - buildNumber
    - icon
    - appStoreUrl
    - config
        * branch
            + apiKey
    - googleServcesFile
    - supportsTablet
    - isTabletOnly
    - requireFullScreen
    - userInterfaceStyle
    - infoPlist
    - entitleements
    - associateDomains
    - userIcloudStorage
    - useAppleSignIn
    - accessesContactNotes
    - splash
        * backgroundColor
        * resizeMode
        * image
        * tabletImage
+ android
    - publishManifestPath
    - publishBundlePath
    - jsEngine
    - softwareKeyboardLayoutMode
        * default = resize
        * other value resize/pan
    - allowBackup
    - versionColde
    - package
    - icon
    - useInterfaceStyle
    - backgroundColor
    - adaptiveIcon
        * foregroundImage
        * backgroundImage
        * backgroundColor
    - playStoreUrl
    - permissions
        *  [ "CAMERA", "ACCESS_FINE_LOCATION" ].
    - googleServicesFile
    - config
        * brnach
        * googleMaps
    - splash
        * backgroundColor
        * resizeMode
            + default contain
            + cover/contain/native
        * image
            + must be a .png
        * mdpi
            + natural sized image (baseline)
        * hdpi
            + scale 1.5x
        * xhdpi
            + scale 2x
        * xxhdpi
            + scale 3x
        * xxxhdpi
            + scale 4x
+ web
+ hooks
    - postPublish
    - postExport
    - 



| Property | Description |
| :--- | :--- |
| [name](https://docs.expo.dev/versions/v42.0.0/config/app/#name) | **(string)** - The name of your app as it appears both within Expo Go and on your home screen as a standalone app.<br/>Bare Workflow<br/>To change the name of your app, edit the 'Display Name' field in Xcode and the app_name string in android/app/src/main/res/values/strings.xml |
| [description](https://docs.expo.dev/versions/v42.0.0/config/app/#description) | **(string)** - A short description of what your app is and why it is great. |
| [slug](https://docs.expo.dev/versions/v42.0.0/config/app/#slug) | **(string)** - The friendly URL name for publishing. For example, myAppName will refer to the expo.dev/@project-owner/myAppName project. |
| [owner](https://docs.expo.dev/versions/v42.0.0/config/app/#owner) | **(string)** - The Expo account name of the team owner, only applicable if you are enrolled in the EAS Priority Plan. If not provided, defaults to the username of the current user. |
| [currentFullName](https://docs.expo.dev/versions/v42.0.0/config/app/#currentfullname) | **(string)** - The auto generated Expo account name and slug used for display purposes. Formatted like @username/slug. When unauthenticated, the username is @anonymous. For published projects, this value may change when a project is transferred between accounts or renamed. |
| [originalFullName](https://docs.expo.dev/versions/v42.0.0/config/app/#originalfullname) | **(string)** - The auto generated Expo account name and slug used for services like Notifications and AuthSession proxy. Formatted like @username/slug. When unauthenticated, the username is @anonymous. For published projects, this value will not change when a project is transferred between accounts or renamed. |
| [privacy](https://docs.expo.dev/versions/v42.0.0/config/app/#privacy) | **(enum)** - Defaults to unlisted. unlisted hides the project from search results. hidden restricts access to the project page to only the owner and other users that have been granted access. Valid values: public, unlisted, hidden. |
| [sdkVersion](https://docs.expo.dev/versions/v42.0.0/config/app/#sdkversion) | **(string)** - The Expo sdkVersion to run the project on. This should line up with the version specified in your package.json. |
| [runtimeVersion](https://docs.expo.dev/versions/v42.0.0/config/app/#runtimeversion) | **(string)** - **Note: Don't use this property unless you are sure what you're doing**<br/>The runtime version associated with this manifest for bare workflow projects. If provided, this must match the version set in Expo.plist or AndroidManifest.xml.<br/>A string beginning with an alphanumeric character followed by any combination of alphanumeric character, "_", "+", "." or "-". Example: "1.0.3a+". |
| [version](https://docs.expo.dev/versions/v42.0.0/config/app/#version) | **(string)** - Your app version. In addition to this field, you'll also use ios.buildNumber and android.versionCode — read more about how to version your app [here](https://docs.expo.dev/distribution/app-stores/#versioning-your-app). On iOS this corresponds to CFBundleShortVersionString, and on Android, this corresponds to versionName. The required format can be found [here](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleshortversionstring).<br/>Bare Workflow |
| [platforms](https://docs.expo.dev/versions/v42.0.0/config/app/#platforms) | **(array)** - Platforms that your project explicitly supports. If not specified, it defaults to ["ios", "android"]. |
| [githubUrl](https://docs.expo.dev/versions/v42.0.0/config/app/#githuburl) | **(string)** - If you would like to share the source code of your app on Github, enter the URL for the repository here and it will be linked to from your Expo project page. |
| [orientation](https://docs.expo.dev/versions/v42.0.0/config/app/#orientation) | **(enum)** - Locks your app to a specific orientation with portrait or landscape. Defaults to no lock. Valid values: default, portrait, landscape |
| [userInterfaceStyle](https://docs.expo.dev/versions/v42.0.0/config/app/#userinterfacestyle) | **(enum)** - Configuration to force the app to always use the light or dark user-interface appearance, such as "dark mode", or make it automatically adapt to the system preferences. If not provided, defaults to light. |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor) | **(string)** - The background color for your app, behind any of your React views. This is also known as the root view background color.<br/>6 character long hex color string, for example, '#000000'. Default is white: '#ffffff' |
| [primaryColor](https://docs.expo.dev/versions/v42.0.0/config/app/#primarycolor) | **(string)** - On Android, this will determine the color of your app in the multitasker. Currently this is not used on iOS, but it may be used for other purposes in the future.<br/>6 character long hex color string, for example, '#000000' |
| [icon](https://docs.expo.dev/versions/v42.0.0/config/app/#icon) | **(string)** - Local path or remote URL to an image to use for your app's icon. We recommend that you use a 1024x1024 png file. This icon will appear on the home screen and within the Expo app.<br/>Bare Workflow |
| [notification](https://docs.expo.dev/versions/v42.0.0/config/app/#notification) | **(object)** - Configuration for remote (push) notifications. |
| [icon](https://docs.expo.dev/versions/v42.0.0/config/app/#icon-1) | **(string)** - (Android only) Local path or remote URL to an image to use as the icon for push notifications. 96x96 png grayscale with transparency. We recommend following [Google's design guidelines](https://material.io/design/iconography/product-icons.html#design-principles). If not provided, defaults to your app icon. |
| [color](https://docs.expo.dev/versions/v42.0.0/config/app/#color) | **(string)** - (Android only) Tint color for the push notification image when it appears in the notification tray. Defaults to #ffffff<br/>6 character long hex color string, for example, '#000000' |
| [iosDisplayInForeground](https://docs.expo.dev/versions/v42.0.0/config/app/#iosdisplayinforeground) | **(boolean)** - Whether or not to display notifications when the app is in the foreground on iOS. _displayInForeground option in the individual push notification message overrides this option. [Learn more.](https://docs.expo.dev/push-notifications/receiving-notifications/#foreground-notification-behavior) Defaults to false. |
| [androidMode](https://docs.expo.dev/versions/v42.0.0/config/app/#androidmode) | **(enum)** - Show each push notification individually (default) or collapse into one (collapse). |
| [androidCollapsedTitle](https://docs.expo.dev/versions/v42.0.0/config/app/#androidcollapsedtitle) | **(string)** - If androidMode is set to collapse, this title is used for the collapsed notification message. For example, '#{unread_notifications} new interactions'. |
| [appKey](https://docs.expo.dev/versions/v42.0.0/config/app/#appkey) | **(string)** - By default, Expo looks for the application registered with the AppRegistry as main. If you would like to change this, you can specify the name in this property. |
| [androidStatusBar](https://docs.expo.dev/versions/v42.0.0/config/app/#androidstatusbar) | **(object)** - Configuration for the status bar on Android. For more details please navigate to [Configuring StatusBar](https://docs.expo.dev/guides/configuring-statusbar/). |
| [barStyle](https://docs.expo.dev/versions/v42.0.0/config/app/#barstyle) | **(enum)** - Configures the status bar icons to have a light or dark color. Valid values: light-content, dark-content. Defaults to dark-content |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-1) | **(string)** - Specifies the background color of the status bar. Defaults to #00000000 (transparent) for dark-content bar style and #00000088 (semi-transparent black) for light-content bar style<br/>6 character long hex color string '#RRGGBB', for example, '#000000' for black. Or 8 character long hex color string '#RRGGBBAA', for example, '#00000088' for semi-transparent black. |
| [hidden](https://docs.expo.dev/versions/v42.0.0/config/app/#hidden) | **(boolean)** - Instructs the system whether the status bar should be visible or not. Defaults to false |
| [translucent](https://docs.expo.dev/versions/v42.0.0/config/app/#translucent) | **(boolean)** - Sets android:windowTranslucentStatus in styles.xml. When false, the system status bar pushes the content of your app down (similar to position: relative). When true, the status bar floats above the content in your app (similar to position: absolute). Defaults to true to match the iOS status bar behavior (which can only float above content). |
| [androidNavigationBar](https://docs.expo.dev/versions/v42.0.0/config/app/#androidnavigationbar) | **(object)** - Configuration for the bottom navigation bar on Android. |
| [visible](https://docs.expo.dev/versions/v42.0.0/config/app/#visible) | **(enum)** - Determines how and when the navigation bar is shown. [Learn more](https://developer.android.com/training/system-ui/immersive). Valid values: leanback, immersive, sticky-immersive<br/>leanback results in the navigation bar being hidden until the first touch gesture is registered. <br/>immersive results in the navigation bar being hidden until the user swipes up from the edge where the navigation bar is hidden. <br/>sticky-immersive is identical to 'immersive' except that the navigation bar will be semi-transparent and will be hidden again after a short period of time |
| [barStyle](https://docs.expo.dev/versions/v42.0.0/config/app/#barstyle-1) | **(enum)** - Configure the navigation bar icons to have a light or dark color. Supported on Android Oreo and newer. Valid values: 'light-content', 'dark-content' |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-2) | **(string)** - Specifies the background color of the navigation bar.<br/>6 character long hex color string, for example, '#000000' |
| [developmentClient](https://docs.expo.dev/versions/v42.0.0/config/app/#developmentclient) | **(object)** - Settings that apply specifically to running this app in a development client |
| [silentLaunch](https://docs.expo.dev/versions/v42.0.0/config/app/#silentlaunch) | **(boolean)** - If true, the app will launch in a development client with no additional dialogs or progress indicators, just like in a standalone app. |
| [scheme](https://docs.expo.dev/versions/v42.0.0/config/app/#scheme) | **(string)** - **Standalone Apps Only**. URL scheme to link into your app. For example, if we set this to 'demo', then demo:// URLs would open your app when tapped.<br/>String beginning with a **lowercase** letter followed by any combination of **lowercase** letters, digits, "+", "." or "-"<br/>Bare Workflow |
| [entryPoint](https://docs.expo.dev/versions/v42.0.0/config/app/#entrypoint) | **(string)** - The relative path to your main JavaScript file. |
| [extra](https://docs.expo.dev/versions/v42.0.0/config/app/#extra) | **(object)** - Any extra fields you want to pass to your experience. Values are accessible via Expo.Constants.manifest.extra ([Learn more](https://docs.expo.dev/versions/latest/sdk/constants/#constantsmanifest)) |
| [updates](https://docs.expo.dev/versions/v42.0.0/config/app/#updates) | **(object)** - Configuration for how and when the app should request OTA JavaScript updates |
| [enabled](https://docs.expo.dev/versions/v42.0.0/config/app/#enabled) | **(boolean)** - If set to false, your standalone app will never download any code, and will only use code bundled locally on the device. In that case, all updates to your app must be submitted through app store review. Defaults to true. (Note: This will not work out of the box with ExpoKit projects) |
| [checkAutomatically](https://docs.expo.dev/versions/v42.0.0/config/app/#checkautomatically) | **(enum)** - By default, Expo will check for updates every time the app is loaded. Set this to ON_ERROR_RECOVERY to disable automatic checking unless recovering from an error. Must be one of ON_LOAD or ON_ERROR_RECOVERY |
| [fallbackToCacheTimeout](https://docs.expo.dev/versions/v42.0.0/config/app/#fallbacktocachetimeout) | **(number)** - How long (in ms) to allow for fetching OTA updates before falling back to a cached version of the app. Defaults to 0. Must be between 0 and 300000 (5 minutes). |
| [url](https://docs.expo.dev/versions/v42.0.0/config/app/#url) | **(string)** - URL from which expo-updates will fetch update manifests |
| [locales](https://docs.expo.dev/versions/v42.0.0/config/app/#locales) | **(object)** - Provide overrides by locale for System Dialog prompts like Permissions Boxes<br/>Bare Workflow |
| [facebookAppId](https://docs.expo.dev/versions/v42.0.0/config/app/#facebookappid) | **(string)** - Used for all Facebook libraries. Set up your Facebook App ID at [https://developers.facebook.com.](https://developers.facebook.com./)<br/>Bare Workflow |
| [facebookAutoInitEnabled](https://docs.expo.dev/versions/v42.0.0/config/app/#facebookautoinitenabled) | **(boolean)** - Whether the Facebook SDK should be initialized automatically. The default in Expo (Client and in standalone apps) is false. |
| [facebookAutoLogAppEventsEnabled](https://docs.expo.dev/versions/v42.0.0/config/app/#facebookautologappeventsenabled) | **(boolean)** - Whether the Facebook SDK log app events automatically. If you don't set this property, Facebook's default will be used. (Applicable only to standalone apps.) Note: The Facebook SDK must be initialized for app events to work. You may autoinitialize Facebook SDK by setting facebookAutoInitEnabled to true<br/>Bare Workflow |
| [facebookAdvertiserIDCollectionEnabled](https://docs.expo.dev/versions/v42.0.0/config/app/#facebookadvertiseridcollectionenabled) | **(boolean)** - Whether the Facebook SDK should collect advertiser ID properties, like the Apple IDFA and Android Advertising ID, automatically. If you don't set this property, Facebook's default policy will be used. (Applicable only to standalone apps.)<br/>Bare Workflow |
| [facebookDisplayName](https://docs.expo.dev/versions/v42.0.0/config/app/#facebookdisplayname) | **(string)** - Used for native Facebook login.<br/>Bare Workflow |
| [facebookScheme](https://docs.expo.dev/versions/v42.0.0/config/app/#facebookscheme) | **(string)** - Used for Facebook native login. Starts with 'fb' and followed by a string of digits, like 'fb1234567890'. You can find your scheme [here](https://developers.facebook.com/docs/facebook-login/ios)in the 'Configuring Your info.plist' section (only applicable to standalone apps and custom Expo Go apps).<br/>Bare Workflow |
| [isDetached](https://docs.expo.dev/versions/v42.0.0/config/app/#isdetached) | **(boolean)** - Is app detached |
| [detach](https://docs.expo.dev/versions/v42.0.0/config/app/#detach) | **(object)** - Extra fields needed by detached apps |
| [assetBundlePatterns](https://docs.expo.dev/versions/v42.0.0/config/app/#assetbundlepatterns) | **(array)** - An array of file glob strings which point to assets that will be bundled within your standalone app binary. Read more in the [Offline Support guide](https://docs.expo.dev/guides/offline-support/) |
| [plugins](https://docs.expo.dev/versions/v42.0.0/config/app/#plugins) | **(array)** - Config plugins for adding extra functionality to your project. [Learn more](https://docs.expo.dev/guides/config-plugins/).<br/>Bare Workflow |
| [splash](https://docs.expo.dev/versions/v42.0.0/config/app/#splash) | **(object)** - Configuration for loading and splash screen for standalone apps.<br/>Bare Workflow |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-3) | **(string)** - Color to fill the loading screen background<br/>6 character long hex color string, for example, '#000000'<br/>Bare Workflow |
| [resizeMode](https://docs.expo.dev/versions/v42.0.0/config/app/#resizemode) | **(enum)** - Determines how the image will be displayed in the splash loading screen. Must be one of cover or contain, defaults to contain. |
| [image](https://docs.expo.dev/versions/v42.0.0/config/app/#image) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png. |
| [ios](https://docs.expo.dev/versions/v42.0.0/config/app/#ios) | **(object)** - Configuration that is specific to the iOS platform. |
| [publishManifestPath](https://docs.expo.dev/versions/v42.0.0/config/app/#publishmanifestpath) | **(string)** - The manifest for the iOS version of your app will be written to this path during publish. |
| [publishBundlePath](https://docs.expo.dev/versions/v42.0.0/config/app/#publishbundlepath) | **(string)** - The bundle for the iOS version of your app will be written to this path during publish. |
| [bundleIdentifier](https://docs.expo.dev/versions/v42.0.0/config/app/#bundleidentifier) | **(string)** - The bundle identifier for your iOS standalone app. You make it up, but it needs to be unique on the App Store. See [this StackOverflow question](http://stackoverflow.com/questions/11347470/what-does-bundle-identifier-mean-in-the-ios-project).<br/>iOS bundle identifier notation unique name for your app. For example, host.exp.expo, where exp.host is our domain and expo is our app name.<br/>Bare Workflow |
| [buildNumber](https://docs.expo.dev/versions/v42.0.0/config/app/#buildnumber) | **(string)** - Build number for your iOS standalone app. Corresponds to CFBundleVersion and must match Apple's [specified format](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364). (Note: Transporter will pull the value for Version Number from expo.version and NOT from expo.ios.buildNumber.)<br/>Bare Workflow |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-4) | **(string)** - The background color for your iOS app, behind any of your React views. Overrides the top-level backgroundColor key if it is present.<br/>6 character long hex color string, for example, '#000000' |
| [icon](https://docs.expo.dev/versions/v42.0.0/config/app/#icon-2) | **(string)** - Local path or remote URL to an image to use for your app's icon on iOS. If specified, this overrides the top-level icon key. Use a 1024x1024 icon which follows Apple's interface guidelines for icons, including color profile and transparency. <br/> Expo will generate the other required sizes. This icon will appear on the home screen and within the Expo app. |
| [appStoreUrl](https://docs.expo.dev/versions/v42.0.0/config/app/#appstoreurl) | **(string)** - URL to your app on the Apple App Store, if you have deployed it there. This is used to link to your store page from your Expo project page if your app is public. |
| [config](https://docs.expo.dev/versions/v42.0.0/config/app/#config) | **(object)** - Note: This property key is not included in the production manifest and will evaluate to undefined. It is used internally only in the build process, because it contains API keys that some may want to keep private. |
| [branch](https://docs.expo.dev/versions/v42.0.0/config/app/#branch) | **(object)** - [Branch](https://branch.io/) key to hook up Branch linking services. |
| [apiKey](https://docs.expo.dev/versions/v42.0.0/config/app/#apikey) | **(string)** - Your Branch API key |
| [usesNonExemptEncryption](https://docs.expo.dev/versions/v42.0.0/config/app/#usesnonexemptencryption) | **(boolean)** - Sets ITSAppUsesNonExemptEncryption in the standalone ipa's Info.plist to the given boolean value. |
| [googleMapsApiKey](https://docs.expo.dev/versions/v42.0.0/config/app/#googlemapsapikey) | **(string)** - [Google Maps iOS SDK](https://developers.google.com/maps/documentation/ios-sdk/start) key for your standalone app. |
| [googleMobileAdsAppId](https://docs.expo.dev/versions/v42.0.0/config/app/#googlemobileadsappid) | **(string)** - [Google Mobile Ads App ID](https://support.google.com/admob/answer/6232340) Google AdMob App ID.  |
| [googleMobileAdsAutoInit](https://docs.expo.dev/versions/v42.0.0/config/app/#googlemobileadsautoinit) | **(boolean)** - A boolean indicating whether to initialize Google App Measurement and begin sending user-level event data to Google immediately when the app starts. The default in Expo (Go and in standalone apps) is false. [Sets the opposite of the given value to the following key in Info.plist.](https://developers.google.com/admob/ios/eu-consent#delay_app_measurement_optional) |
| [googleSignIn](https://docs.expo.dev/versions/v42.0.0/config/app/#googlesignin) | **(object)** - [Google Sign-In iOS SDK](https://developers.google.com/identity/sign-in/ios/start-integrating) keys for your standalone app. |
| [reservedClientId](https://docs.expo.dev/versions/v42.0.0/config/app/#reservedclientid) | **(string)** - The reserved client ID URL scheme. Can be found in GoogleService-Info.plist. |
| [googleServicesFile](https://docs.expo.dev/versions/v42.0.0/config/app/#googleservicesfile) | **(string)** - [Firebase Configuration File](https://support.google.com/firebase/answer/7015592) Location of the GoogleService-Info.plist file for configuring Firebase. |
| [supportsTablet](https://docs.expo.dev/versions/v42.0.0/config/app/#supportstablet) | **(boolean)** - Whether your standalone iOS app supports tablet screen sizes. Defaults to false.<br/>Bare Workflow |
| [isTabletOnly](https://docs.expo.dev/versions/v42.0.0/config/app/#istabletonly) | **(boolean)** - If true, indicates that your standalone iOS app does not support handsets, and only supports tablets.<br/>Bare Workflow |
| [requireFullScreen](https://docs.expo.dev/versions/v42.0.0/config/app/#requirefullscreen) | **(boolean)** - If true, indicates that your standalone iOS app does not support Slide Over and Split View on iPad. Defaults to false<br/>Bare Workflow |
| [userInterfaceStyle](https://docs.expo.dev/versions/v42.0.0/config/app/#userinterfacestyle-1) | **(enum)** - Configuration to force the app to always use the light or dark user-interface appearance, such as "dark mode", or make it automatically adapt to the system preferences. If not provided, defaults to light. |
| [infoPlist](https://docs.expo.dev/versions/v42.0.0/config/app/#infoplist) | **(object)** - Dictionary of arbitrary configuration to add to your standalone app's native Info.plist. Applied prior to all other Expo-specific configuration. No other validation is performed, so use this at your own risk of rejection from the App Store. |
| [entitlements](https://docs.expo.dev/versions/v42.0.0/config/app/#entitlements) | **(object)** - Dictionary of arbitrary configuration to add to your standalone app's native *.entitlements (plist). Applied prior to all other Expo-specific configuration. No other validation is performed, so use this at your own risk of rejection from the App Store. |
| [associatedDomains](https://docs.expo.dev/versions/v42.0.0/config/app/#associateddomains) | **(array)** - An array that contains Associated Domains for the standalone app. [Learn more](https://developer.apple.com/documentation/safariservices/supporting_associated_domains).<br/>Entries must follow the format applinks:<fully qualified domain>[:port number]. [Learn more](https://developer.apple.com/documentation/safariservices/supporting_associated_domains).<br/>Bare Workflow |
| [usesIcloudStorage](https://docs.expo.dev/versions/v42.0.0/config/app/#usesicloudstorage) | **(boolean)** - A boolean indicating if the app uses iCloud Storage for DocumentPicker. See DocumentPicker docs for details.<br/>Bare Workflow |
| [usesAppleSignIn](https://docs.expo.dev/versions/v42.0.0/config/app/#usesapplesignin) | **(boolean)** - A boolean indicating if the app uses Apple Sign-In. See AppleAuthentication docs for details. |
| [accessesContactNotes](https://docs.expo.dev/versions/v42.0.0/config/app/#accessescontactnotes) | **(boolean)** - A Boolean value that indicates whether the app may access the notes stored in contacts. You must [receive permission from Apple](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_contacts_notes) before you can submit your app for review with this capability. |
| [splash](https://docs.expo.dev/versions/v42.0.0/config/app/#splash-1) | **(object)** - Configuration for loading and splash screen for standalone iOS apps. |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-5) | **(string)** - Color to fill the loading screen background<br/>6 character long hex color string, for example, '#000000' |
| [resizeMode](https://docs.expo.dev/versions/v42.0.0/config/app/#resizemode-1) | **(enum)** - Determines how the image will be displayed in the splash loading screen. Must be one of cover or contain, defaults to contain. |
| [image](https://docs.expo.dev/versions/v42.0.0/config/app/#image-1) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png. |
| [tabletImage](https://docs.expo.dev/versions/v42.0.0/config/app/#tabletimage) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png. |
| [android](https://docs.expo.dev/versions/v42.0.0/config/app/#android) | **(object)** - Configuration that is specific to the Android platform. |
| [publishManifestPath](https://docs.expo.dev/versions/v42.0.0/config/app/#publishmanifestpath-1) | **(string)** - The manifest for the Android version of your app will be written to this path during publish. |
| [publishBundlePath](https://docs.expo.dev/versions/v42.0.0/config/app/#publishbundlepath-1) | **(string)** - The bundle for the Android version of your app will be written to this path during publish. |
| [package](https://docs.expo.dev/versions/v42.0.0/config/app/#package) | **(string)** - The package name for your Android standalone app. You make it up, but it needs to be unique on the Play Store. See [this StackOverflow question](http://stackoverflow.com/questions/6273892/android-package-name-convention).<br/>Reverse DNS notation unique name for your app. Valid Android Application ID. For example, com.example.app, where com.example is our domain and app is our app. The name may only contain lowercase and uppercase letters (a-z, A-Z), numbers (0-9) and underscores (_), separated by periods (.). Each component of the name should start with a lowercase letter.<br/>Bare Workflow |
| [versionCode](https://docs.expo.dev/versions/v42.0.0/config/app/#versioncode) | **(integer)** - Version number required by Google Play. Increment by one for each release. Must be a positive integer. [Learn more](https://developer.android.com/studio/publish/versioning.html)<br/>Bare Workflow |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-6) | **(string)** - The background color for your Android app, behind any of your React views. Overrides the top-level backgroundColor key if it is present.<br/>6 character long hex color string, for example, '#000000'<br/>Bare Workflow |
| [userInterfaceStyle](https://docs.expo.dev/versions/v42.0.0/config/app/#userinterfacestyle-2) | **(enum)** - Configuration to force the app to always use the light or dark user-interface appearance, such as "dark mode", or make it automatically adapt to the system preferences. If not provided, defaults to light. |
| [useNextNotificationsApi](https://docs.expo.dev/versions/v42.0.0/config/app/#usenextnotificationsapi) | **(boolean)** - @deprecated A Boolean value that indicates whether the app should use the new notifications API. |
| [icon](https://docs.expo.dev/versions/v42.0.0/config/app/#icon-3) | **(string)** - Local path or remote URL to an image to use for your app's icon on Android. If specified, this overrides the top-level icon key. We recommend that you use a 1024x1024 png file (transparency is recommended for the Google Play Store). This icon will appear on the home screen and within the Expo app. |
| [adaptiveIcon](https://docs.expo.dev/versions/v42.0.0/config/app/#adaptiveicon) | **(object)** - Settings for an Adaptive Launcher Icon on Android. [Learn more](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive) |
| [foregroundImage](https://docs.expo.dev/versions/v42.0.0/config/app/#foregroundimage) | **(string)** - Local path or remote URL to an image to use for your app's icon on Android. If specified, this overrides the top-level icon and the android.icon keys. Should follow the [specified guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive). This icon will appear on the home screen. |
| [backgroundImage](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundimage) | **(string)** - Local path or remote URL to a background image for your app's Adaptive Icon on Android. If specified, this overrides the backgroundColor key. Must have the same dimensions as foregroundImage, and has no effect if foregroundImage` is not specified. Should follow the [specified guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive). |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-7) | **(string)** - Color to use as the background for your app's Adaptive Icon on Android. Defaults to white, #FFFFFF. Has no effect if foregroundImage is not specified.<br/>6 character long hex color string, for example, '#000000' |
| [playStoreUrl](https://docs.expo.dev/versions/v42.0.0/config/app/#playstoreurl) | **(string)** - URL to your app on the Google Play Store, if you have deployed it there. This is used to link to your store page from your Expo project page if your app is public. |
| [permissions](https://docs.expo.dev/versions/v42.0.0/config/app/#permissions) | **(array)** - List of permissions used by the standalone app. <br/> To use ONLY the following minimum necessary permissions and none of the extras supported by Expo in a default managed app, set permissions to []. The minimum necessary permissions do not require a Privacy Policy when uploading to Google Play Store and are: • receive data from Internet • view network connections • full network access • change your audio settings • prevent device from sleeping <br/> To use ALL permissions supported by Expo by default, do not specify the permissions key. <br/> To use the minimum necessary permissions ALONG with certain additional permissions, specify those extras in permissions, e.g.<br/>[ "CAMERA", "ACCESS_FINE_LOCATION" ].<br/> You can specify the following permissions depending on what you need:<br/>+ ACCESS_COARSE_LOCATION<br/>+ ACCESS_FINE_LOCATION<br/>+ ACCESS_BACKGROUND_LOCATION<br/>+ CAMERA<br/>+ RECORD_AUDIO<br/>+ READ_CONTACTS<br/>+ WRITE_CONTACTS<br/>+ READ_CALENDAR<br/>+ WRITE_CALENDAR<br/>+ READ_EXTERNAL_STORAGE<br/>+ WRITE_EXTERNAL_STORAGE<br/>+ USE_FINGERPRINT<br/>+ USE_BIOMETRIC<br/>+ WRITE_SETTINGS<br/>+ VIBRATE<br/>+ READ_PHONE_STATE<br/>+ com.anddoes.launcher.permission.UPDATE_COUNT<br/>+ com.android.launcher.permission.INSTALL_SHORTCUT<br/>+ com.google.android.c2dm.permission.RECEIVE<br/>+ com.google.android.gms.permission.ACTIVITY_RECOGNITION<br/>+ com.google.android.providers.gsf.permission.READ_GSERVICES<br/>+ com.htc.launcher.permission.READ_SETTINGS<br/>+ com.htc.launcher.permission.UPDATE_SHORTCUT<br/>+ com.majeur.launcher.permission.UPDATE_BADGE<br/>+ com.sec.android.provider.badge.permission.READ<br/>+ com.sec.android.provider.badge.permission.WRITE<br/>+ com.sonyericsson.home.permission.BROADCAST_BADGEBare Workflow |
| [googleServicesFile](https://docs.expo.dev/versions/v42.0.0/config/app/#googleservicesfile-1) | **(string)** - [Firebase Configuration File](https://support.google.com/firebase/answer/7015592) Location of the GoogleService-Info.plist file for configuring Firebase. Including this key automatically enables FCM in your standalone app.<br/>Bare Workflow |
| [config](https://docs.expo.dev/versions/v42.0.0/config/app/#config-1) | **(object)** - Note: This property key is not included in the production manifest and will evaluate to undefined. It is used internally only in the build process, because it contains API keys that some may want to keep private. |
| [branch](https://docs.expo.dev/versions/v42.0.0/config/app/#branch-1) | **(object)** - [Branch](https://branch.io/) key to hook up Branch linking services. |
| [apiKey](https://docs.expo.dev/versions/v42.0.0/config/app/#apikey-1) | **(string)** - Your Branch API key |
| [googleMaps](https://docs.expo.dev/versions/v42.0.0/config/app/#googlemaps) | **(object)** - [Google Maps Android SDK](https://developers.google.com/maps/documentation/android-api/signup) configuration for your standalone app. |
| [apiKey](https://docs.expo.dev/versions/v42.0.0/config/app/#apikey-2) | **(string)** - Your Google Maps Android SDK API key |
| [googleMobileAdsAppId](https://docs.expo.dev/versions/v42.0.0/config/app/#googlemobileadsappid-1) | **(string)** - [Google Mobile Ads App ID](https://support.google.com/admob/answer/6232340) Google AdMob App ID.  |
| [googleMobileAdsAutoInit](https://docs.expo.dev/versions/v42.0.0/config/app/#googlemobileadsautoinit-1) | **(boolean)** - A boolean indicating whether to initialize Google App Measurement and begin sending user-level event data to Google immediately when the app starts. The default in Expo (Client and in standalone apps) is false. [Sets the opposite of the given value to the following key in Info.plist](https://developers.google.com/admob/ios/eu-consent#delay_app_measurement_optional) |
| [splash](https://docs.expo.dev/versions/v42.0.0/config/app/#splash-2) | **(object)** - Configuration for loading and splash screen for managed and standalone Android apps. |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-8) | **(string)** - Color to fill the loading screen background<br/>6 character long hex color string, for example, '#000000' |
| [resizeMode](https://docs.expo.dev/versions/v42.0.0/config/app/#resizemode-2) | **(enum)** - Determines how the image will be displayed in the splash loading screen. Must be one of cover, contain or native, defaults to contain. |
| [image](https://docs.expo.dev/versions/v42.0.0/config/app/#image-2) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png. |
| [mdpi](https://docs.expo.dev/versions/v42.0.0/config/app/#mdpi) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)<br/>Natural sized image (baseline) |
| [hdpi](https://docs.expo.dev/versions/v42.0.0/config/app/#hdpi) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)<br/>Scale 1.5x |
| [xhdpi](https://docs.expo.dev/versions/v42.0.0/config/app/#xhdpi) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)<br/>Scale 2x |
| [xxhdpi](https://docs.expo.dev/versions/v42.0.0/config/app/#xxhdpi) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)<br/>Scale 3x |
| [xxxhdpi](https://docs.expo.dev/versions/v42.0.0/config/app/#xxxhdpi) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)<br/>Scale 4x |
| [intentFilters](https://docs.expo.dev/versions/v42.0.0/config/app/#intentfilters) | **(array)** - Configuration for setting an array of custom intent filters in Android manifest. [Learn more](https://developer.android.com/guide/components/intents-filters)<br/>Bare Workflow<br/> |
| [autoVerify](https://docs.expo.dev/versions/v42.0.0/config/app/#autoverify) | **(boolean)** - You may also use an intent filter to set your app as the default handler for links (without showing the user a dialog with options). To do so use true and then configure your server to serve a JSON file verifying that you own the domain. [Learn more](https://docs.expo.dev/versions/v42.0.0/config/app/developer.android.com/training/app-links/) |
| [action](https://docs.expo.dev/versions/v42.0.0/config/app/#action) | **(string)** |
| [data](https://docs.expo.dev/versions/v42.0.0/config/app/#data) | **(undefined)** |
| [category](https://docs.expo.dev/versions/v42.0.0/config/app/#category) | **(undefined)** |
| [allowBackup](https://docs.expo.dev/versions/v42.0.0/config/app/#allowbackup) | **(boolean)** - Allows your user's app data to be automatically backed up to their Google Drive. If this is set to false, no backup or restore of the application will ever be performed (this is useful if your app deals with sensitive information). Defaults to the Android default, which is true. |
| [softwareKeyboardLayoutMode](https://docs.expo.dev/versions/v42.0.0/config/app/#softwarekeyboardlayoutmode) | **(enum)** - Determines how the software keyboard will impact the layout of your application. This maps to the android:windowSoftInputMode property. Defaults to resize. Valid values: resize, pan. |
| [jsEngine](https://docs.expo.dev/versions/v42.0.0/config/app/#jsengine) | **(enum)** - Specifies the JavaScript engine. Supported only on EAS Build. Defaults to jsc. Valid values: hermes, jsc.<br/>Bare Workflow |
| [web](https://docs.expo.dev/versions/v42.0.0/config/app/#web) | **(object)** - Configuration that is specific to the web platform. |
| [favicon](https://docs.expo.dev/versions/v42.0.0/config/app/#favicon) | **(string)** - Relative path of an image to use for your app's favicon. |
| [name](https://docs.expo.dev/versions/v42.0.0/config/app/#name-1) | **(string)** - Defines the title of the document, defaults to the outer level name |
| [shortName](https://docs.expo.dev/versions/v42.0.0/config/app/#shortname) | **(string)** - A short version of the app's name, 12 characters or fewer. Used in app launcher and new tab pages. Maps to short_name in the PWA manifest.json. Defaults to the name property.<br/>Maximum 12 characters long |
| [lang](https://docs.expo.dev/versions/v42.0.0/config/app/#lang) | **(string)** - Specifies the primary language for the values in the name and short_name members. This value is a string containing a single language tag. |
| [scope](https://docs.expo.dev/versions/v42.0.0/config/app/#scope) | **(string)** - Defines the navigation scope of this website's context. This restricts what web pages can be viewed while the manifest is applied. If the user navigates outside the scope, it returns to a normal web page inside a browser tab/window. If the scope is a relative URL, the base URL will be the URL of the manifest. |
| [themeColor](https://docs.expo.dev/versions/v42.0.0/config/app/#themecolor) | **(string)** - Defines the color of the Android tool bar, and may be reflected in the app's preview in task switchers.<br/>6 character long hex color string, for example, '#000000' |
| [description](https://docs.expo.dev/versions/v42.0.0/config/app/#description-1) | **(string)** - Provides a general description of what the pinned website does. |
| [dir](https://docs.expo.dev/versions/v42.0.0/config/app/#dir) | **(enum)** - Specifies the primary text direction for the name, short_name, and description members. Together with the lang member, it helps the correct display of right-to-left languages. |
| [display](https://docs.expo.dev/versions/v42.0.0/config/app/#display) | **(enum)** - Defines the developers’ preferred display mode for the website. |
| [startUrl](https://docs.expo.dev/versions/v42.0.0/config/app/#starturl) | **(string)** - The URL that loads when a user launches the application (e.g., when added to home screen), typically the index. Note: This has to be a relative URL, relative to the manifest URL. |
| [orientation](https://docs.expo.dev/versions/v42.0.0/config/app/#orientation-1) | **(enum)** - Defines the default orientation for all the website's top level browsing contexts. |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-9) | **(string)** - Defines the expected “background color” for the website. This value repeats what is already available in the site’s CSS, but can be used by browsers to draw the background color of a shortcut when the manifest is available before the stylesheet has loaded. This creates a smooth transition between launching the web application and loading the site's content.<br/>6 character long hex color string, for example, '#000000' |
| [barStyle](https://docs.expo.dev/versions/v42.0.0/config/app/#barstyle-2) | **(enum)** - If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar. |
| [preferRelatedApplications](https://docs.expo.dev/versions/v42.0.0/config/app/#preferrelatedapplications) | **(boolean)** - Hints for the user agent to indicate to the user that the specified native applications (defined in expo.ios and expo.android) are recommended over the website. |
| [dangerous](https://docs.expo.dev/versions/v42.0.0/config/app/#dangerous) | **(object)** - Experimental features. These will break without deprecation notice. |
| [splash](https://docs.expo.dev/versions/v42.0.0/config/app/#splash-3) | **(object)** - Configuration for PWA splash screens.<br/>Bare Workflow |
| [backgroundColor](https://docs.expo.dev/versions/v42.0.0/config/app/#backgroundcolor-10) | **(string)** - Color to fill the loading screen background<br/>6 character long hex color string, for example, '#000000' |
| [resizeMode](https://docs.expo.dev/versions/v42.0.0/config/app/#resizemode-3) | **(enum)** - Determines how the image will be displayed in the splash loading screen. Must be one of cover or contain, defaults to contain. |
| [image](https://docs.expo.dev/versions/v42.0.0/config/app/#image-3) | **(string)** - Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png. |
| [config](https://docs.expo.dev/versions/v42.0.0/config/app/#config-2) | **(object)** - Firebase web configuration. Used by the expo-firebase packages on both web and native. [Learn more](https://firebase.google.com/docs/reference/js/firebase.html#initializeapp) |
| [firebase](https://docs.expo.dev/versions/v42.0.0/config/app/#firebase) | **(object)** |
| [apiKey](https://docs.expo.dev/versions/v42.0.0/config/app/#apikey-3) | **(string)** |
| [authDomain](https://docs.expo.dev/versions/v42.0.0/config/app/#authdomain) | **(string)** |
| [databaseURL](https://docs.expo.dev/versions/v42.0.0/config/app/#databaseurl) | **(string)** |
| [projectId](https://docs.expo.dev/versions/v42.0.0/config/app/#projectid) | **(string)** |
| [storageBucket](https://docs.expo.dev/versions/v42.0.0/config/app/#storagebucket) | **(string)** |
| [messagingSenderId](https://docs.expo.dev/versions/v42.0.0/config/app/#messagingsenderid) | **(string)** |
| [appId](https://docs.expo.dev/versions/v42.0.0/config/app/#appid) | **(string)** |
| [measurementId](https://docs.expo.dev/versions/v42.0.0/config/app/#measurementid) | **(string)** |
| [hooks](https://docs.expo.dev/versions/v42.0.0/config/app/#hooks) | **(object)** - Configuration for scripts to run to hook into the publish process |
| [postPublish](https://docs.expo.dev/versions/v42.0.0/config/app/#postpublish) | **(array)** |
| [file](https://docs.expo.dev/versions/v42.0.0/config/app/#file) | **(string)** |
| [config](https://docs.expo.dev/versions/v42.0.0/config/app/#config-3) | **(object)** |
| [postExport](https://docs.expo.dev/versions/v42.0.0/config/app/#postexport) | **(array)** |
| [file](https://docs.expo.dev/versions/v42.0.0/config/app/#file-1) | **(string)** |
| [config](https://docs.expo.dev/versions/v42.0.0/config/app/#config-4) | **(object)** |
| [experiments](https://docs.expo.dev/versions/v42.0.0/config/app/#experiments) | **(object)** - Enable experimental features that may be unstable, unsupported, or removed without deprecation notices. |
| [turboModules](https://docs.expo.dev/versions/v42.0.0/config/app/#turbomodules) | **(boolean)** - Enables Turbo Modules, which are a type of native modules that use a different way of communicating between JS and platform code. When installing a Turbo Module you will need to enable this experimental option (the library still needs to be a part of Expo SDK already, like react-native-reanimated v2). Turbo Modules do not support remote debugging and enabling this option will disable remote debugging. |
| [_internal](https://docs.expo.dev/versions/v42.0.0/config/app/#_internal) | **(object)** - Internal properties for developer tools |
| [pluginHistory](https://docs.expo.dev/versions/v42.0.0/config/app/#pluginhistory) | **(object)** - List of plugins already run on the config |


```



> 更新: 2021-08-03 18:33:24  
> 原文: <https://www.yuque.com/u3641/dxlfpu/hve355>