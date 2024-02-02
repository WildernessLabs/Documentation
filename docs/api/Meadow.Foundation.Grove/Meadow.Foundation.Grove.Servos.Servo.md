---
uid: Meadow.Foundation.Grove.Servos.Servo
slug: /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Servos.Servo
---

| Servo | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Servo) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Servos.Servo/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Servos.Servo.svg?label=Meadow.Foundation.Grove.Servos.Servo" alt="NuGet Gallery for Meadow.Foundation.Grove.Servos.Servo" /></a> |

### Code Example

```csharp
Servo servo;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    servo = new Servo(Device.Pins.D13);

    return Task.CompletedTask;
}

public override async Task Run()
{
    await servo.RotateTo(new Angle(servo.Config.MinimumAngle.Degrees, AU.Degrees));

    while (true)
    {
        for (int i = 0; i <= servo.Config.MaximumAngle.Degrees; i++)
        {
            await servo.RotateTo(new Angle(i, AU.Degrees));
            Resolver.Log.Info($"Rotating to {i}");
            await Task.Delay(40);
        }

        await Task.Delay(2000);

        for (int i = 180; i >= servo.Config.MinimumAngle.Degrees; i--)
        {
            await servo.RotateTo(new Angle(i, AU.Degrees));
            Resolver.Log.Info($"Rotating to {i}");
            await Task.Delay(40);
        }

        await Task.Delay(2000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Servo/Sample/Servo_Sample)

### Wiring Example

| Servo | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
