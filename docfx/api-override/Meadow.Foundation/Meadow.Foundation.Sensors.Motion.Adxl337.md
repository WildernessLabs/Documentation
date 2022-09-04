---
uid: Meadow.Foundation.Sensors.Motion.Adxl337
remarks: *content
---

| Adxl337 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Adxl3xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Adxl3xx.svg?label=Meadow.Foundation.Sensors.Motion.Adxl3xx" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Adxl3xx" /></a> |

The **ADXL337** is a low power accelerometer capable of measuring +/- 3g of acceleration along three axes. The ADXL337 is controlled via I2C.

### Code Example

```csharp
Adxl337 sensor;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    // create the sensor driver
    sensor = new Adxl337(Device, Device.Pins.A00, Device.Pins.A01, Device.Pins.A02, null);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Accel: [X:{result.New.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Z.MetersPerSecondSquared:N2} (m/s^2)]");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Adxl337.CreateObserver(
        handler: result => Console.WriteLine($"Observer: [x] changed by threshold; new [x]: X:{result.New.X:N2}, old: X:{result.Old?.X:N2}"),
        // only notify if there's a greater than 1G change in the Z direction
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                return ((result.New - old).Z > new Acceleration(1, AU.Gravity));
            }
            return false;
        });
    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public async override Task Run()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"Accel: [X:{result.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.Z.MetersPerSecondSquared:N2} (m/s^2)]");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(500));
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Samples/Adxl337_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Adx337/Adx337_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




