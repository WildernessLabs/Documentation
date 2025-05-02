---
title: Interface IConcentrationInWaterSensor
sidebar_label: IConcentrationInWaterSensor
description: Sensor that returns a concentration in water unit
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/IConcentrationInWaterSensor
---
# Interface IConcentrationInWaterSensor
Sensor that returns a concentration in water unit

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IConcentrationInWaterSensor.cs#L8)
```csharp title="Declaration"
public interface IConcentrationInWaterSensor : ISamplingSensor<ConcentrationInWater>, ISensor<ConcentrationInWater>, ISensor, ISamplingSensor
```
## Properties
### Concentration
Last value read from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IConcentrationInWaterSensor.cs#L13)
```csharp title="Declaration"
ConcentrationInWater? Concentration { get; }
```
