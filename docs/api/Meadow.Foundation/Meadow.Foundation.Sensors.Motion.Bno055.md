---
uid: Meadow.Foundation.Sensors.Motion.Bno055
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055
---

| Bno055 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Bno055/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Bno055.svg?label=Meadow.Foundation.Sensors.Motion.Bno055" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Bno055" /></a> |

**BNO055** is a 9-axis absolute orientation sensor. The three sensors (accelerometer, gyroscope and magnetometer) are measured with a 32-bit cortex M0 microcontroller. The BNO055 is controlled via I2C.

### Code Example

```csharp
Bno055 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // create the sensor driver
    sensor = new Bno055(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Accel: [X:{result.New.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

        Resolver.Log.Info($"Gyro: [X:{result.New.AngularVelocity3D?.X.DegreesPerSecond:N2}," +
            $"Y:{result.New.AngularVelocity3D?.Y.DegreesPerSecond:N2}," +
            $"Z:{result.New.AngularVelocity3D?.Z.DegreesPerSecond:N2} (degrees/s)]");

        Resolver.Log.Info($"Compass: [X:{result.New.MagneticField3D?.X.Tesla:N2}," +
            $"Y:{result.New.MagneticField3D?.Y.Tesla:N2}," +
            $"Z:{result.New.MagneticField3D?.Z.Tesla:N2} (Tesla)]");

        Resolver.Log.Info($"Gravity: [X:{result.New.GravityVector?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.GravityVector?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.GravityVector?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

        Resolver.Log.Info($"Quaternion orientation: [X:{result.New.QuaternionOrientation?.X:N2}," +
            $"Y:{result.New.QuaternionOrientation?.Y:N2}," +
            $"Z:{result.New.QuaternionOrientation?.Z:N2}]");

        Resolver.Log.Info($"Euler orientation: [heading: {result.New.EulerOrientation?.Heading:N2}," +
            $"Roll: {result.New.EulerOrientation?.Roll:N2}," +
            $"Pitch: {result.New.EulerOrientation?.Pitch:N2}]");

        Resolver.Log.Info($"Linear Accel: [X:{result.New.LinearAcceleration?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.LinearAcceleration?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.LinearAcceleration?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

        Resolver.Log.Info($"Temp: {result.New.Temperature?.Celsius:N2}C");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Bno055.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: [x] changed by threshold; new [x]: X:{result.New.Acceleration3D?.X.MetersPerSecondSquared:N2}, old: X:{result.Old?.Acceleration3D?.X.MetersPerSecondSquared:N2}"),
        // only notify if there's a greater than 1 micro tesla on the Y axis

        filter: result =>
        {
            if (result.Old is { } old)
            {
                return ((result.New.Acceleration3D - old.Acceleration3D)?.Y > new Acceleration(1, AU.MetersPerSecondSquared));
            }
            return false;
        });
    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public async override Task Run()
{
    await ReadConditions();

    sensor.StartUpdating(TimeSpan.FromMilliseconds(500));
}

protected async Task ReadConditions()
{
    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"Accel: [X:{result.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

    Resolver.Log.Info($"Gyro: [X:{result.AngularVelocity3D?.X.DegreesPerSecond:N2}," +
        $"Y:{result.AngularVelocity3D?.Y.DegreesPerSecond:N2}," +
        $"Z:{result.AngularVelocity3D?.Z.DegreesPerSecond:N2} (degrees/s)]");

    Resolver.Log.Info($"Compass: [X:{result.MagneticField3D?.X.Tesla:N2}," +
        $"Y:{result.MagneticField3D?.Y.Tesla:N2}," +
        $"Z:{result.MagneticField3D?.Z.Tesla:N2} (Tesla)]");

    Resolver.Log.Info($"Gravity: [X:{result.GravityVector?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.GravityVector?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.GravityVector?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

    Resolver.Log.Info($"Quaternion orientation: [X:{result.QuaternionOrientation?.X:N2}," +
        $"Y:{result.QuaternionOrientation?.Y:N2}," +
        $"Z:{result.QuaternionOrientation?.Z:N2}]");

    Resolver.Log.Info($"Euler orientation: [heading: {result.EulerOrientation?.Heading:N2}," +
        $"Roll: {result.EulerOrientation?.Roll:N2}," +
        $"Pitch: {result.EulerOrientation?.Pitch:N2}]");

    Resolver.Log.Info($"Linear Accel: [X:{result.LinearAcceleration?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.LinearAcceleration?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.LinearAcceleration?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

    Resolver.Log.Info($"Temp: {result.Temperature?.Celsius:N2}C");
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Samples/Bno055_Sample)

### Wiring Example

The following diagram shows the BNO055 configured for bas

<img src="/API_Assets/Meadow.Foundation.Sensors.Motion.Bno055/Bno055_Fritzing.svg" />





# Class Bno055
Provide methods / properties to allow an application to control a BNO055 
9-axis absolute orientation sensor.

###### **Assembly**: Bno055.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.SelfTestResultMasks.cs#L3)
```csharp title="Declaration"
public class Bno055 : ByteCommsSensorBase<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D, Quaternion? QuaternionOrientation, Acceleration3D? LinearAcceleration, Acceleration3D? GravityVector, EulerAngles? EulerOrientation, Temperature? Temperature)>, IObservable<IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D, Quaternion? QuaternionOrientation, Acceleration3D? LinearAcceleration, Acceleration3D? GravityVector, EulerAngles? EulerOrientation, Temperature? Temperature)>>, ISamplingSensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D, Quaternion? QuaternionOrientation, Acceleration3D? LinearAcceleration, Acceleration3D? GravityVector, EulerAngles? EulerOrientation, Temperature? Temperature)>, ISensor<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D, Quaternion? QuaternionOrientation, Acceleration3D? LinearAcceleration, Acceleration3D? GravityVector, EulerAngles? EulerOrientation, Temperature? Temperature)>, IDisposable, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, IGyroscope, ISamplingSensor<AngularVelocity3D>, ISensor<AngularVelocity3D>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.Motion.IGyroscope`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L35)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Acceleration3D
Current Acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L87)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### AngularVelocity3D
Current Angular Velocity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L92)
```csharp title="Declaration"
public AngularVelocity3D? AngularVelocity3D { get; }
```
### MagneticField3D
Current Magnetic Field
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L97)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### QuaternionOrientation
Current Quaternion Orientation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L102)
```csharp title="Declaration"
public Quaternion? QuaternionOrientation { get; }
```
### LinearAcceleration
Current Linear Acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L107)
```csharp title="Declaration"
public Acceleration3D? LinearAcceleration { get; }
```
### GravityVector
Current Gravity Vector
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L112)
```csharp title="Declaration"
public Acceleration3D? GravityVector { get; }
```
### EulerOrientation
Current Euler Orientation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L117)
```csharp title="Declaration"
public EulerAngles? EulerOrientation { get; }
```
### Temperature
Current Temperature value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L122)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### TemperatureSource
Select the source of the Temperature property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L127)
```csharp title="Declaration"
public Bno055.Sensor TemperatureSource { get; set; }
```
### PowerMode
Get or set the power mode for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L149)
```csharp title="Declaration"
public byte PowerMode { get; set; }
```
### OperatingMode
Get / set the current operating mode for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L165)
```csharp title="Declaration"
public byte OperatingMode { get; set; }
```
### IsInFusionMode
Check if sensor is currently working in Fusion mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L205)
```csharp title="Declaration"
public bool IsInFusionMode { get; }
```
### IsSystemCalibrated
Get the system calibration status.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L214)
```csharp title="Declaration"
public bool IsSystemCalibrated { get; }
```
### IsAccelerometerCalibrated
Get the accelerometer calibration status.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L219)
```csharp title="Declaration"
public bool IsAccelerometerCalibrated { get; }
```
### IsGyroscopeCalibrated
Get the gyroscope calibration status.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L224)
```csharp title="Declaration"
public bool IsGyroscopeCalibrated { get; }
```
### IsMagnetometerCalibrated
Get the magnetometer status.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L229)
```csharp title="Declaration"
public bool IsMagnetometerCalibrated { get; }
```
### IsFullyCalibrated
Is the system fully calibrated?
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L238)
```csharp title="Declaration"
public bool IsFullyCalibrated { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Start updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L271)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The time between updates |

### StopUpdating()
Stop reading data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L281)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L291)
```csharp title="Declaration"
protected override Task<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D, Quaternion? QuaternionOrientation, Acceleration3D? LinearAcceleration, Acceleration3D? GravityVector, EulerAngles? EulerOrientation, Temperature? Temperature)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>`: The latest sensor reading### RaiseEventsAndNotify(IChangeResult&lt;(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D, Quaternion? QuaternionOrientation, Acceleration3D? LinearAcceleration, Acceleration3D? GravityVector, EulerAngles? EulerOrientation, Temperature? Temperature)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L372)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Acceleration3D? Acceleration3D, AngularVelocity3D? AngularVelocity3D, MagneticField3D? MagneticField3D, Quaternion? QuaternionOrientation, Acceleration3D? LinearAcceleration, Acceleration3D? GravityVector, EulerAngles? EulerOrientation, Temperature? Temperature)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>` | *changeResult* | The updated sensor data |

### GetReadings(int, double)
Convert a section of the sensor data into a tuple
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L418)
```csharp title="Declaration"
protected (double X, double Y, double Z) GetReadings(int start, double divisor)
```

##### Returns

`System.ValueTuple<System.Double,System.Double,System.Double>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *start* | Start of the data in the sensorReadings member variable |
| `System.Double` | *divisor* | Divisor |

### ConvertReadingToEulerAngles(int, double)
Convert the sensor readings into an orientation in Euler angles
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L433)
```csharp title="Declaration"
protected EulerAngles ConvertReadingToEulerAngles(int start, double divisor)
```

##### Returns

[Meadow.Foundation.Spatial.EulerAngles](../EulerAngles): EulerAngles object containing the orientation information
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *start* | First of the sensor readings to convert |
| `System.Double` | *divisor* | Divisor to apply to the sensor data |

### DisplayRegisters()
Read all of the registers and display their values on the Debug output.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L444)
```csharp title="Declaration"
public void DisplayRegisters()
```
## Events
### MagneticField3DUpdated
Raised when the magnetic field value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L40)
```csharp title="Declaration"
public event EventHandler<IChangeResult<MagneticField3D>> MagneticField3DUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`
### QuaternionOrientationUpdated
Raised when the quaternion orientation value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L45)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Quaternion>> QuaternionOrientationUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Foundation.Spatial.Quaternion>>`
### LinearAccelerationUpdated
Raised when the linear acceleration value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L50)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Acceleration3D>> LinearAccelerationUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
### GravityVectorUpdated
Raised when the gravity vector acceleration value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L55)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Acceleration3D>> GravityVectorUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
### EulerOrientationUpdated
Raised when the euler orientation value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver/Bno055.cs#L60)
```csharp title="Declaration"
public event EventHandler<IChangeResult<EulerAngles>> EulerOrientationUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Foundation.Spatial.EulerAngles>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.AngularVelocity3D>,System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Foundation.Spatial.Quaternion>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Units.Acceleration3D>,System.Nullable<Meadow.Foundation.Spatial.EulerAngles>,System.ValueTuple<System.Nullable<Meadow.Units.Temperature>>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.Motion.IGyroscope`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.AngularVelocity3D>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
