---
layout: Meadow
sidebar_label: Meadow v3.*
title: Meadow v3.* Releases
subtitle: Release Notes
---

## Updating Instructions

* [Meadow.CLI](/Meadow/Meadow_Tools/Meadow_CLI/)
* [Meadow.OS](/Meadow/Getting_Started/Deploying_Meadow%2EOS/)

## v3.0.0.0 (Beta)
OS v. 3.0.0.0, ESP32 v. 2.5.0.0

This is a full-stack (Meadow.OS + managed stack) **beta** release that brings complete support for the latest .NET platform version (.NET 11 Preview and C# 15 Preview).
Note: You do not have update any of your source code unless you want to use the latest .NET and C# features. This release is not binary-compatible with apps built from Meadow.OS 2.5.21 and earlier. The source code of your app must be rebuilt and re-deployed for Meadow.OS 3.0 devices even if the project has not targeted .NET 11 yet. **Meadow.CLI version 3.0 or greater is required for deployment.** 

### Meadow.OS

* .NET runtime upgrade - .NET 11 and C# 15 features and enhancements are now fully supported by the Meadow
* Various minor fixes and improvements

### Meadow.Core

* Source code upgraded to latest .NET and C# with numerous improvements to performance without changing the API
* MQTTNet library has been upgraded to the latest version (5.2)

### Meadow.Foundation

* **Breaking change** - all projects migrated from .netstandard2.1 to net10.0
* Modernized buffer logic across drivers to take advantage of latest .NET speed improvements 
* New drivers! **AK9753**, **Wio-E5**, Waveshare **SX1303**, Sharp Memory Display
* Added an FTx EEPROM programmer helper app
* Multiple bug fixes across sensors, displays, MicroLayout etc.

### Meadow.Foundation
* Network connections may fail sometimes with the error EBADF