---
title: Class LightSensor
sidebar_label: LightSensor
description: Represents a Light Sensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Light/LightSensor
---
# Class LightSensor
Represents a Light Sensor

###### **Assembly**: LightSensor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/LightSensor/Driver/LightSensor.cs#L11)
```csharp title="Declaration"
public class LightSensor : AnalogSamplingBase, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Units.Voltage>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Units.Voltage>` -> `Meadow.Foundation.Sensors.Base.AnalogSamplingBase`

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
