---
uid: Meadow.Foundation.Sensors.Motion.Lsm303agr
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lsm303agr
---

| Lsm303agr | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Lsm303agr/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Lsm303agr.svg?label=Meadow.Foundation.Sensors.Motion.Lsm303agr" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Lsm303agr" /></a> |

### Code Example

```csharp
Lsm303agr sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize hardware...");
    sensor = new Lsm303agr(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += HandleResult;

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Lsm303agr.CreateObserver(handler: result => HandleResult(this, result),
                                         filter: result => FilterResult(result));

    sensor.Subscribe(consumer);

    sensor.StartUpdating(TimeSpan.FromMilliseconds(2000));

    return base.Initialize();
}

bool FilterResult(IChangeResult<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)> result)
{
    return result.New.Acceleration3D.Value.Z > new Acceleration(0.1, Acceleration.UnitType.Gravity);
}

void HandleResult(object sender,
    IChangeResult<(Acceleration3D? Acceleration3D,
    MagneticField3D? MagneticField3D)> result)
{
    var accel = result.New.Acceleration3D.Value;
    var mag = result.New.MagneticField3D.Value;

    Resolver.Log.Info($"AccelX={accel.X.Gravity:0.##}g, AccelY={accel.Y.Gravity:0.##}g, AccelZ={accel.Z.Gravity:0.##}g, MagX={mag.X.Gauss:0.##}gauss, MagY={mag.Y.Gauss:0.##}gauss, MagZ={mag.Z.Gauss:0.##}gauss");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Samples/Lsm303agr_Sample)


# Class Lsm303agr
Represents a LSM303AGR is a system-in-package (SiP) that combines a 3D linear acceleration sensor and a 3D magnetic sensor

###### **Assembly**: Lsm303agr.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.Registers.cs#L3)
```csharp title="Declaration"
public class Lsm303agr : PollingSensorBase<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>, IObservable<IChangeResult<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>>, ISamplingSensor<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>, ISensor<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)>, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Acceleration3D
Current Acceleration 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L35)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### MagneticField3D
Current Magnetic Field 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L40)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L45)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### SetAccelerometerSensitivity(AccSensitivity)
Sets the sensitivity of the accelerometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L82)
```csharp title="Declaration"
public void SetAccelerometerSensitivity(Lsm303agr.AccSensitivity sensitivity)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm303agr.AccSensitivity](../Lsm303agr.AccSensitivity) | *sensitivity* | The desired sensitivity setting, specified by the AccSensitivity enum. |

### GetAccelerometerSensitivity()
Retrieves the current sensitivity setting of the accelerometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L92)
```csharp title="Declaration"
public Lsm303agr.AccSensitivity GetAccelerometerSensitivity()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm303agr.AccSensitivity](../Lsm303agr.AccSensitivity): The current sensitivity setting, represented by the AccSensitivity enum.### RaiseEventsAndNotify(IChangeResult&lt;(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L104)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L121)
```csharp title="Declaration"
protected override Task<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.MagneticField3D>>>`: The latest sensor reading### SetAccelerometerOutputDataRate(AccOutputDataRate)
Sets the output data rate for the accelerometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L205)
```csharp title="Declaration"
public void SetAccelerometerOutputDataRate(Lsm303agr.AccOutputDataRate dataRate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm303agr.AccOutputDataRate](../Lsm303agr.AccOutputDataRate) | *dataRate* | The desired output data rate setting. |

### GetAccelerometerOutputDataRate()
Retrieves the current output data rate setting for the accelerometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L218)
```csharp title="Declaration"
public Lsm303agr.AccOutputDataRate GetAccelerometerOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm303agr.AccOutputDataRate](../Lsm303agr.AccOutputDataRate): The current output data rate setting.### SetMagnetometerOutputDataRate(MagOutputDataRate)
Sets the output data rate for the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L231)
```csharp title="Declaration"
public void SetMagnetometerOutputDataRate(Lsm303agr.MagOutputDataRate dataRate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lsm303agr.MagOutputDataRate](../Lsm303agr.MagOutputDataRate) | *dataRate* | The desired output data rate setting. |

### GetMagnetometerOutputDataRate()
Retrieves the current output data rate setting for the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Driver/Lsm303agr.cs#L243)
```csharp title="Declaration"
public Lsm303agr.MagOutputDataRate GetMagnetometerOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lsm303agr.MagOutputDataRate](../Lsm303agr.MagOutputDataRate): The current output data rate setting.
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
