---
uid: Meadow.Foundation.Grove.HID.VibrationMotor
remarks: *content
---

| VibrationMotor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/VibrationMotor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.HID.VibrationMotor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.HID.VibrationMotor.svg?label=Meadow.Foundation.Grove.HID.VibrationMotor" alt="NuGet Gallery for Meadow.Foundation.Grove.HID.VibrationMotor" /></a> |

### Code Example

```csharp
VibrationMotor vibrationMotor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    vibrationMotor = new VibrationMotor(Device.Pins.D13);

    return Task.CompletedTask;
}

public override async Task Run()
{
    for (int i = 0; i < 5; i++)
    {
        Resolver.Log.Info("Motor on");
        vibrationMotor.IsVibrating = true;
        await Task.Delay(1000);

        Resolver.Log.Info("Motor off");
        vibrationMotor.IsVibrating = false;
        await Task.Delay(1000);
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
