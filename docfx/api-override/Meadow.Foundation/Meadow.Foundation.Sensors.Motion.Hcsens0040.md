---
uid: Meadow.Foundation.Sensors.Motion.Hcsens0040
remarks: *content
---

| Hcsens0040 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Hcsens0040/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Hcsens0040.svg?label=Meadow.Foundation.Sensors.Motion.Hcsens0040" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Hcsens0040" /></a> |

The HCSENS0040 is a microwave motion detector commonly found on the RCWL-0516 board. It detects relative motion using the doppler effect. It uses a single GPIO pin to notify Meadow when motion is detected.

### Code Example

```csharp
private Hcsens0040 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Hcsens0040(Device.CreateDigitalInterruptPort(Device.Pins.D05, Meadow.Hardware.InterruptMode.EdgeBoth));
    sensor.OnMotionDetected += Sensor_OnMotionDetected;

    return Task.CompletedTask;
}

private void Sensor_OnMotionDetected(object sender)
{
    Resolver.Log.Info($"Motion detected {DateTime.Now}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Samples/Hcsens0040_Sample)

### Wiring Example

To wire a Hcsens0040 to your Meadow board, connect the following:

| Hcsens0040 | Meadow Pin  |
|------------|-------------|
| GND        | GND         |
| TriggerOut | D05         |
| VCC        | 3V3         |





