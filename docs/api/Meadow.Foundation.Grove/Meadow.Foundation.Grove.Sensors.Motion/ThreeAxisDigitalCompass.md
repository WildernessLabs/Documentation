---
title: Class ThreeAxisDigitalCompass
sidebar_label: ThreeAxisDigitalCompass
description: Represents a 3-Axis Digital Compass Sensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion/ThreeAxisDigitalCompass
---
# Class ThreeAxisDigitalCompass
Represents a 3-Axis Digital Compass Sensor

###### **Assembly**: 3-AxisDigitalCompass.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/3-AxisDigitalCompass/Driver/3-AxisDigitalCompass.cs#L9)
```csharp title="Declaration"
public class ThreeAxisDigitalCompass : Hmc5883, IObservable<IChangeResult<Vector>>, ISamplingSensor<Vector>, ISensor<Vector>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Foundation.Spatial.Vector>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Foundation.Spatial.Vector>` -> `Meadow.Foundation.PollingSensorBase<Meadow.Foundation.Spatial.Vector>` -> `Meadow.Foundation.ByteCommsSensorBase<Meadow.Foundation.Spatial.Vector>` -> `Meadow.Foundation.Sensors.Motion.Hmc5883`

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Foundation.Spatial.Vector>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Foundation.Spatial.Vector>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Foundation.Spatial.Vector>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Foundation.Spatial.Vector>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Foundation.Spatial.Vector>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Foundation.Spatial.Vector>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
