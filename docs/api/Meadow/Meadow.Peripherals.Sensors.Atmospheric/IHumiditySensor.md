---
title: Interface IHumiditySensor
sidebar_label: IHumiditySensor
description: Humidity sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Atmospheric/IHumiditySensor
---
# Interface IHumiditySensor
Humidity sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/IHumiditySensor.cs#L8)
```csharp title="Declaration"
public interface IHumiditySensor : ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ISensor, ISamplingSensor
```
## Properties
### Humidity
Last value read from the humidity sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/IHumiditySensor.cs#L13)
```csharp title="Declaration"
RelativeHumidity? Humidity { get; }
```
