---
uid: Meadow.Foundation.Motors.Stepper.A4988

---

| A4988 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.Stepper.A4988/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.Stepper.A4988.svg?label=Meadow.Foundation.Motors.Stepper.A4988" alt="NuGet Gallery for Meadow.Foundation.Motors.Stepper.A4988" /></a> |

### Code Example

```csharp
private A4988 a4988;

public override Task Initialize()
{
    a4988 = new A4988(
        step: Device.Pins.D01,
        direction: Device.Pins.D00,
        ms1Pin: Device.Pins.D04,
        ms2Pin: Device.Pins.D03,
        ms3Pin: Device.Pins.D02);

    return base.Initialize();
}

public override Task Run()
{
    var stepDivisors = (StepDivisor[])Enum.GetValues(typeof(StepDivisor));
    while (true)
    {
        foreach (var step in stepDivisors)
        {
            for (var d = 2; d < 5; d++)
            {
                Resolver.Log.Info($"180 degrees..Speed divisor = {d}..1/{(int)step} Steps..{a4988.Direction}...");
                a4988.RotationSpeedDivisor = d;
                a4988.StepDivisor = step;
                a4988.Rotate(180);

                Thread.Sleep(500);
            }
        }
        a4988.Direction = (a4988.Direction == RotationDirection.Clockwise) ? RotationDirection.CounterClockwise : RotationDirection.Clockwise;
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Samples/A4988_Sample)

### Wiring Example

To wire a A4988 to your Meadow board, connect the following:

| A4988     | Meadow Pin |
|-----------|------------|
| GND       | GND        |
| VCC       | 5V         |
| STEP      | D01        |
| DIRECTION | D00        |
| M1        | D04        |
| M2        | D03        |
| M3        | D02        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Motors.Stepper.A4988/A4988_Fritzing.png" />

