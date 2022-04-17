---
uid: Meadow.Foundation.Grove.Sensors.Light.LineFinder
remarks: *content
---

| LineFinder | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LineFinder) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Light.LineFinder/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Light.LineFinder.svg?label=Meadow.Foundation.Grove.Sensors.Light.LineFinder" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var lineFinder = new LineFinder(Device, Device.Pins.D13);

    lineFinder.ColorChanged += (s, e) => Console.WriteLine($"line color: {e}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LineFinder)

### Wiring Example

| LineFinder | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |


















