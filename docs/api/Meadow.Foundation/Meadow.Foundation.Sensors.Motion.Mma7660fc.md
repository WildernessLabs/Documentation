---
uid: Meadow.Foundation.Sensors.Motion.Mma7660fc
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mma7660fc
---

| Mma7660fc | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Mma7660fc/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Mma7660fc.svg?label=Meadow.Foundation.Sensors.Motion.Mma7660fc" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Mma7660fc" /></a> |

### Code Example

```csharp
Mma7660fc sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // create the sensor driver
    sensor = new Mma7660fc(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Accel: [X:{result.New.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Z.MetersPerSecondSquared:N2} (m/s^2)]" +
            $" Direction: {sensor.Direction}" +
            $" Orientation: {sensor.Orientation}");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Mma7660fc.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: [x] changed by threshold; new [x]: X:{result.New.X:N2}, old: X:{result.Old?.X:N2}"),
        // only notify if there's a greater than 0.5G change in the Z direction
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return ((result.New - old).Z > new Acceleration(0.5, AU.Gravity));
            }
            return false;
        });
    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public async override Task Run()
{
    //==== one-off read
    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"Accel: [X:{result.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.Z.MetersPerSecondSquared:N2} (m/s^2)]");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Samples/Mma7660fc_Sample)


# Class Mma7660fc
Represents Mma7660fc 3-axis accelerometer

###### **Assembly**: Mma7660fc.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.Registers.cs#L3)
```csharp title="Declaration"
public class Mma7660fc : ByteCommsSensorBase<Acceleration3D>, IObservable<IChangeResult<Acceleration3D>>, IDisposable, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L16)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Acceleration3D
Current Acceleration3d value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L21)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### Direction
Get the current direction value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L26)
```csharp title="Declaration"
public Mma7660fc.DirectionType Direction { get; set; }
```
### Orientation
Get the current orientation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L31)
```csharp title="Declaration"
public Mma7660fc.OrientationType Orientation { get; set; }
```
## Methods
### SetSampleRate(SampleRate)
Set sample rate in samples per second
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L69)
```csharp title="Declaration"
public void SetSampleRate(Mma7660fc.SampleRate rate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Mma7660fc.SampleRate](../Mma7660fc.SampleRate) | *rate* | sample rate |

### ReadSensor()
Read sensor data from registers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mma7660fc/Driver/Mma7660fc.cs#L78)
```csharp title="Declaration"
protected override Task<Acceleration3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Acceleration3D>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
