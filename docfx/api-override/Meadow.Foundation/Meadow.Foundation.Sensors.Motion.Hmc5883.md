---
uid: Meadow.Foundation.Sensors.Motion.Hmc5883
remarks: *content
---

| Hmc5883 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hmc5883) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hmc5883/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Hmc5883/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Hmc5883.svg?label=Meadow.Foundation.Sensors.Motion.Hmc5883" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Hmc5883" /></a> |

### Code Example

```csharp
Hmc5883 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Hmc5883(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Resolver.Log.Info($"Direction: [X:{result.New.X:N2}," +
            $"Y:{result.New.Y:N2}," +
            $"Z:{result.New.Z:N2}]");

        Resolver.Log.Info($"Heading: [{Hmc5883.DirectionToHeading(result.New).DecimalDegrees:N2}] degrees");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Hmc5883.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: [x] changed by threshold; new [x]: X:{Hmc5883.DirectionToHeading(result.New):N2}," +
                $" old: X:{((result.Old != null) ? Hmc5883.DirectionToHeading(result.Old.Value) : "n/a"):N2} degrees"),
        // only notify if there's a greater than 5° of heading change
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (Hmc5883.DirectionToHeading(result.New - old) > new Azimuth(5));
            }
            return false;
        });

    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public async override Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"Direction: [X:{result.X:N2}," +
        $"Y:{result.Y:N2}," +
        $"Z:{result.Z:N2}]");

    Resolver.Log.Info($"Heading: [{Hmc5883.DirectionToHeading(result).DecimalDegrees:N2}] degrees");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hmc5883/Samples/Hmc5883_Sample)

