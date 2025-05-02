---
title: Class WaterSensor
sidebar_label: WaterSensor
description: Represents a water sensor that can detect the level of water.
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Environmental/WaterSensor
---
# Class WaterSensor
Represents a water sensor that can detect the level of water.

###### **Assembly**: WaterSensor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/WaterSensor/Driver/WaterSensor.cs#L10)
```csharp title="Declaration"
public class WaterSensor : AnalogWaterLevel, IObservable<IChangeResult<float>>, ISamplingSensor<float>, ISensor<float>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<System.Single>` -> `Meadow.Foundation.SamplingSensorBase<System.Single>` -> `Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel`

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Single>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`


## Implements

* `System.IObservable<Meadow.IChangeResult<System.Single>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
