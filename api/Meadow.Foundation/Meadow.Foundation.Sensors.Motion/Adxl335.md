---
title: Class Adxl335
sidebar_label: Adxl335
description: "Driver for the ADXL335 triple axis accelerometer
+/- 3g"
---
# Class Adxl335
Driver for the ADXL335 triple axis accelerometer
+/- 3g

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl335.cs#L10)
```csharp title="Declaration"
public class Adxl335 : Adxl3xxBase, IObservable<IChangeResult<Acceleration3D>>, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.Sensors.Motion.Adxl3xxBase](../Meadow.Foundation.Sensors.Motion/Adxl3xxBase)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
