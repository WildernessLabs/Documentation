---
uid: Meadow.Foundation.Motors.Stepper.Em542s

---

| Em542s | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Em542s) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Em542s/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.Stepper.Em542s/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.Stepper.Em542s.svg?label=Meadow.Foundation.Motors.Stepper.Em542s" alt="NuGet Gallery for Meadow.Foundation.Motors.Stepper.Em542s" /></a> |

### Code Example

```csharp
private IStepperMotor stepper;

public override Task Initialize()
{
    stepper = new Em542s(
        Device.Pins.D15.CreateDigitalOutputPort(),
        Device.Pins.D14.CreateDigitalOutputPort(),
        inverseLogic: true);

    return base.Initialize();
}

public override Task Run()
{
    var direction = RotationDirection.Clockwise;

    // max rate for this drive
    var rate = new Meadow.Units.Frequency(200, Meadow.Units.Frequency.UnitType.Kilohertz);

    while (true)
    {
        Resolver.Log.Info($"{direction}");

        stepper.Rotate(360f, direction, rate);
        Thread.Sleep(1000);

        direction = direction switch
        {
            RotationDirection.CounterClockwise => RotationDirection.Clockwise,
            _ => RotationDirection.CounterClockwise
        };
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Em542s/Samples/Em542s_Sample)

