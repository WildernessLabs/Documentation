---
title: Class CACCurrent
sidebar_label: CACCurrent
description: Represents a mikroBUS current sensing AC Current Click board
slug: >-
  /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors/CACCurrent
---
# Class CACCurrent
Represents a mikroBUS current sensing AC Current Click board

###### **Assembly**: CACCurrent.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CACCurrent/Driver/CACCurrent.cs#L12)
```csharp title="Declaration"
public class CACCurrent : CurrentTransducer, IObservable<IChangeResult<Current>>, ICurrentSensor, ISamplingSensor<Current>, ISensor<Current>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Units.Current>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Units.Current>` -> `Meadow.Foundation.Sensors.Power.CurrentTransducer`

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Current>>`, `Meadow.Peripherals.Sensors.ICurrentSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### ReferenceVoltage
Reference voltage (2.048V)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CACCurrent/Driver/CACCurrent.cs#L17)
```csharp title="Declaration"
public Voltage ReferenceVoltage { get; protected set; }
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Current>>`
* `Meadow.Peripherals.Sensors.ICurrentSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
