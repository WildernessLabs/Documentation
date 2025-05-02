---
title: Class RotaryAngleSensor
sidebar_label: RotaryAngleSensor
description: Represents a rotary angle sensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Rotary/RotaryAngleSensor
---
# Class RotaryAngleSensor
Represents a rotary angle sensor

###### **Assembly**: RotaryAngleSensor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/RotaryAngleSensor/Driver/RotaryAngleSensor.cs#L11)
```csharp title="Declaration"
public class RotaryAngleSensor : AnalogSamplingBase, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
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
