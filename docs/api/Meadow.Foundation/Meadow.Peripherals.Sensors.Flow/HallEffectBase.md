---
title: Class HallEffectBase
sidebar_label: HallEffectBase
description: >-
  Base class for Hall effect flow sensors that measure volumetric flow based on
  pulse frequency.
slug: /docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow/HallEffectBase
---
# Class HallEffectBase
Base class for Hall effect flow sensors that measure volumetric flow based on pulse frequency.

###### **Assembly**: HallEffectFlowSensors.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Flow.HallEffect/Driver/HallEffectBase.cs#L25)
```csharp title="Declaration"
public abstract class HallEffectBase : PollingSensorBase<VolumetricFlow>, IObservable<IChangeResult<VolumetricFlow>>, ISamplingSensor<VolumetricFlow>, ISamplingSensor, IVolumetricFlowSensor, ISensor<VolumetricFlow>, ISensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Derived:**  

<details>
<summary>Expand</summary>

[Meadow.Peripherals.Sensors.Flow.Gr105](../Meadow.Peripherals.Sensors.Flow/Gr105), [Meadow.Peripherals.Sensors.Flow.Gr201](../Meadow.Peripherals.Sensors.Flow/Gr201), [Meadow.Peripherals.Sensors.Flow.Gr216](../Meadow.Peripherals.Sensors.Flow/Gr216), [Meadow.Peripherals.Sensors.Flow.YfB1](../Meadow.Peripherals.Sensors.Flow/YfB1), [Meadow.Peripherals.Sensors.Flow.YfB10](../Meadow.Peripherals.Sensors.Flow/YfB10), [Meadow.Peripherals.Sensors.Flow.YfB2](../Meadow.Peripherals.Sensors.Flow/YfB2), [Meadow.Peripherals.Sensors.Flow.YfB3](../Meadow.Peripherals.Sensors.Flow/YfB3), [Meadow.Peripherals.Sensors.Flow.YfB6](../Meadow.Peripherals.Sensors.Flow/YfB6), [Meadow.Peripherals.Sensors.Flow.YfB9](../Meadow.Peripherals.Sensors.Flow/YfB9)
</details>



**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.VolumetricFlow>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.VolumetricFlow>`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.IVolumetricFlowSensor`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.VolumetricFlow>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### Flow
Last value read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Flow.HallEffect/Driver/HallEffectBase.cs#L45)
```csharp title="Declaration"
public VolumetricFlow Flow { get; }
```
## Methods
### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Flow.HallEffect/Driver/HallEffectBase.cs#L48)
```csharp title="Declaration"
protected override Task<VolumetricFlow> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.VolumetricFlow>`: unitized value
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.VolumetricFlow>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.VolumetricFlow>`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Peripherals.Sensors.IVolumetricFlowSensor`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.VolumetricFlow>`
* `Meadow.Peripherals.Sensors.ISensor`
