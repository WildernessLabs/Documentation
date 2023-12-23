---
uid: Meadow.Foundation.Sensors.Motion.Adxl362

---

| Adxl362 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Adxl3xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Adxl3xx.svg?label=Meadow.Foundation.Sensors.Motion.Adxl3xx" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Adxl3xx" /></a> |

**ADXL362** is an ultra-low power, 3-axis MEMS accelerometer that consumes less than 2 μA at a 100 Hz output data rate and 270 nA when in motion triggered wake-up mode. 

The ADXL362 is controlled via I2C.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl362/Samples/) 

### Code Example

```csharp
Adxl362 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // create the sensor driver
    sensor = new Adxl362(Device.CreateSpiBus(), Device.Pins.D00);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Accel: [X:{result.New.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

        Resolver.Log.Info($"Temp: {result.New.Temperature?.Celsius:N2}C");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Adxl362.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: [x] changed by threshold; new [x]: X:{result.New.Acceleration3D?.X.MetersPerSecondSquared:N2}, old: X:{result.Old?.Acceleration3D?.X.MetersPerSecondSquared:N2}"),
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
    Resolver.Log.Info($"Device ID: {sensor.DeviceID}");

    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"Accel: [X:{result.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

    Resolver.Log.Info($"Temp: {result.Temperature?.Celsius:N2}C");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Samples/Adxl362_Sample)

### Usage

The ADXL362 can operating in interrupt and polling mode.  Polling applications are responsible for determining when a sensor is read.  Interrupt applications will be notified when the sensor reading changes by + / - a threshold value.

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Motion.Adxl362/Adxl362_Fritzing.svg" />




