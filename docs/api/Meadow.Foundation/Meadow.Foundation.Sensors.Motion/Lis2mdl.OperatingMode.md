---
title: Enum Lis2mdl.OperatingMode
sidebar_label: Lis2mdl.OperatingMode
description: Represents the operating mode options for the LIS2MDL magnetometer.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Lis2mdl.OperatingMode
---
# Enum Lis2mdl.OperatingMode
Represents the operating mode options for the LIS2MDL magnetometer.

###### **Assembly**: Lis2Mdl.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2mdl/Driver/Lis2mdl.Enums.cs#L50)
```csharp title="Declaration"
public enum Lis2mdl.OperatingMode
```
## Fields
### ContinuousMode
Continuous mode: The sensor continuously measures and updates the output registers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2mdl/Driver/Lis2mdl.Enums.cs#L55)
```csharp title="Declaration"
ContinuousMode = 0
```
### SingleConversionMode
Single-conversion mode: The sensor performs one measurement and then enters a low-power state until another single-conversion command is received.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2mdl/Driver/Lis2mdl.Enums.cs#L59)
```csharp title="Declaration"
SingleConversionMode = 1
```
### PowerDownMode
Power-down mode: The sensor enters a low-power state and stops measuring.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2mdl/Driver/Lis2mdl.Enums.cs#L63)
```csharp title="Declaration"
PowerDownMode = 3
```
