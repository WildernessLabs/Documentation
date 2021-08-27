---
uid: Meadow.Foundation.Sensors.Distance.Sfsr02
remarks: *content
---

| SF-SR02       |             |
|---------------|-------------|
| Status        | Not working |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Sfsr02) |
| NuGet package | Not published |

The **SF-SR02** ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Sfsr02/Samples/)### Code Example

```csharp
Sfsr02 sFSR02;

public MeadowApp()
{
    sFSR02 = new Sfsr02(Device, Device.Pins.D03);
    sFSR02.DistanceUpdated += SFSR02_DistanceUpdated;

    while (true)
    {
        Console.WriteLine("Measure Distance:");

        // Sends a trigger signal
        sFSR02.MeasureDistance();
        Thread.Sleep(1500);
    }
}

private void SFSR02_DistanceUpdated(object sender, IChangeResult<Meadow.Units.Length> e)
{
    Console.WriteLine($"{e.New.Centimeters}cm");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Sfsr02/Samples/Sensors.Distance.Sfsr02_Sample)

 