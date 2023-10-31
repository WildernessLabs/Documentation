---
uid: Meadow.Foundation.Grove.Sensors.Switches.Tilt
remarks: *content
---

| Tilt | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Tilt) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Switches.Tilt/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Switches.Tilt.svg?label=Meadow.Foundation.Grove.Sensors.Switches.Tilt" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Switches.Tilt" /></a> |

### Code Example

```csharp
Tilt tiltSwitch;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    tiltSwitch = new Tilt(Device.Pins.D13);

    tiltSwitch.Changed += (s, e) =>
    {
        Resolver.Log.Info(tiltSwitch.IsOn ? "Switch is High" : "Switch is Low");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Tilt/Sample/Tilt_Sample)

### Wiring Example

| Tilt | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
