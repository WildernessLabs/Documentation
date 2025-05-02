---
title: Class ThreeAxisDigitalAccelerometer16g
sidebar_label: ThreeAxisDigitalAccelerometer16g
description: Represents a 3 Axis Digital Accelerometer1_16g Sensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion/ThreeAxisDigitalAccelerometer16g
---
# Class ThreeAxisDigitalAccelerometer16g
Represents a 3 Axis Digital Accelerometer1_16g Sensor

###### **Assembly**: 3-AxisDigitalAccelerometer_16g.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/3-AxisDigitalAccelerometer16g/Driver/3-AxisDigitalAccelerometer16g.cs#L9)
```csharp title="Declaration"
public class ThreeAxisDigitalAccelerometer16g : Adxl345, IObservable<IChangeResult<Acceleration3D>>, IDisposable, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.PollingSensorBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.ByteCommsSensorBase<Meadow.Units.Acceleration3D>` -> `Meadow.Foundation.Sensors.Motion.Adxl345`

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
