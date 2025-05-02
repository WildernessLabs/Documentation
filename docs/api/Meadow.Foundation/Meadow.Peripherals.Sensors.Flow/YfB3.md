---
title: Class YfB3
sidebar_label: YfB3
description: Driver for the YF-B3 Hall effect water flow sensor.
slug: /docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow/YfB3
---
# Class YfB3
Driver for the YF-B3 Hall effect water flow sensor.

###### **Assembly**: HallEffectFlowSensors.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Flow.HallEffect/Driver/Drivers/YfB3.cs#L13)
```csharp title="Declaration"
public class YfB3 : HallEffectBase, IObservable<IChangeResult<VolumetricFlow>>, ISamplingSensor<VolumetricFlow>, ISamplingSensor, IVolumetricFlowSensor, ISensor<VolumetricFlow>, ISensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Peripherals.Sensors.Flow.HallEffectBase](../Meadow.Peripherals.Sensors.Flow/HallEffectBase)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.VolumetricFlow>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.VolumetricFlow>`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.IVolumetricFlowSensor`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.VolumetricFlow>`, `Meadow.Peripherals.Sensors.ISensor`


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.VolumetricFlow>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.VolumetricFlow>`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Peripherals.Sensors.IVolumetricFlowSensor`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.VolumetricFlow>`
* `Meadow.Peripherals.Sensors.ISensor`
