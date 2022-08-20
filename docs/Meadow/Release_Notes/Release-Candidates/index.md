---
layout: Meadow
title: Meadow v1.0 Release-Candidates
subtitle: Release Notes
---

# RC-1

We're so excited to present to you the first Meadow v1.0 Release-Candidate!!! This is a MASSIVE release with a pile of fixes and way more features than we expected.

**Meadow.Cloud**
* **OtA Updates** - Meadow.OS and Meadow applications can now be updated Over-the-Air via Meadow.Cloud!
* **Push Messaging** - Meadow.OS now supports push-messaging from Meadow.Cloud as well as MQTT as a first class feature.

**Meadow.OS + Meadow.Core**
* **Power & Sleep APIs** - Meadow.OS has a new set of APIs that expose the ability ability to put the device to sleep and then wake up on schedule.
* **New App Lifecycle** - We've greatly simplified the boilerplate code needed to create a Meadow application, as well as provided an easy way to integrate with the new Power, Sleep, and OS/App update lifecycle.
* **Faster WiFi Connection** - We have made changes to the event model on the ESP32 resulting in a 90% decrease in WiFi connection times, reducing WiFi connection time to 3-5 second on average.
* **Faster Meadow.OS Startup** - We removed an errant 10 second wait time on startup.
* **Just-in-Time (JIT) Compilation** - Meadow applications can now optionally implement JIT compilation at startup, providing faster execution and performance.
* **Network Improvements** - We've spent a lot of cycles on advanced web socket features that weren't implemented yet that unlock a number of important service connectivity use cases.
* **Configuration Files** - [app config working, network config added back in and supports per-NIC config]
* **Improved Meadow.OS Stability** - Some deep assembly-level instruction calls have been fixed up, providing stability around long-running processes, advanced web-sockets, and more.
* **Core-Compute Module Ethernet Support** - [Ethernet now works.]

**Tooling**
* **App Linking** - Meadow apps are now linked at deploy time, which removes unused code. Deployment size with linking is now typically reduced by 2/3rds. The result is a massive reduction of space on flash, RAM usage, faster startup, and faster deployment.
* **Deployment/Debugging Stability** - We've fixed lots of paper cuts in the IDE extensions and added a number of new features that massively improve the day to day development experience with Meadow.

## Updating to RC-1

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (0.19.3) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

**NOTE:** - After flashing Meadow.OS, if the runtime upload does not complete with an error of `cannot connect to Meadow`, push the `RST` button on your Meadow device and then execute:

```bash
meadow flash os -d
```

This skips the initial (already completed) Meadow.OS upload and retries the runtime upload. We're not sure what's causing this issue, but it's under investigation.

If you experience any stability or deployment issues you may need to erase the flash on Meadow and then re-install the latest OS:

```bash
meadow flash erase
```

## Release Details

### Meadow.Cloud

With Meadow.OS v1.0 RC-1, we've also launched the first beta of Meadow.Cloud, including two core features:

* **MQTT** - [difference between this and push-messaging]
* **Push-Messaging** - Each Meadow device is now individually addressable and you can push messages containing arbitrary data to them.
* **Over-the-Air (OtA) Updates** - You can now push App and OS updates remotely to devices. 

#### Push-Messaging

#### Over-the-Air Updates

[available via Meadow.CLI right now. Web UI in the future.]

## Meadow.OS

### Faster OS and App Startup

There was a *cough* leftover 10 second startup delay from debugging Meadow.OS startup and initialization code that we removed. Additionally, linking (see below) also greatly improved app startup speed. The net effect of these improvements has seen a dramatic increase in OS and App startup speed.

### Meadow.OS and .NET Stability [!!Alexis - need your help here!!]

We've fixed a very low-level *internal call* (iCall) method that had a bad value, causing edge-case .NET runtime stability issues. This saw random stability improvements across the board.

We also did a lot of work around the .NET Runtime -> Meadow.OS glue that fixed up a number of stability issues.

### Just-in-Time (JiT) Compilation

Meadow.OS now has JiT compilation support, which compiles code on startup to low-level assembly language, rather than executing .NET Intermediate-Language (IL) in a virtual machine as interpreted instructions. This provides around a maginitude of performance improvement across the board, with some code instructions seeing even more improvements. Check out the [Meadow Benchmarks Sample](https://github.com/WildernessLabs/Meadow_Performance_Benchmarks) for specific performance improvement benchmarks.

#### Enabling JiT

While we've thoroughly tested JiT with all samples, there may still be edge cases where unexpected behavior is seen, so JiT is off by default. A later release will make it on by default.

To [enable JIT in your Meadow application](/Meadow/Meadow.OS/Configuration/OS_Device_Configuration)

* Add a Meadow config file - add a text file named `meadow.config.yaml`
* Ensure file is set to a Build configuration of *none* and is always copied to the Output Directory
* Enable JIT in the `meadow.config.yaml` file - add the following YAML

    ```yaml
    MonoControl:
        Options: --jit
    ```

* Deploy your app!

### Networking Stack

[faster WiFi connnection]

#### Stabilization

#### Core-Compute Ethernet Support

### Configuration Files

[]

## Meadow.Core

[dispose pattern]

### New Meadow App Lifecycle

Meadow applications now have a prescriptive lifecycle that greatly simplifies the amount of boilerplate code necessary to create an app, including removal of the `static void main()` launch method. There are also a number of new lifecycle events overridable in the `App` class that provide an easy way to hook into the new lifecycle features such as the **Power & Sleep APIs**, as well as **OtA updates**.

If you're moving from a Meadow.OS Beta app to a Meadow.OS Release Candidate app, you'll need to make a few updates.

For more information check out the following docs:

* **[Lifecycle Update](Lifecycle_Update)** - Instructions for updating apps from previous betas to the new app pattern.
* **[Meadow Apps](/Meadow/Meadow_Basics/Apps/)** - Provides an overview of the new app model and lifeycle events.

### Power & Sleep APIs

[content TBD]

## Meadow.Foundation

[new stuff, improvements]

### `CommonType` Moved [!!content needs help!!]

The `CommonType` enum has moved from the `Leds` class.

If you've previously used `CommonType` with a fully qualified name - i.e. `Meadow.Peripherals.Leds.CommonType.CommonAnode`, update it to 
`CommonType.CommonAnode` and add `using Meadow.Foundation.Leds`.

## Tooling (Meadow.CLI, IDE Extensions, and Templates)

[new stuff, improvements]

### Linking Enabled by Default

With RC-1, app code is linked by default. Linking (AKA "Tree-Shaking") walks the code tree and removes unused functions. This drastically reduces the amount of deployed code (`Hello, World` goes from `~26MB` to `5MB`) and has a number of massive benefits, including:

* **Faster Deployments** - App deployment is much faster, due to less code being uploaded.
* **More Available Storage** - Less uploaded code means more room on non-volatile storage (flash).
* **Faster App Startup and More Available Memory** - Less code means less code loaded into memory, reducing app startup and more avaialble memory for allocations.

### Project Template Changes

With the greatly simplified boilerplate code needed to create a Meadow application, the project templates have been updated with the new lifecycle methods.

## RC-1 Bug Fixes

* [Interrupts : long delay before first signal #74](https://github.com/WildernessLabs/Meadow_Issues/issues/74) - JiT has all but eliminated this. There's still a delay on first interrupt, but it's much less noticeable now. With JIT enabled, it's between 10 and 20ms..
* [Performance issue when toggling pin #91](https://github.com/WildernessLabs/Meadow_Issues/issues/91) - JIT (the current iteration) has brought that down to roughly 0.11ms per pulse (an order of magnitude improvement).
* [Better app exit messaging #131](https://github.com/WildernessLabs/Meadow_Issues/issues/131) - Fixed as part of the new App Lifecycle.
* [SerialPort.Read method throw an exception when count is greater than available chars in circular buffer #166](https://github.com/WildernessLabs/Meadow_Issues/issues/166) - Fixed.
* [PushButton with port ctor fails #193](https://github.com/WildernessLabs/Meadow_Issues/issues/193) - Fixed.
* [Interrupt/PushButton oddities on v2 #195](https://github.com/WildernessLabs/Meadow_Issues/issues/195) - Fixed.
* [WiFi Scan() should be async #199](https://github.com/WildernessLabs/Meadow_Issues/issues/199) - Network events and APIs have undergone a major overhaul, making things `async` by default.
* [Device crash after a while with HTTP requests #211](https://github.com/WildernessLabs/Meadow_Issues/issues/211) - Major network stack work in this release exercised and fixed a lot of underlying web socket corner cases.
* [extension of the Meadow.Utilities.BitHelpers #214](https://github.com/WildernessLabs/Meadow_Issues/issues/214) - 16-bit helpers have been added per customer request.
* [PushButton LongPress not working properly #217](https://github.com/WildernessLabs/Meadow_Issues/issues/217) - Default time duration for long-press added.

## Known Issues

### Meadow.OS Deploy, App Deploy/Debug Workflow

This release has been a long journey that added our final v1.0 features, and did final polishes to our APIs, however, the OS Deploy, App Deploy/Debug cycles still have some hiccups that we'll spend time stabilizing for RC-2/v1.0.