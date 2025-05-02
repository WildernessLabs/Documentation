---
title: Class AnalogTemperature.Calibration
sidebar_label: AnalogTemperature.Calibration
description: Calibration class for AnalogTemperature.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature/AnalogTemperature.Calibration
---
# Class AnalogTemperature.Calibration
Calibration class for AnalogTemperature.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.Configuration.cs#L11)
```csharp title="Declaration"
public class AnalogTemperature.Calibration
```
## Properties
### SampleReading
Sample reading as specified in the product data sheet.
Measured in degrees Centigrade.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.Configuration.cs#L17)
```csharp title="Declaration"
public double SampleReading { get; protected set; }
```
### MillivoltsAtSampleReading
Millivolt reading the sensor will generate when the sensor
is at the SampleReading temperature.  This value can be
obtained from the data sheet.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.Configuration.cs#L24)
```csharp title="Declaration"
public double MillivoltsAtSampleReading { get; protected set; }
```
### MillivoltsPerDegreeCentigrade
Linear change in the sensor output (in millivolts) per 1 degree C
change in temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.Configuration.cs#L30)
```csharp title="Declaration"
public double MillivoltsPerDegreeCentigrade { get; protected set; }
```
