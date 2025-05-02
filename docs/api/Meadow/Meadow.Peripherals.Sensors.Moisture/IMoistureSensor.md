---
title: Interface IMoistureSensor
sidebar_label: IMoistureSensor
description: Represents a moisture sensor that measures the moisture level.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Moisture/IMoistureSensor
---
# Interface IMoistureSensor
Represents a moisture sensor that measures the moisture level.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Moisture/IMoistureSensor.cs#L6)
```csharp title="Declaration"
public interface IMoistureSensor : ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor
```
## Properties
### Moisture
Gets the last value read from the moisture sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Moisture/IMoistureSensor.cs#L11)
```csharp title="Declaration"
double? Moisture { get; }
```
