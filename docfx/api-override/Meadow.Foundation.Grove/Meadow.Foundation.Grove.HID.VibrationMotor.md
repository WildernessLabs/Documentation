---
uid: Meadow.Foundation.Grove.HID.VibrationMotor
remarks: *content
---

| VibrationMotor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/VibrationMotor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.HID.VibrationMotor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.HID.VibrationMotor.svg?label=Meadow.Foundation.Grove.HID.VibrationMotor" alt="NuGet Gallery for VibrationMotor" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var vibrationMotor = new VibrationMotor(Device, Device.Pins.D13);

    for(int i = 0; i < 5; i++)
    {
        Console.WriteLine("Motor on");
        vibrationMotor.IsVibrating = true;
        Thread.Sleep(1000);

        Console.WriteLine("Motor off");
        vibrationMotor.IsVibrating = false;
        Thread.Sleep(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/VibrationMotor/Sample/VibrationMotor_Sample)

### Wiring Example

| VibrationMotor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
