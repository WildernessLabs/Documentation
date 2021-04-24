---
layout: Meadow
title: Meadow Beta 5
subtitle: Release Notes
---

# b5.0

Beta 5.0 is here and it's awesome. This is a huge release for Meadow with major new features and big changes, including:

 * **Bluetooth APIs** - [first cut]
 * **Ahead-of-Time Compilation** - 
 * **Configuration Files** - and file stuff.
 * **Unitization** - 
 * **`IIODevice` Rearchitecture** - 
 * **Meadow.Foundation** - stuff.
 * **VS Code Support** - 
 * **item** - stuff.
 * **item** - stuff.

## Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note, to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

## Meadow.OS

## Meadow.Core

## Meadow.Foundation

### Drivers

 - `IDCMotor` and `HBridgeMotor` - `Speed` has been deprecated. Please use the `Power` property.
 - `MPL115A2` - Finished [wasn't finished before]
 - `AnalogTemperatureSensor` - Now events both the new and the old value. Previously the old value was being thrown away.

## Bug Fixes

- [#(number) - (title)](link) - Description

