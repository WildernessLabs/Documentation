---
uid: Meadow.Foundation.Grove.Sensors.Light.LineFinder
remarks: *content
---

| LineFinder | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LineFinder) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Light.LineFinder/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Light.LineFinder.svg?label=Meadow.Foundation.Grove.Sensors.Light.LineFinder" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Light.LineFinder" /></a> |

### Code Example

```csharp
public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    var lineFinder = new LineFinder(Device.Pins.D13);

    lineFinder.ColorChanged += (s, e) =>
    {
        Console.WriteLine($"line color: {e}");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LineFinder/Sample/LineFinder_Sample)

### Wiring Example

| LineFinder | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

