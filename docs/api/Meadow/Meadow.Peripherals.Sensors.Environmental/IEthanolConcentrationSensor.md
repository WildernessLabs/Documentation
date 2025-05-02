---
title: Interface IEthanolConcentrationSensor
sidebar_label: IEthanolConcentrationSensor
description: Ethanol Concentration interface requirements.
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/IEthanolConcentrationSensor
---
# Interface IEthanolConcentrationSensor
Ethanol Concentration interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IEnthanolConcentrationSensor.cs#L8)
```csharp title="Declaration"
public interface IEthanolConcentrationSensor : ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor
```
## Properties
### EthanolConcentration
Last value read from the Ethanol Concentration sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IEnthanolConcentrationSensor.cs#L13)
```csharp title="Declaration"
Concentration? EthanolConcentration { get; }
```
