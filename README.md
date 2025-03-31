This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# React Native Project Structure

This document outlines the recommended folder structure for a scalable and maintainable React Native application.

## Root Structure

/my-app
│
├── /android              # Native Android project
├── /ios                  # Native iOS project
├── /assets               # Static assets (images, fonts, videos, etc.)
├── /src                  # All application source code
│   ├── /api              # API services and HTTP clients
│   ├── /components       # Reusable UI components
│   ├── /constants        # Application-wide constant values
│   ├── /hooks            # Custom React hooks
│   ├── /navigation       # React Navigation configuration
│   ├── /screens          # Screen components mapped to routes
│   ├── /store            # Global state management (e.g., Redux, Zustand)
│   ├── /theme            # Application styling and theme configuration
│   ├── /types            # TypeScript types and interfaces
│   ├── /utils            # Utility and helper functions
│   ├── /vendor           # Manually integrated or custom-modified third-party code
│   └── App.tsx           # Main application entry point
│
├── .env                  # Environment variable definitions
├── app.json              # Application configuration (for Expo or RN CLI)
├── babel.config.js       # Babel configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration

## Folder Descriptions

### assets/
Contains static assets such as images, fonts, and videos.

### api/
Includes API clients, Axios configurations, and service functions that handle network requests.

### components/
Reusable UI components that are shared across multiple screens or modules. Examples include buttons, cards, loaders, etc.

### constants/
Defines constant values such as color palettes, font sizes, string enums, and other static values used throughout the application.

### hooks/
Contains custom React hooks that encapsulate reusable logic, such as useAuth or useDebounce.

### navigation/
Holds navigation configuration including stack, tab, or drawer navigators, as well as route definitions.

### screens/
Each file or folder represents a top-level screen that corresponds to a route in the navigation structure.

### store|context/
Implements global state management, such as Redux, Zustand, or Context API. This may include slices, atoms, actions, or middleware.

### theme/
Defines theming logic, including styles, spacing, color systems, typography, and dark/light mode configurations.

### types/
TypeScript type definitions and interfaces used across the application.

### utils/
General-purpose utility functions and helpers, such as formatting, validation, and calculations.


## incoming Folders

- i18n/: Localization and translation configuration
- services/: Business logic or service layers such as authentication or analytics
- mocks/: Mock data and fake APIs for development and testing
- __tests__/: Unit and integration tests for components, screens, and utilities

## Best Practices

- Organize code by feature or module for better maintainability in large-scale apps
- Keep components small, focused, and reusable
- Use clear naming conventions and consistent folder patterns
- Minimize logic in UI components by extracting into hooks or services

