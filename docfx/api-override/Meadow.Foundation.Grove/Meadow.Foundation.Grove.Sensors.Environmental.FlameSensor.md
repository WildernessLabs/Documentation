---
uid: Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor
remarks: *content
---

| FlameSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/FlameSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor.svg?label=Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor" /></a> |

### Code Example

```csharp
FlameSensor flameSensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    flameSensor = new FlameSensor(Device.Pins.D13);

    flameSensor.FlameDetected += (s, e) =>
    {
        Resolver.Log.Info($"fire detected: {e}");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/FlameSensor/Sample/FlameSensor_Sample)

### Wiring Example

| FlameSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
