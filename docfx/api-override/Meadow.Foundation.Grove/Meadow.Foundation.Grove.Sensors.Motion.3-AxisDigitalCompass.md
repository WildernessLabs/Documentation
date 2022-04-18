---
uid: Meadow.Foundation.Grove.Sensors.Motion.ThreeAxisDigitalCompass
remarks: *content
---

| 3-AxisDigitalCompass | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/3-AxisDigitalCompass) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass.cs/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass.cs.svg?label=Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass.cs" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    var sensor = new ThreeAxisDigitalCompass(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Direction: [X:{result.New.X:N2}," +
            $"Y:{result.New.Y:N2}," +
            $"Z:{result.New.Z:N2}]");

        Console.WriteLine($"Heading: [{Hmc5883.DirectionToHeading(result.New).DecimalDegrees:N2}] degrees");
    };

    // Example that uses an IObersvable subscription to only be notified when the filter is satisfied
    var consumer = Hmc5883.CreateObserver(
        handler: result => Console.WriteLine($"Observer: [x] changed by threshold; new [x]: X:{Hmc5883.DirectionToHeading(result.New):N2}," +
                $" old: X:{((result.Old != null) ? Hmc5883.DirectionToHeading(result.Old.Value) : "n/a"):N2} degrees"),
        // only notify if there's a greater than 5° of heading change
        filter: result => {
            if (result.Old is { } old)
            { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (Hmc5883.DirectionToHeading(result.New - old) > new Azimuth(5));
            }
            return false;
        });

    sensor.Subscribe(consumer);

    // start updating
    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/3-AxisDigitalCompass/Sample/3-AxisDigitalCompass_Sample)

### Wiring Example

| ThreeAxisDigitalCompass | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

