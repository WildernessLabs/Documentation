---
layout: Meadow
title: Meadow Beta 6
subtitle: Release Notes
---

# b6.0

* **Debugging** - What what?! Yup; in-IDE debugging in Visual Studio for Windows and Mac, AND VS Code.


## Updating

This release requires an OS update and nuget package updates. We released updates to the CLI out-of-band, make sure you have the latest version installed by running: 

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

## Meadow.OS

### Debugging

Long awaited, in-IDE, on-device debugging is here! Now you can debug Meadow apps just like any other .NET app, with full support in Visual Studio for Windows, Mac, and even VS Code! You can even debug from the command line using the Mono Soft-Debugger (SDB) via Meadow.CLI. 

### Network Time Protocol (NTP)

The OS now uses NTP to maintain correct world time! It can be configured to poll multiple NTP servers.

### .NET Standard 2.1 Nuget fixes (System.Text.Json)
A new deployment method for the .NET core libraries removes the build issues brought on by using a Nuget to distribute framework assemblies such as mscorlib.dll and netstandard.dll. In order to benefit from these improvements you must ensure that you have:
  * Update Meadow CLI to version 0.6
  * Remove all references to the `WildernessLabs.Meadow.Assemblies` nuget (primarily by updating to the latest `Meadow.Core`)

## Meadow.Core

### F7 Device Coprocessor Lifecycle Cleanup

The `Coprocessor` on F7 devices are automatically initialized during device startup, so when using the `WiFiAdapter` or `BluetoothAdpater`, you no longer need to initialize the coprocessor first.

* **Breaking Change** - The `InitCoprocessor()`, `InitWiFiAdapater()`, and `InitBluetoothAdapter()` methods are no longer necessary, and are either inaccessible or have been removed entirely.

### Added Full-Duplex Support to `IByteCommunications.Exchange()` and `SpiPeripheral`

The `IByteCommunications.Exchange()` method now has an optional parameter of `DuplexType`:

```csharp
void Exchange(Span<byte> writeBuffer, Span<byte> readBuffer, DuplexType duplex = DuplexType.Half);
```

This enables protocols that support full-duplex communications (data received at the same time as it's sent) to be supported at the peripheral level, rather than having to use the bus class directly.

Previously, if you wanted to do full-duplex communications, you needed to use the `SpiBus.Exchange()` method, which meant passing the chip select pin. This streamlines that workflow.
