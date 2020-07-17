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
public class MeadowApp : App<F7Micro, MeadowApp>
{
    ServoWing servoWing;

    public MeadowApp()
    {
        Initialize();
        Run();
    }

    void Initialize()
    {
        Console.WriteLine("Initialize hardware...");

        var i2CBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);
        servoWing = new ServoWing(i2CBus);

        Console.WriteLine("Initialize wing...");
        servoWing.Initialize();
    }

    void Run()
    {
        Console.WriteLine("Run...");

        var servo = servoWing.GetServo(0, Meadow.Foundation.Servos.NamedServoConfigs.SG90);

        while (true)
        {
            Console.WriteLine("0");
            servo.RotateTo(0);
            Thread.Sleep(1000);

            Console.WriteLine("45");
            servo.RotateTo(45);
            Thread.Sleep(1000);

            Console.WriteLine("90");
            servo.RotateTo(90);
            Thread.Sleep(1000);

            Console.WriteLine("135");
            servo.RotateTo(135);
            Thread.Sleep(1000);
        }
    }
}
```