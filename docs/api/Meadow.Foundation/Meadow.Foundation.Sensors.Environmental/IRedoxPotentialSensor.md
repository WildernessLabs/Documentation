---
title: Interface IRedoxPotentialSensor
sidebar_label: IRedoxPotentialSensor
description: Represents a sensor for measuring oxidation/reduction potential
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/IRedoxPotentialSensor
---
# Interface IRedoxPotentialSensor
Represents a sensor for measuring oxidation/reduction potential

###### **Assembly**: Y4000.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/IRedoxPotentialSensor.cs#L9)
```csharp title="Declaration"
public interface IRedoxPotentialSensor : ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
```
## Properties
### Potential
Last value read from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/IRedoxPotentialSensor.cs#L14)
```csharp title="Declaration"
Voltage? Potential { get; }
```
