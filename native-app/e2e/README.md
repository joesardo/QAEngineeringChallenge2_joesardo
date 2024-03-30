# Machine Health Integration Tests

Welcome to the Detox integration testing guide, which will walk you through how to build and run tests on your local machine!

## Prerequisites

1. Install the Detox CLI locally:

   ```bash
   yarn global add detox-cli
   ```

2. (For iOS testing) Install applesimutils: [Full Guide](https://wix.github.io/Detox/docs/introduction/environment-setup)

   ```bash
   brew tap wix/brew
   brew install applesimutils
   ```

3. Confirm that you have a simulator device installed on your machine (either through XCode or Android Studio), and update the devices object in .detoxrc.js accordingly. For my own testing, I was using the iPhone 14 Pro Max, which is currently what is defined for the ios.simulator. Feel free to use a different device, generally most work about the same!

4. Install pods:

  ```bash
  cd ios
  pod install
  ```

## Creating a Detox build:

To build on iOS, run the following command:

  ```bash
  detox build --configuration ios.sim.debug
  ```

To build on Android, run the following command:

  ```bash
  detox build --configuration android.emu.debug
  ```

## Running tests:

Use the following commands to run tests locally, once your build has successfully finished:

  ```bash
  detox test --configuration ios.sim.debug
  ```

  ```bash
  detox test --configuration android.emu.debug
  ```

Or, you can specify running a test / suite individually by appending the file path onto the command:

  ```bash
  detox test --configuration ios.sim.debug e2e/__tests__/Smoke.test.js
  ```