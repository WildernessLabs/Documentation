---
uid: Meadow.Foundation.Grove.Sensors.Switches.SwitchP
remarks: *content
---

| SwitchP | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/SwitchP) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Switches.SwitchP/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Switches.SwitchP.svg?label=Meadow.Foundation.Grove.Sensors.Switches.SwitchP" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Switches.SwitchP" /></a> |

### Code Example

```csharp
SwitchP groveSwitch;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    groveSwitch = new SwitchP(Device.Pins.D13);

    groveSwitch.Changed += (s, e) =>
    {
        Resolver.Log.Info(groveSwitch.IsOn ? "Switch is High" : "Switch is Low");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/SwitchP/Sample/SwitchP_Sample)

### Wiring Example

| SwitchP | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
