---
title: Class AnalogWaterLevel.Calibration
sidebar_label: AnalogWaterLevel.Calibration
description: Calibration class for AnalogWaterLevel
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/AnalogWaterLevel.Calibration
---
# Class AnalogWaterLevel.Calibration
Calibration class for AnalogWaterLevel

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.Calibration.cs#L11)
```csharp title="Declaration"
public class AnalogWaterLevel.Calibration
```
## Properties
### VoltsAtZero
Voltage when no water detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.Calibration.cs#L16)
```csharp title="Declaration"
public Voltage VoltsAtZero { get; protected set; }
```
### VoltsPerCentimeter
Linear change in the sensor output
change in temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.Calibration.cs#L22)
```csharp title="Declaration"
public Voltage VoltsPerCentimeter { get; protected set; }
```
