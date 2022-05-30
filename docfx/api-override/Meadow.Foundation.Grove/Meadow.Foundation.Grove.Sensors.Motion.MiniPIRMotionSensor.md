---
uid: Meadow.Foundation.Grove.Sensors.Motion.MiniPIRMotionSensor
remarks: *content
---

| MiniPIRMotionSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/MiniPIRMotionSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Motion.MiniPIRMotionSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Motion.MiniPIRMotionSensor.svg?label=Meadow.Foundation.Grove.Sensors.Motion.MiniPIRMotionSensor" alt="NuGet Gallery for MiniPIRMotionSensor" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    var miniPIRMotionSensor = new MiniPIRMotionSensor(
        Device.CreateDigitalInputPort(
            Device.Pins.D13, 
            InterruptMode.EdgeBoth, 
            ResistorMode.Disabled));
    
    miniPIRMotionSensor.OnMotionStart += (sender) =>
    {
        Console.WriteLine($"Motion start  {DateTime.Now}");
    };

    miniPIRMotionSensor.OnMotionEnd += (sender) => 
    { 
        Console.WriteLine($"Motion end  {DateTime.Now}"); 
    };
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/MiniPIRMotionSensor/Sample/MiniPIRMotionSensor_Sample)

### Wiring Example

| MiniPIRMotionSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

