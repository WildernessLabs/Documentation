---
title: Enum Lis3mdl.OperatingMode
sidebar_label: Lis3mdl.OperatingMode
description: "Represents the operating mode options for the Lis3mdl magnetometer."
---
# Enum Lis3mdl.OperatingMode
Represents the operating mode options for the Lis3mdl magnetometer.

###### **Assembly**: Lis3mdl.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3Mdl/Driver/Lis3Mdl.Enums.cs#L108)
```csharp title="Declaration"
public enum Lis3mdl.OperatingMode
```
## Fields
### ContinuousMode
Continuous mode: The sensor continuously measures and updates the output registers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3Mdl/Driver/Lis3Mdl.Enums.cs#L113)
```csharp title="Declaration"
ContinuousMode = 0
```
### SingleConversionMode
Single-conversion mode: The sensor performs one measurement and then enters a low-power state until another single-conversion command is received.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3Mdl/Driver/Lis3Mdl.Enums.cs#L117)
```csharp title="Declaration"
SingleConversionMode = 1
```
### PowerDownMode
Power-down mode: The sensor enters a low-power state and stops measuring.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3Mdl/Driver/Lis3Mdl.Enums.cs#L121)
```csharp title="Declaration"
PowerDownMode = 3
```
