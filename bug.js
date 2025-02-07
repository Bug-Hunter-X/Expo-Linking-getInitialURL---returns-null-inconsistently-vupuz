This bug occurs when using the Expo `Linking` API to handle deep links.  The `getInitialURL()` method sometimes returns `null` even when a deep link is opened, especially when the app is launched from a cold start or when there's a delay in the app's initialization. This makes it impossible to process the initial deep link properly.