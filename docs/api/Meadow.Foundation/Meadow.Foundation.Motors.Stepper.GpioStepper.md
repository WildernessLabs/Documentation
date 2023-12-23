---
uid: Meadow.Foundation.Motors.Stepper.GpioStepper

---

| GpioStepper | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.Stepper.GpioStepper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.Stepper.GpioStepper.svg?label=Meadow.Foundation.Motors.Stepper.GpioStepper" alt="NuGet Gallery for Meadow.Foundation.Motors.Stepper.GpioStepper" /></a> |

### Code Example

```csharp
private IPositionalMotor stepper;

private bool UseStepDirConfiguration { get; set; } = true;

public override Task Initialize()
{
    if (UseStepDirConfiguration)
    {
        // use a drive configured for STEP/DIR GPIOs
        stepper = new StepDirStepper(
            Device.Pins.D15.CreateDigitalOutputPort(),
            Device.Pins.D14.CreateDigitalOutputPort(),
            stepsPerRevolution: 200);
    }
    else
    {
        // use a drive configured for CW/CCW GPIOs
        stepper = new CwCcwStepper(
            Device.Pins.D15.CreateDigitalOutputPort(),
            Device.Pins.D14.CreateDigitalOutputPort(),
            stepsPerRevolution: 200);
    }

    return base.Initialize();
}

public override Task Run()
{
    // return RunUntilCancelled();
    // return RunForSpecifiedTime();
    // return RunToSpecificPositions();
    return RotateSpecifiedAmount();
}

private async Task RunUntilCancelled()
{
    var direction = RotationDirection.Clockwise;
    var rate = new AngularVelocity(1, AngularVelocity.UnitType.RevolutionsPerSecond);

    while (true)
    {
        var tokenSource = new CancellationTokenSource();

        Resolver.Log.Info($"Start running...");
        var task = stepper.Run(direction, rate, tokenSource.Token);

        Resolver.Log.Info($"wait for 3 seconds...");
        await Task.Delay(3000);

        Resolver.Log.Info($"cancelling motion...");
        tokenSource.Cancel();

        Resolver.Log.Info($"wait for motion to stop");
        task.Wait();

        Resolver.Log.Info($"motion stopped");

        direction = direction switch
        {
            RotationDirection.CounterClockwise => RotationDirection.Clockwise,
            _ => RotationDirection.CounterClockwise
        };

        await Task.Delay(500);
    }
}

private async Task RunForSpecifiedTime()
{
    while (true)
    {
        var direction = RotationDirection.Clockwise;
        var rate = new AngularVelocity(1, AngularVelocity.UnitType.RevolutionsPerSecond);

        Resolver.Log.Info($"Run for 2 seconds...");
        await stepper.RunFor(TimeSpan.FromSeconds(2), direction, rate);

        direction = RotationDirection.CounterClockwise;
        rate = new AngularVelocity(2, AngularVelocity.UnitType.RevolutionsPerSecond);

        await stepper.RunFor(TimeSpan.FromSeconds(2), direction, rate);
    }
}

private async Task RotateSpecifiedAmount()
{
    while (true)
    {
        for (var turns = 0.5d; turns <= 5; turns += 0.5)
        {
            Resolver.Log.Info($"Moving {turns:0.0} revolutions");

            var direction = RotationDirection.Clockwise;
            var rate = new AngularVelocity(4, AngularVelocity.UnitType.RevolutionsPerSecond);

            await stepper.Rotate(new Angle(turns, Angle.UnitType.Revolutions), direction, rate);

            await Task.Delay(1000);
        }
    }
}

private async Task RunToSpecificPositions()
{
    RotationDirection direction;

    var rate = new AngularVelocity(2, AngularVelocity.UnitType.RevolutionsPerSecond);

    // turn in smaller and smaller degree increments
    var increments = new double[] { 180, 90, 60, 45, 30 };

    while (true)
    {
        direction = RotationDirection.Clockwise;

        Resolver.Log.Info($"{direction}");

        foreach (var increment in increments)
        {
            Resolver.Log.Info($"Moving in increments of {increment} degrees");

            await stepper.GoTo(Angle.Zero, direction, rate);
            await Task.Delay(1000);

            var nextPosition = 0d;

            while (nextPosition < 360)
            {
                Resolver.Log.Info($"Moving to {nextPosition} degrees");

                nextPosition += increment;

                await stepper.GoTo(new Angle(nextPosition, Meadow.Units.Angle.UnitType.Degrees), direction, rate);
                await Task.Delay(1000);
            }
        }

        await Task.Delay(3000);

        direction = RotationDirection.CounterClockwise;

        Resolver.Log.Info($"{direction}");

        foreach (var increment in increments)
        {
            Resolver.Log.Info($"Moving in increments of {increment} degrees");

            var nextPosition = 360d;

            await stepper.GoTo(Angle.Zero, direction, rate);
            await Task.Delay(1000);

            while (nextPosition > 0)
            {
                Resolver.Log.Info($"Moving to {nextPosition} degrees");

                nextPosition -= increment;

                await stepper.GoTo(new Angle(nextPosition, Meadow.Units.Angle.UnitType.Degrees), direction, rate);
                await Task.Delay(1000);
            }
        }

        await Task.Delay(3000);

        Resolver.Log.Info($"--- Cycle complete ---");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Samples/GpioStepper_Sample)


