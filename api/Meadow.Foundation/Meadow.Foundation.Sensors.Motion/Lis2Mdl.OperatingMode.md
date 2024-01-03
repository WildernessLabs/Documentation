---
title: Enum Lis2Mdl.OperatingMode
sidebar_label: Lis2Mdl.OperatingMode
description: "Represents the operating mode options for the LIS2MDL magnetometer."
---
# Enum Lis2Mdl.OperatingMode
Represents the operating mode options for the LIS2MDL magnetometer.

###### **Assembly**: Lis2Mdl.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.Enums.cs#L50)
```csharp title="Declaration"
public enum Lis2Mdl.OperatingMode
```
## Fields
### ContinuousMode
Continuous mode: The sensor continuously measures and updates the output registers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.Enums.cs#L55)
```csharp title="Declaration"
ContinuousMode = 0
```
### SingleConversionMode
Single-conversion mode: The sensor performs one measurement and then enters a low-power state until another single-conversion command is received.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.Enums.cs#L59)
```csharp title="Declaration"
SingleConversionMode = 1
```
### PowerDownMode
Power-down mode: The sensor enters a low-power state and stops measuring.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.Enums.cs#L63)
```csharp title="Declaration"
PowerDownMode = 3
```
