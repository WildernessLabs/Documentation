---
uid: Meadow.Foundation.Servos.ServoCore
remarks: *content
---

| ServoCore | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Servos.ServoCore) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Servos.ServoCore/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Servos.ServoCore.svg?label=Meadow.Foundation.Servos.ServoCore" alt="NuGet Gallery for Meadow.Foundation.Servos.ServoCore" /></a> |
### Code Example

```csharp
protected Servo servo;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    servo = new Servo(Device.Pins.D02, NamedServoConfigs.SG90);

    return Task.CompletedTask;
}

public async override Task Run()
{
    await servo.RotateTo(new Angle(0, AU.Degrees));

    while (true)
    {
        for (int i = 0; i <= servo.Config.MaximumAngle.Degrees; i++)
        {
            await servo.RotateTo(new Angle(i, AU.Degrees));
            Resolver.Log.Info($"Rotating to {i}");
        }

        await Task.Delay(2000);

        for (int i = 180; i >= servo.Config.MinimumAngle.Degrees; i--)
        {
            await servo.RotateTo(new Angle(i, AU.Degrees));
            Resolver.Log.Info($"Rotating to {i}");
        }
        await Task.Delay(2000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Samples/ServoCore_Sample)

