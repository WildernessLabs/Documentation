---
title: Class CThermo13
sidebar_label: CThermo13
description: Represents a mikroBUS Thermo 13 Click board
slug: /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS/CThermo13
---
# Class CThermo13
Represents a mikroBUS Thermo 13 Click board

###### **Assembly**: CThermo13.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CThermo13/Driver/CThermo13.cs#L9)
```csharp title="Declaration"
public class CThermo13 : Bh1900Nux, IObservable<IChangeResult<Temperature>>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Units.Temperature>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Units.Temperature>` -> `Meadow.Foundation.PollingSensorBase<Meadow.Units.Temperature>` -> `Meadow.Foundation.ByteCommsSensorBase<Meadow.Units.Temperature>` -> `Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux`

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
