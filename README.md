# Expo Linking.getInitialURL() returns null inconsistently

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where it inconsistently returns `null`, even when a deep link is provided on app launch.  This is particularly noticeable when launching the app from a cold start. The solution provides a workaround to reliably capture the initial URL.

## Bug Reproduction

1. Clone this repository.
2. Run `expo start`.
3. Create a deep link (e.g., `myapp://some-path`).
4. Open the deep link.
5. Observe that `Linking.getInitialURL()` might return `null`, preventing processing of the deep link.

## Solution

The solution uses `Linking.addEventListener` to listen for URL changes and handles the initial URL asynchronously, enhancing reliability.