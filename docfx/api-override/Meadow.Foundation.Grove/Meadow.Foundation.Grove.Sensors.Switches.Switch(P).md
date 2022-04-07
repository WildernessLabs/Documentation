---
uid: Meadow.Foundation.Grove.Sensors.Switches.SwitchP
remarks: *content
---

| Switch(P) | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Switch(P)) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Switches.SwitchP/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Switches.SwitchP.svg?label=Meadow.Foundation.Grove.Sensors.Switches.SwitchP" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var groveSwitch = new SwitchP(Device, Device.Pins.D13);

    groveSwitch.Changed += (s, e) =>
    {
        Console.WriteLine(groveSwitch.IsOn ? "Switch is High" : "Switch is Low");
    };
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Switch(P))

### Wiring Example

| SwitchP | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

