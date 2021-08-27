---
uid: Meadow.Foundation.Sensors.Distance.Hysrf05
remarks: *content
---

| Hysrf05 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hysrf05) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Hysrf05/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Hysrf05.svg?label=Meadow.Foundation.Sensors.Distance.Hysrf05" /></a> |

The **HY-SRF05** ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hysrf05/Samples/) 

### Code Example

```csharp
Hysrf05 hYSRF05;

public MeadowApp()
{
    hYSRF05 = new Hysrf05(Device, Device.Pins.D05, Device.Pins.D06);
    hYSRF05.DistanceUpdated += HYSRF05_DistanceUpdated;

    while (true)
    {
        // Sends a trigger signal
        hYSRF05.MeasureDistance();
        Thread.Sleep(500);
    }
}

private void HYSRF05_DistanceUpdated(object sender, IChangeResult<Meadow.Units.Length> e)
{
    Console.WriteLine($"Distance is {e.New.Centimeters}cm");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hysrf05/Samples/Sensors.Distance.Hysrf05_Sample)

### Wiring Example

The HY-SRF05 sensor has 5 pins, but you’ll only connect 4: power, ground, echo and trigger (out isn’t used).

<img src="../../API_Assets/Meadow.Foundation.Sensors.Distance.HYSRF05/HYSRF05.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

