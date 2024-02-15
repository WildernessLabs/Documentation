---
uid: Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor
---

| VibrationSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/VibrationSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor.svg?label=Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor" /></a> |

### Code Example

```csharp
VibrationSensor sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new VibrationSensor(Device.Pins.D13);

    sensor.VibrationDetected += (s, e) =>
    {
        Resolver.Log.Info("Motion detected");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/VibrationSensor/Sample/VibrationSensor_Sample)

### Wiring Example

| VibrationSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

