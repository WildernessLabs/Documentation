---
title: Interface ICO2ConcentrationSensor
sidebar_label: ICO2ConcentrationSensor
description: CO2 Concentration interface requirements.
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/ICO2ConcentrationSensor
---
# Interface ICO2ConcentrationSensor
CO2 Concentration interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/ICO2ConcentrationSensor.cs#L8)
```csharp title="Declaration"
public interface ICO2ConcentrationSensor : ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor
```
## Properties
### CO2Concentration
Last value read from the CO2 Concentration sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/ICO2ConcentrationSensor.cs#L13)
```csharp title="Declaration"
Concentration? CO2Concentration { get; }
```
