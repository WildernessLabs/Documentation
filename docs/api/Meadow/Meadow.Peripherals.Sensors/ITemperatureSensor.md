---
title: Interface ITemperatureSensor
sidebar_label: ITemperatureSensor
description: Temperature sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ITemperatureSensor
---
# Interface ITemperatureSensor
Temperature sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Temperature/ITemperatureSensor.cs#L8)
```csharp title="Declaration"
public interface ITemperatureSensor : ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor
```
## Properties
### Temperature
Last value read from the Temperature sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Temperature/ITemperatureSensor.cs#L13)
```csharp title="Declaration"
Temperature? Temperature { get; }
```
