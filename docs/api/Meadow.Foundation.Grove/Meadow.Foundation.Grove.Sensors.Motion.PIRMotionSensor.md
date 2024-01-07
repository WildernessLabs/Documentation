---
uid: Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor
---

| PIRMotionSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/PIRMotionSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor.svg?label=Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor" /></a> |

### Code Example

```csharp
PIRMotionSensor motionSensor;

public override Task Initialize()
{
    motionSensor = new PIRMotionSensor(
        Device.CreateDigitalInterruptPort(
            Device.Pins.D13,
            InterruptMode.EdgeBoth,
            ResistorMode.Disabled));

    motionSensor.OnMotionStart += (sender) =>
    {
        Resolver.Log.Info($"Motion start  {DateTime.Now}");
    };

    motionSensor.OnMotionEnd += (sender) =>
    {
        Resolver.Log.Info($"Motion end  {DateTime.Now}");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/PIRMotionSensor/Sample/PIRMotionSensor_Sample)

### Wiring Example

| PIRMotionSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

