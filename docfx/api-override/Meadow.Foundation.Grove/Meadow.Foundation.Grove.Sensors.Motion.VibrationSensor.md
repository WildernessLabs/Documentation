---
uid: Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor
remarks: *content
---

| VibrationSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/VibrationSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor.svg?label=Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var vibrationSensor = new VibrationSensor(Device, Device.Pins.D13);

    vibrationSensor.VibrationDetected += (s, e) => 
    { 
        Console.WriteLine("Motion detected"); 
    };
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/VibrationSensor)

### Wiring Example

| VibrationSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
















