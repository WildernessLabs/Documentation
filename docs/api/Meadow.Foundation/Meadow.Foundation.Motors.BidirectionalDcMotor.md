---
uid: Meadow.Foundation.Motors.BidirectionalDcMotor

---

| BidirectionalDcMotor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Motors) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

### Code Example

```csharp
private BidirectionalDcMotor motor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    IDigitalOutputPort motorA;
    IDigitalOutputPort motorB;

    motorA = Device.Pins.D00.CreateDigitalOutputPort(false);
    motorB = Device.Pins.D01.CreateDigitalOutputPort(false);

    motor = new BidirectionalDcMotor(motorA, motorB);

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Test Motor...");

    while (true)
    {
        // Motor clockwise
        motor.StartClockwise();
        await Task.Delay(1000);

        // Motor Stop
        motor.Stop();
        await Task.Delay(500);

        // Motor counter clockwise
        motor.StartCounterClockwise();
        await Task.Delay(1000);

        // Motor Stop
        motor.Stop();
        await Task.Delay(500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Motor.BidirectionalDcMotor_Sample)

