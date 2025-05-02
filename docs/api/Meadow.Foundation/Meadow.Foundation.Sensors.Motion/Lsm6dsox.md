---
title: Class Lsm6dsox
sidebar_label: Lsm6dsox
description: >-
  Represents a Lsm6dsox is a system-in-package (SiP) that combines a 3D linear
  acceleration sensor and a 3D gyroscope sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Lsm6dsox
---
# Class Lsm6dsox
Represents a Lsm6dsox is a system-in-package (SiP) that combines a 3D linear acceleration sensor and a 3D gyroscope sensor

###### **Assembly**: Lsm6dsox.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.Registers.cs#L3)
```csharp title="Declaration"
public class Lsm6dsox : PollingSensorBase<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D)>, IObservable<IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D)>>, ISamplingSensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D)>, ISensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D)>, IGyroscope, ISamplingSensor<AngularVelocity3D>, ISensor<AngularVelocity3D>, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>`, `Meadow.Peripherals.Sensors.Motion.IGyroscope`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Acceleration3D
Current Acceleration 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L35)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### AngularVelocity3D
Current Magnetic Field 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L40)
```csharp title="Declaration"
public AngularVelocity3D? AngularVelocity3D { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L43)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### SetAccelerometerFullScale(AccelFullScale)
Sets the full scale of the accelerometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L81)
```csharp title="Declaration"
public void SetAccelerometerFullScale(Lsm6dsox.AccelFullScale fullScale)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm6dsox.AccelFullScale](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.AccelFullScale) | *fullScale* | The desired full scale setting, specified by the [Meadow.Foundation.Sensors.Motion.Lsm6dsox.AccelFullScale](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.AccelFullScale) enum. |

### GetAccelerometerFullScale()
Retrieves the current full scale setting of the accelerometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L94)
```csharp title="Declaration"
public Lsm6dsox.AccelFullScale GetAccelerometerFullScale()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm6dsox.AccelFullScale](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.AccelFullScale): The current full scale setting, represented by the [Meadow.Foundation.Sensors.Motion.Lsm6dsox.AccelFullScale](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.AccelFullScale) enum.### RaiseEventsAndNotify(IChangeResult&lt;(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L105)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L122)
```csharp title="Declaration"
protected override Task<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>`: The latest sensor reading### SetAccelerometerOutputDataRate(OutputDataRate)
Sets the output data rate for the accelerometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L208)
```csharp title="Declaration"
public void SetAccelerometerOutputDataRate(Lsm6dsox.OutputDataRate dataRate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm6dsox.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.OutputDataRate) | *dataRate* | The desired output data rate setting. |

### GetAccelerometerOutputDataRate()
Retrieves the current output data rate setting for the accelerometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L220)
```csharp title="Declaration"
public Lsm6dsox.OutputDataRate GetAccelerometerOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm6dsox.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.OutputDataRate): The current output data rate setting.### SetGyroscopeOutputDataRate(OutputDataRate)
Sets the output data rate for the gyroscope.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L230)
```csharp title="Declaration"
public void SetGyroscopeOutputDataRate(Lsm6dsox.OutputDataRate dataRate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm6dsox.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.OutputDataRate) | *dataRate* | The desired output data rate setting. |

### GetGyroscopeOutputDataRate()
Retrieves the current output data rate setting for the gyroscope.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm6dsox/Driver/Lsm6dsox.cs#L242)
```csharp title="Declaration"
public Lsm6dsox.OutputDataRate GetGyroscopeOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm6dsox.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lsm6dsox.OutputDataRate): The current output data rate setting.
## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>>>`
* `Meadow.Peripherals.Sensors.Motion.IGyroscope`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
