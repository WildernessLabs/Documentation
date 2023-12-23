---
uid: Meadow.Foundation.Displays.Ili9486

---

| Ili9486 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    Resolver.Log.Info("Create display driver instance");

    var display = new Ili9486
    (
        spiBus: spiBus,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        width: 320, height: 480
    );

    graphics = new MicroGraphics(display)
    {
        IgnoreOutOfBoundsPixels = true,
        CurrentFont = new Font8x8()
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);
    graphics.DrawCircle(50, 50, 40, Meadow.Foundation.Color.Blue, false);
    graphics.DrawText(5, 5, "Meadow F7");

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Ili9486_Sample)

### Wiring Example

 To wire a Ili9486 to your Meadow board, connect the following:

| Ili9486 | Meadow Pin |
|---------|------------|
| GND     | GND        |
| VCC     | 3V3        |
| SCL     | SCK        |
| SDA     | MOSI       |
| CS      | D02        |
| DC      | D01        |
| RESET   | D00        |

It should look like the following diagram:

![Wiring a Ili9486 to a Meadow F7](../../API_Assets/Meadow.Foundation.Displays.Tft.Ili9486/Ili9486_Fritzing.png)
