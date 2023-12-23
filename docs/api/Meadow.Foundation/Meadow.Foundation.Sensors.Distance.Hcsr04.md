---
uid: Meadow.Foundation.Sensors.Distance.Hcsr04

---

| Hcsr04 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" alt="Status badge: in-progress" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Hcsr04/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Hcsr04.svg?label=Meadow.Foundation.Sensors.Distance.Hcsr04" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.Hcsr04" /></a> |

The **HC-SR04** ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

### Code Example

```csharp
Hcsr04 hCSR04;

public override Task Initialize()
{
    Resolver.Log.Info($"Hello HC-SR04 sample");

    hCSR04 = new Hcsr04(
        triggerPin: Device.Pins.D05,
        echoPin: Device.Pins.D06);
    hCSR04.DistanceUpdated += HCSR04_DistanceUpdated;

    return Task.CompletedTask;
}

public override Task Run()
{
    while (true)
    {
        // Sends a trigger signal
        hCSR04.MeasureDistance();
        Thread.Sleep(2000);
    }
}

private void HCSR04_DistanceUpdated(object sender, IChangeResult<Meadow.Units.Length> e)
{
    Resolver.Log.Info($"Distance (cm): {e.New.Centimeters}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Samples/Hcsr04_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Distance.HCSR04/HCSR04_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />
