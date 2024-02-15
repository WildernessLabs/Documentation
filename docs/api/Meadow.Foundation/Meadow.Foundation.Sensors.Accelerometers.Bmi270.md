---
uid: Meadow.Foundation.Sensors.Accelerometers.Bmi270
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Accelerometers.Bmi270
---

| Bmi270 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Bmi270/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Bmi270.svg?label=Meadow.Foundation.Sensors.Motion.Bmi270" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Bmi270" /></a> |

### Code Example

```csharp
Bmi270 bmi270;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize hardware...");
    bmi270 = new Bmi270(Device.CreateI2cBus());

    // classical .NET events can also be used:
    bmi270.Updated += HandleResult;

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Bmi270.CreateObserver(handler: result => HandleResult(this, result),
                                         filter: result => FilterResult(result));

    bmi270.Subscribe(consumer);

    bmi270.StartUpdating(TimeSpan.FromMilliseconds(2000));

    return base.Initialize();
}

bool FilterResult(IChangeResult<(Acceleration3D? Acceleration3D,
                                 AngularVelocity3D? AngularVelocity3D,
                                 Temperature? Temperature)> result)
{
    return result.New.Acceleration3D.Value.Z > new Acceleration(0.1, Acceleration.UnitType.Gravity);
}

void HandleResult(object sender,
    IChangeResult<(Acceleration3D? Acceleration3D,
    AngularVelocity3D? AngularVelocity3D,
    Temperature? Temperature)> result)
{
    var accel = result.New.Acceleration3D.Value;
    var gyro = result.New.AngularVelocity3D.Value;
    var temp = result.New.Temperature.Value;

    Resolver.Log.Info($"AccelX={accel.X.Gravity:0.##}g, AccelY={accel.Y.Gravity:0.##}g, AccelZ={accel.Z.Gravity:0.##}g, GyroX={gyro.X.RadiansPerMinute:0.##}rpm, GyroY={gyro.Y.RadiansPerMinute:0.##}rpm, GyroZ={gyro.Z.RadiansPerMinute:0.##}rpm, {temp.Celsius:0.##}C");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Samples/Bmi270_Sample)


# Class Bmi270
Represents a BMI270 inertial measurement unit (IMU)

###### **Assembly**: Bmi270.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.Registers.cs#L3)
```csharp title="Declaration"
public class Bmi270 : PollingSensorBase<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, Temperature? Temperature)>, IObservable<IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, Temperature? Temperature)>>, ISamplingSensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, Temperature? Temperature)>, ISensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, Temperature? Temperature)>, II2cPeripheral, IGyroscope, ISamplingSensor<AngularVelocity3D>, ISensor<AngularVelocity3D>, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Peripherals.Sensors.Motion.IGyroscope`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`
</details>



## Properties
### Acceleration3D
Current Acceleration 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L41)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### AngularVelocity3D
Current Angular Velocity (Gyro) 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L46)
```csharp title="Declaration"
public AngularVelocity3D? AngularVelocity3D { get; }
```
### Temperature
Current Temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L51)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### CurrentAccelerationRange
The range of values that can be read for acceleration on each axis
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L56)
```csharp title="Declaration"
public Bmi270.AccelerationRange CurrentAccelerationRange { get; }
```
### CurrentAngularVelocityRange
The range of values that can be read for angular acceleration (gyro) on each axis
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L61)
```csharp title="Declaration"
public Bmi270.AngularVelocityRange CurrentAngularVelocityRange { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L66)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L71)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### SetAccelerationRange(AccelerationRange)
Set the range of values the sensor can read for acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L168)
```csharp title="Declaration"
public void SetAccelerationRange(Bmi270.AccelerationRange accelRange)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Accelerometers.Bmi270.AccelerationRange](../Bmi270.AccelerationRange) | *accelRange* | AccelerationRange |

### SetAngularVelocityRange(AngularVelocityRange)
Set the range of values the sensor can read for angular velocity (gyro)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L178)
```csharp title="Declaration"
public void SetAngularVelocityRange(Bmi270.AngularVelocityRange angRange)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Accelerometers.Bmi270.AngularVelocityRange](../Bmi270.AngularVelocityRange) | *angRange* | AngularAccelerationRange |

### RaiseEventsAndNotify(IChangeResult&lt;(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, Temperature? Temperature)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L187)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, Temperature? Temperature)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L208)
```csharp title="Declaration"
protected override Task<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, Temperature? Temperature)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>`: The latest sensor reading### SetPowerMode(PowerMode)
Set the device power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L292)
```csharp title="Declaration"
public void SetPowerMode(Bmi270.PowerMode powerMode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Accelerometers.Bmi270.PowerMode](../Bmi270.PowerMode) | *powerMode* | The power mode |

## Events
### Acceleration3DUpdated
Event raised when linear acceleration changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L26)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Acceleration3D>> Acceleration3DUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
### AngularVelocity3DUpdated
Event raised when angular velocity (gyro) changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L31)
```csharp title="Declaration"
public event EventHandler<IChangeResult<AngularVelocity3D>> AngularVelocity3DUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.AngularVelocity3D>>`
### TemperatureUpdated
Event raised when temperature changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Driver/Bmi270.cs#L36)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> TemperatureUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Peripherals.Sensors.Motion.IGyroscope`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
