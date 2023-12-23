---
uid: Meadow.Foundation.Leds.Apa102

---

| Apa102 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Apa102) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Leds.Apa102/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Leds.Apa102.svg?label=Meadow.Foundation.Leds.Apa102" alt="NuGet Gallery for Meadow.Foundation.Leds.Apa102" /></a> |

### Code Example

```csharp
Apa102 apa102;
readonly int numberOfLeds = 256;
readonly float maxBrightness = 0.25f;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    apa102 = new Apa102(Device.CreateSpiBus(), numberOfLeds, Apa102.PixelOrder.BGR);

    return base.Initialize();
}

public override Task Run()
{
    apa102.Clear();

    apa102.SetLed(index: 0, color: Color.Red, brightness: 0.5f);
    apa102.SetLed(index: 1, color: Color.Purple, brightness: 0.6f);
    apa102.SetLed(index: 2, color: Color.Blue, brightness: 0.7f);
    apa102.SetLed(index: 3, color: Color.Green, brightness: 0.8f);
    apa102.SetLed(index: 4, color: Color.Yellow, brightness: 0.9f);
    apa102.SetLed(index: 5, color: Color.Orange, brightness: 1.0f);

    apa102.Show();

    Apa102Tests();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Apa102/Samples/Apa102_Sample)

### Wiring Example

To wire a Apa102 to your Meadow board, connect the following:

| Apa102 | Meadow Pin  |
|--------|-------------|
| GND    | GND         |
| CI     | SCK         |
| DI     | MOSI        |
| VCC    | 5V          |

It should look like the following diagram:

![Wiring an Apa102 to a Meadow F7](../../API_Assets/Meadow.Foundation.Leds.Apa102/Apa102_Fritzing.png)
