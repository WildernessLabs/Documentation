---
title: Class AnalogLightSensor.Calibration
sidebar_label: AnalogLightSensor.Calibration
description: Calibration class for AnalogLightSensor.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/AnalogLightSensor.Calibration
---
# Class AnalogLightSensor.Calibration
Calibration class for AnalogLightSensor.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.Calibration.cs#L11)
```csharp title="Declaration"
public class AnalogLightSensor.Calibration
```
## Properties
### VoltsAtZero
Voltage when no light is detected by sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.Calibration.cs#L16)
```csharp title="Declaration"
public Voltage VoltsAtZero { get; protected set; }
```
### VoltsPerLuminance
Linear change in the sensor output
change in temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.Calibration.cs#L22)
```csharp title="Declaration"
public Voltage VoltsPerLuminance { get; protected set; }
```
