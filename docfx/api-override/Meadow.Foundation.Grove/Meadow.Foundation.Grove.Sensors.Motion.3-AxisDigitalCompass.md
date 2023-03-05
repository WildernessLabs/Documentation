---
uid: Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass
remarks: *content
---

| 3-AxisDigitalCompass | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/3-AxisDigitalCompass) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass.svg?label=Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass" /></a> |
### Code Example

```csharp
ThreeAxisDigitalCompass sensor;

public override Task Initialize()
{
    Console.WriteLine("Initializing ...");

    sensor = new ThreeAxisDigitalCompass(Device.CreateI2cBus());

    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Direction: [X:{result.New.X:N2}," +
            $"Y:{result.New.Y:N2}," +
            $"Z:{result.New.Z:N2}]");

        Console.WriteLine($"Heading: [{Hmc5883.DirectionToHeading(result.New).DecimalDegrees:N2}] degrees");
    };

    var consumer = Hmc5883.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Observer: [x] changed by threshold; " +
                $"new [x]: X:{Hmc5883.DirectionToHeading(result.New):N2}, " +
                $"old: X:{((result.Old != null) ? Hmc5883.DirectionToHeading(result.Old.Value) : "n/a"):N2} degrees");
        },
        filter: result => {
            if (result.Old is { } old)
            { //c# 8 pattern match syntax. checks for !null and assigns var.
                return (Hmc5883.DirectionToHeading(result.New - old) > new Azimuth(5));
            }
            return false;
        });

    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public override Task Run()
{
    sensor.StartUpdating(TimeSpan.FromSeconds(1));

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/3-AxisDigitalCompass/Sample/3-AxisDigitalCompass_Sample)


