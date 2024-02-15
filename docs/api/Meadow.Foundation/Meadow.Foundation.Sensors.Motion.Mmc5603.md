---
uid: Meadow.Foundation.Sensors.Motion.Mmc5603
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mmc5603
---

| Mmc5603 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Mmc5603/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Mmc5603.svg?label=Meadow.Foundation.Sensors.Motion.Mmc5603" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Mmc5603" /></a> |

### Code Example

```csharp
private Mmc5603 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Mmc5603(Device.CreateI2cBus());

    // classical .NET events can  be used
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Magnetic Field: [X:{result.New.X.MicroTesla:N2}," +
            $"Y:{result.New.Y.MicroTesla:N2}," +
            $"Z:{result.New.Z.MicroTesla:N2} (MicroTeslas)]");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Mmc5603.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: [x] changed by threshold; new [x]: X:{result.New.X.MicroTesla:N2}, old: X:{result.Old?.X.MicroTesla:N2}"),
        // only notify if there's a greater than 1 micro tesla on the Y axis
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Y > new MagneticField(1, MU.MicroTesla);
            }
            return false;
        });

    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public override async Task Run()
{
    //Read from sensor
    var result = await sensor.Read();

    //output initial readings text to console
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info(
        $"Magnetic field: [X:{result.X.MicroTesla:N2}," +
        $"Y:{result.Y.MicroTesla:N2}," +
        $"Z:{result.Z.MicroTesla:N2} (MicroTeslas)]");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1500));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Samples/Mmc5603_Sample)


# Class Mmc5603
Represents the Mmc5603 Three-Axis, Digital Magnetometer

###### **Assembly**: MMC5603.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Driver/Mmc5603.Registers.cs#L3)
```csharp title="Declaration"
public class Mmc5603 : ByteCommsSensorBase<MagneticField3D>, IObservable<IChangeResult<MagneticField3D>>, IDisposable, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Driver/Mmc5603.cs#L20)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### MagneticField3D
The current magnetic field value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Driver/Mmc5603.cs#L25)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### ContinuousModeEnabled
Get/set continuous sensor reading mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Driver/Mmc5603.cs#L30)
```csharp title="Declaration"
public bool ContinuousModeEnabled { get; set; }
```
## Methods
### Reset()
Reset the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Driver/Mmc5603.cs#L57)
```csharp title="Declaration"
public void Reset()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Driver/Mmc5603.cs#L104)
```csharp title="Declaration"
protected override Task<MagneticField3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.MagneticField3D>`: The latest sensor reading### ReadTemperature()
Read the sensor temperature
Doesn't work in continuous mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mmc5603/Driver/Mmc5603.cs#L144)
```csharp title="Declaration"
public Task<Temperature> ReadTemperature()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Motion.IMagnetometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
