---
uid: Meadow.Foundation.Grove.Servos.Servo
remarks: *content
---

| Servo | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Servo) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Servos.Servo/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Servos.Servo.svg?label=Meadow.Foundation.Grove.Servos.Servo" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var servo = new Servo(Device.CreatePwmPort(Device.Pins.D13));

    servo.RotateTo(new Angle(servo.Config.MinimumAngle.Degrees, AU.Degrees));

    while (true)
    {
        for (int i = 0; i <= servo.Config.MaximumAngle.Degrees; i++)
        {
            servo.RotateTo(new Angle(i, AU.Degrees));
            Console.WriteLine($"Rotating to {i}");
            Thread.Sleep(40);
        }
        Thread.Sleep(2000);
        for (int i = 180; i >= servo.Config.MinimumAngle.Degrees; i--)
        {
            servo.RotateTo(new Angle(i, AU.Degrees));
            Console.WriteLine($"Rotating to {i}");
            Thread.Sleep(40);
        }
        Thread.Sleep(2000);
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
















