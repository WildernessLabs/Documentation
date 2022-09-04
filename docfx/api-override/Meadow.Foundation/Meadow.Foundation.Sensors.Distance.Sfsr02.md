---
uid: Meadow.Foundation.Sensors.Distance.Sfsr02
remarks: *content
---

| Sfsr02 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Sfsr02/Driver) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Sfsr02/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Sfsr02.svg?label=Meadow.Foundation.Sensors.Distance.Sfsr02" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.Sfsr02" /></a> |

The **SF-SR02** ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Sfsr02/Samples/)### Code Example

```csharp
Sfsr02 sFSR02;

public override Task Initialize()
{
    sFSR02 = new Sfsr02(Device, Device.Pins.D03);
    sFSR02.DistanceUpdated += SFSR02_DistanceUpdated;

    return Task.CompletedTask;
}

public override async Task Run()
{
    while (true)
    {
        Console.WriteLine("Measure Distance:");

        sFSR02.MeasureDistance();
        await Task.Delay(1500);
    }
}

private void SFSR02_DistanceUpdated(object sender, IChangeResult<Meadow.Units.Length> e)
{
    Console.WriteLine($"{e.New.Centimeters}cm");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Sfsr02/Samples/Sfsr02_Sample)

