---
uid: Meadow.Foundation.Sensors.Motion.Hcsens0040
remarks: *content
---

| Hcsens0040 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Hcsens0040/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Hcsens0040.svg?label=Meadow.Foundation.Sensors.Motion.Hcsens0040" /></a> |

The HCSENS0040 is a microwave motion detector commonly found on the RCWL-0516 board. It detects relative motion using the doppler effect. It uses a single GPIO pin to notify Meadow when motion is detected.

### Code Example

```csharp
Hcsens0040 sensor;

public MeadowApp()
{
    sensor = new Hcsens0040(Device.CreateDigitalInputPort(Device.Pins.D05));
    sensor.OnMotionDetected += Sensor_OnMotionDetected;
}

private void Sensor_OnMotionDetected(object sender)
{

    Console.WriteLine($"Motion detected {DateTime.Now}");
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





