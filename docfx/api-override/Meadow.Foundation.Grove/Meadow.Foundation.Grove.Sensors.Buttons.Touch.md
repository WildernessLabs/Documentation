---
uid: Meadow.Foundation.Grove.Sensors.Buttons.Touch
remarks: *content
---

| Touch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Touch) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Buttons.Touch/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Buttons.Touch.svg?label=Meadow.Foundation.Grove.Sensors.Buttons.Touch" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Buttons.Touch" /></a> |

### Code Example

```csharp
Touch touch;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    touch = new Touch(Device.Pins.D04);
    touch.LongClickedThreshold = TimeSpan.FromMilliseconds(1500);

    touch.Clicked += (s, e) =>
    {
        Console.WriteLine("Grove Touch pressed");
    };

    touch.LongClicked += (s, e) =>
    {
        Console.WriteLine("Grove Touch long pressed");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Touch/Sample/Touch_Sample)

### Wiring Example

| Touch | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
