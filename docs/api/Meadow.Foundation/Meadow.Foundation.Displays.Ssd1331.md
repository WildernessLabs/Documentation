---
uid: Meadow.Foundation.Displays.Ssd1331

---

| Ssd1331 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

The **SSD1331** is a display controller used to drive 16bpp (RGB565) color OLED displays over SPI. These displays are commonly found with a resolution of 96x64.

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    Resolver.Log.Info("Create display driver instance");

    var display = new St7796s
    (
        spiBus: spiBus,
        resetPin: Device.Pins.D00,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        width: 320, height: 480
    );

    graphics = new MicroGraphics(display);
    graphics.CurrentFont = new Font8x8();

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);
    graphics.DrawText(5, 5, "Meadow F7");

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Ssd1331_Sample)

### Wiring Example

 To wire a Ssd1331 to your Meadow board, connect the following:

| Ssd1331 | Meadow Pin |
|---------|------------|
| LED-    | 3V3        |
| LED+    | GND        |
| MOSI    | MOSI       |
| SCK     | SCK        |
| RESET   | D15        |
| A0      | D14        |
| CS      | D13        |
| VCC     | 3V3        |
| GND     | GND        |

It should look like the following diagram:

![Wiring a Ssd1331 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Tft.Ssd1331/Ssd1331_Fritzing.png)
