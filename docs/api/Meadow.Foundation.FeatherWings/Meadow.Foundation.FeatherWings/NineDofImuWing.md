---
title: Class NineDofImuWing
sidebar_label: NineDofImuWing
description: Represents Adafruit's 9-DOF IMU FeatherWing
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/NineDofImuWing
---
# Class NineDofImuWing
Represents Adafruit's 9-DOF IMU FeatherWing

###### **Assembly**: NineDofImuWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L14)
```csharp title="Declaration"
public class NineDofImuWing : PollingSensorBase<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D)>, IObservable<IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D)>>, ISamplingSensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D)>, ISensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D)>, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, IGyroscope, ISamplingSensor<AngularVelocity3D>, ISensor<AngularVelocity3D>, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>` -> `Meadow.Foundation.SamplingSensorBase<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>` -> `Meadow.Foundation.PollingSensorBase<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.Motion.IGyroscope`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`
</details>



## Properties
### Lis3mdl
The LIS3MDL Magnetometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L21)
```csharp title="Declaration"
public Lis3mdl Lis3mdl { get; }
```
### Lsm6dsox
The LSM6DSOX Accelerometer/Gyroscope
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L26)
```csharp title="Declaration"
public Lsm6dsox Lsm6dsox { get; }
```
### UpdateInterval
The sampling interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L31)
```csharp title="Declaration"
public override TimeSpan UpdateInterval { get; }
```
### IsSampling
Is the sensor currently sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L36)
```csharp title="Declaration"
public bool IsSampling { get; }
```
### Acceleration3D
The current acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L41)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### AngularVelocity3D
The current angular velocity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L46)
```csharp title="Declaration"
public AngularVelocity3D? AngularVelocity3D { get; }
```
### MagneticField3D
The current magnetic field
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L51)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified.

This method also starts raising `Updated` events and notifying
IObservable subscribers. Use the `updateInterval` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L114)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A `TimeSpan` that specifies how long to
     wait between readings. This value influences how often `*Updated`
     events are raised and `IObservable` consumers are notified.
     The default is 5 seconds. |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L121)
```csharp title="Declaration"
public override void StopUpdating()
```
### RaiseEventsAndNotify(IChangeResult&lt;(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D)&gt;)
Notify observers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L128)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>` | *changeResult* | provides new and old values |

### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NineDofImuWing/Driver/NineDofImuWing.cs#L149)
```csharp title="Declaration"
protected override Task<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`: unitized value
## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.Motion.IGyroscope`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.Motion.IMagnetometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
