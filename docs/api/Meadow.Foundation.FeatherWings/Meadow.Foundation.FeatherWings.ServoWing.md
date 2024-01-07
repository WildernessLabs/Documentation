---
uid: Meadow.Foundation.FeatherWings.ServoWing
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.ServoWing
---

| ServoWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/ServoWing) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/ServoWing/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.ServoWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.ServoWing.svg?label=Meadow.Foundation.FeatherWings.ServoWing" alt="NuGet Gallery for Meadow.Foundation.FeatherWings.ServoWing" /></a> |

### Code Example

```csharp
ServoWing servoWing;
Servo servo;

public override Task Initialize()
{
    Console.WriteLine("Initializng ...");

    servoWing = new ServoWing(Device.CreateI2cBus(I2cBusSpeed.FastPlus));

    servo = servoWing.GetServo(0, NamedServoConfigs.SG90);

    return Task.CompletedTask;
}

public override async Task Run()
{
    while (true)
    {
        Console.WriteLine("0");
        await servo.RotateTo(new Angle(0, AU.Degrees));
        await Task.Delay(1000);

        Console.WriteLine("45");
        await servo.RotateTo(new Angle(45, AU.Degrees));
        await Task.Delay(1000);

        Console.WriteLine("90");
        await servo.RotateTo(new Angle(90, AU.Degrees));
        await Task.Delay(1000);

        Console.WriteLine("135");
        await servo.RotateTo(new Angle(135, AU.Degrees));
        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/ServoWing/Sample/ServoWing_Sample)

