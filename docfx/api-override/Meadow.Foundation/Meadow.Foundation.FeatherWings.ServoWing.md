---
uid: Meadow.Foundation.FeatherWings.ServoWing
remarks: *content
---

| ServoWing     |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/develop/Source/Meadow.Foundation.Peripherals/FeatherWings.ServoWing) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.ServoWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.ServoWing.svg?label=Meadow.Foundation.FeatherWings.ServoWing" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
ServoWing servoWing;

public MeadowApp()
{
    Console.WriteLine("Initializng ...");

    var i2CBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);
    servoWing = new ServoWing(i2CBus);

    servoWing.Initialize();

    var servo = servoWing.GetServo(0, NamedServoConfigs.SG90);

    while (true)
    {
        Console.WriteLine("0");
        servo.RotateTo(new Angle(0, AU.Degrees));
        Thread.Sleep(1000);

        Console.WriteLine("45");
        servo.RotateTo(new Angle(45, AU.Degrees));
        Thread.Sleep(1000);

        Console.WriteLine("90");
        servo.RotateTo(new Angle(90, AU.Degrees));
        Thread.Sleep(1000);

        Console.WriteLine("135");
        servo.RotateTo(new Angle(135, AU.Degrees));
        Thread.Sleep(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/FeatherWings.ServoWing/Samples/FeatherWings.ServoWing_Sample)

`