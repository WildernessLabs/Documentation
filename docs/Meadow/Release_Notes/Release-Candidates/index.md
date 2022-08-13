---
layout: Meadow
title: Meadow v1.0 Release-Candidates
subtitle: Release Notes
---

# RC-1

We're so excited to present to you the first Meadow v1.0 Release-Candidate!!! This is a MASSIVE release with a pile of fixes and way more features than we expected.

* **OtA Updates** - Meadow.OS and Meadow applications can now be updated Over-the-Air via Meadow.Cloud!
* **Push Messaging** - Meadow.OS now supports push-messaging from Meadow.Cloud as well as MQTT as a first class feature.
* **Just-in-Time (JIT) Compilation** - Meadow applications can now optionally implement JIT compilation at startup, providing faster execution and performance.
* **Power & Sleep APIs** - Meadow.OS has a new set of APIs that expose the ability ability to put the device to sleep and then wake up on schedule.
* **New App Lifecycle** - We've greatly simplified the boilerplate code needed to create a Meadow application, as well as provided an easy way to integrate with the new Power, Sleep, and OS/App update lifecycle.
* **App Linking** - Meadow apps are now linked at deploy time, which removes unused code. Deployment size with linking is now typically reduced by 2/3rds. The result is a massive reduction of space on flash, RAM usage, faster startup, and faster deployment.
* **Faster WiFi Connection** - We have made changes to the event model on the ESP32 resulting in a 90% decrease in WiFi connection times, reducing WiFi connection time to 3-5 second on average.
* **Faster Meadow.OS Startup** - We removed an errant 10 second wait time on startup.
* **Deployment/Debugging Stability** - We've fixed lots of paper cuts in the IDE extensions and added a number of new features that massively improve the day to day development experience with Meadow.
* **Network Improvements** - We've spent a lot of cycles on advanced web socket features that weren't implemented yet that unlock a number of important service connectivity use cases.
* **Configuration Files** - [app config working, network config added back in and supports per-NIC config]
* **Improved Meadow.OS Stability** - Some deep assembly-level instruction calls have been fixed up, providing stability around long-running processes, advanced web-sockets, and more.
* **Core-Compute Module Ethernet Support** - [Ethernet now works.]

## Updating

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Meadow.CLI

Start by making sure you have the latest version of the CLI (0.19.3) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

If you experience any stability or deployment issues you may need to erase the flash on Meadow and then re-install the latest OS:

```bash
meadow flash erase
```

## Meadow.OS JIT

To [enable JIT in your Meadow application](/Meadow/Meadow.OS/Configuration/OS_Device_Configuration)

* Add a Meadow config file - add a text file named `meadow.config.yaml`
* Ensure file is set to a Build configuration of *none* and is always copied to the Output Directory
* Enable JIT in the `meadow.config.yaml` file - add the following YAML

    ```yaml
    MonoControl:
        Options: --jit
    ```

* Deploy your app!

[new stuff, improvements]

## Project template changes

With the greatly simplified boilerplate code needed to create a Meadow application, the project templates have been updated with the new lifecycle methods as well.

If you're moving from a Meadow.OS Beta app to a Meadow.OS Release Candidate app, you'll need to make a few updates. For details on the required project changes, check out the [Lifecycle Update guide](/Meadow/Meadow_Basics/Apps/Lifecycle_Update/).

We've also moved the `CommonType` enum out from the `Leds` class.

If you've previously used `CommonType` with a fully qualified name - i.e. `Meadow.Peripherals.Leds.CommonType.CommonAnode`, update it to 
`CommonType.CommonAnode` and add `using Meadow.Foundation.Leds`.

## Meadow.Core

[new stuff, improvements]

## Meadow.Foundation

[new stuff, improvements]

## Tooling

[new stuff, improvements]

## Bug Fixes

* [[BUG NAME ##]](Link) - [outcome].

## Known Issues
