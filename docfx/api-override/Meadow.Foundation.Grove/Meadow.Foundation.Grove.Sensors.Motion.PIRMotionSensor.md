---
uid: Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor
remarks: *content
---

| PIRMotionSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/PIRMotionSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor.svg?label=Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor" alt="NuGet Gallery for PIRMotionSensor" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    var motionSensor = new PIRMotionSensor(
        Device.CreateDigitalInputPort(
            Device.Pins.D13, 
            InterruptMode.EdgeBoth, 
            ResistorMode.Disabled));

    motionSensor.OnMotionStart += (sender) => 
    { 
        Console.WriteLine($"Motion start  {DateTime.Now}"); 
    };

    motionSensor.OnMotionEnd += (sender) => 
    { 
        Console.WriteLine($"Motion end  {DateTime.Now}"); 
    };
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

