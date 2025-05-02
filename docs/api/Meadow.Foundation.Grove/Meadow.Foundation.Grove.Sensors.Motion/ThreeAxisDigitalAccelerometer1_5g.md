---
title: Class ThreeAxisDigitalAccelerometer1_5g
sidebar_label: ThreeAxisDigitalAccelerometer1_5g
description: Represents a 3 Axis Digital Accelerometer1_5g Sensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion/ThreeAxisDigitalAccelerometer1_5g
---
# Class ThreeAxisDigitalAccelerometer1_5g
Represents a 3 Axis Digital Accelerometer1_5g Sensor

###### **Assembly**: 3-AxisDigitalAccelerometer1_5g.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/3-AxisDigitalAccelerometer1_5g/Driver/3-AxisDigitalAccelerometer1_5g.cs#L9)
```csharp title="Declaration"
public class ThreeAxisDigitalAccelerometer1_5g : Mma7660fc, IObservable<IChangeResult<Acceleration3D>>, IDisposable, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.PollingSensorBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.ByteCommsSensorBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.Sensors.Motion.Mma7660fc`

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
