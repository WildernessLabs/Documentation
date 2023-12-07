---
uid: Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch
remarks: *content
---

| MagneticSwitch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/MagneticSwitch) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch.svg?label=Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch" /></a> |

### Code Example

```csharp
public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    var magneticSwitch = new MagneticSwitch(Device.Pins.D13);

    magneticSwitch.Changed += (s, e) =>
    {
        Console.WriteLine($"Switched - open {magneticSwitch.IsOn}");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/MagneticSwitch/Sample/MagneticSwitch_Sample)

### Wiring Example

| MagneticSwitch | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
