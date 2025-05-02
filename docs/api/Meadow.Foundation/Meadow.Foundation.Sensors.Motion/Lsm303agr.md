---
title: Class Lsm303agr
sidebar_label: Lsm303agr
description: >-
  Represents a LSM303AGR is a system-in-package (SiP) that combines a 3D linear
  acceleration sensor and a 3D magnetic sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Lsm303agr
---
# Class Lsm303agr
Represents a LSM303AGR is a system-in-package (SiP) that combines a 3D linear acceleration sensor and a 3D magnetic sensor

###### **Assembly**: Lsm303agr.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.Registers.cs#L3)
```csharp title="Declaration"
public class Lsm303agr : PollingSensorBase<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>, IObservable<IChangeResult<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>>, ISamplingSensor<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>, ISensor<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Acceleration3D
Current Acceleration 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L35)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### MagneticField3D
Current Magnetic Field 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L40)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L45)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### SetAccelerometerSensitivity(AccSensitivity)
Sets the sensitivity of the accelerometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L82)
```csharp title="Declaration"
public void SetAccelerometerSensitivity(Lsm303agr.AccSensitivity sensitivity)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm303agr.AccSensitivity](../Meadow.Foundation.Sensors.Motion/Lsm303agr.AccSensitivity) | *sensitivity* | The desired sensitivity setting, specified by the AccSensitivity enum. |

### GetAccelerometerSensitivity()
Retrieves the current sensitivity setting of the accelerometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L92)
```csharp title="Declaration"
public Lsm303agr.AccSensitivity GetAccelerometerSensitivity()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm303agr.AccSensitivity](../Meadow.Foundation.Sensors.Motion/Lsm303agr.AccSensitivity): The current sensitivity setting, represented by the AccSensitivity enum.### RaiseEventsAndNotify(IChangeResult&lt;(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L104)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L121)
```csharp title="Declaration"
protected override Task<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`: The latest sensor reading### SetAccelerometerOutputDataRate(AccOutputDataRate)
Sets the output data rate for the accelerometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L205)
```csharp title="Declaration"
public void SetAccelerometerOutputDataRate(Lsm303agr.AccOutputDataRate dataRate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm303agr.AccOutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm303agr.AccOutputDataRate) | *dataRate* | The desired output data rate setting. |

### GetAccelerometerOutputDataRate()
Retrieves the current output data rate setting for the accelerometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L218)
```csharp title="Declaration"
public Lsm303agr.AccOutputDataRate GetAccelerometerOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm303agr.AccOutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm303agr.AccOutputDataRate): The current output data rate setting.### SetMagnetometerOutputDataRate(MagOutputDataRate)
Sets the output data rate for the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L231)
```csharp title="Declaration"
public void SetMagnetometerOutputDataRate(Lsm303agr.MagOutputDataRate dataRate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm303agr.MagOutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm303agr.MagOutputDataRate) | *dataRate* | The desired output data rate setting. |

### GetMagnetometerOutputDataRate()
Retrieves the current output data rate setting for the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L243)
```csharp title="Declaration"
public Lsm303agr.MagOutputDataRate GetMagnetometerOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm303agr.MagOutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm303agr.MagOutputDataRate): The current output data rate setting.
## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`
* `Meadow.Peripherals.Sensors.Motion.IMagnetometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
